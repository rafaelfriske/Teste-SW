import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environments';

export interface Task {
    id?: number;
    title: string;
    description: string;
    dueDate: string | Date;
    status: 'pending' | 'completed';
    createdAt?: Date;
  }
@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private apiUrl = environment.apiUrl; // Usando a URL do environment

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/TbTarefas`);
  }

  // createTask(task: Task): Observable<Task> {
  //   return this.http.post<Task>(this.apiUrl,);
  // }
  novaTarefa(obj: any): Observable<any> {
    // Obtenha o ID do usuário logado (você precisará implementar isso)
    const idUsuario = 1; 
    
    const tarefaParaAPI = {
      Titulo: obj.title,
      Descricao: obj.description,
      DataConclusao: obj.dueDate ? new Date(obj.dueDate).toISOString() : null,
      IdStatus: 1, // 1 = Pendente (você precisa saber os IDs dos status)
      IdUsuario: idUsuario,
      DataCriacao: new Date().toISOString()
    };
  
    return this.http.post(`${this.apiUrl}/TbTarefas`, tarefaParaAPI);
  }

  editarStatusTarefa(result: any): Observable<any> {
    // Ajusta o objeto para corresponder ao DTO do backend
    const body = {
        IdStatus: result.idStatus,
        IdTarefa: result.idTarefa,
    };
    
    return this.http.put(`${this.apiUrl}/TbTarefas/alterarStatus/${result.idTarefa}`, body);
}

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }

  getTaskById(idTarefa: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/TbTarefas/${idTarefa}`);
  }

  getStatusTarefa(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/TbStatus`);
  }
  alterarStatusTarefa(tarefa: any): Observable<any> {
    const tarefaParaAPI = {
      Id: tarefa.id,
      Titulo: tarefa.title,
      Descricao: tarefa.description,
      DataConclusao: tarefa.dueDate ? new Date(tarefa.dueDate).toISOString() : null,
      IdStatus: tarefa.status,
      IdUsuario: 1, // ID do usuário logado
      DataCriacao: new Date().toISOString()
    };
  
    return this.http.put(`${this.apiUrl}/TbTarefas/${tarefa.id}`, tarefaParaAPI);
  }

  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${taskId}`);
  }
}



