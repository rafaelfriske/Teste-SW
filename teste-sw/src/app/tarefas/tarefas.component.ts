import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TarefasService } from '../services/tarefas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlterarStatusModalComponent } from './components/alterar-status-modal/alterar-status-modal.component';


@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {
  taskForm!: FormGroup;
  tarefas: any;
  newTask: Partial<any> = {
    title: '',
    description: '',
    dueDate: '',
    status: 'Pendente'
  };

  tasks = [
    {
      id: 1,
      title: 'Desenvolver tela de gerenciamento',
      description: 'Criar a interface do gerenciador de tarefas com Angular',
      dueDate: '2024-06-15',
      status: 'Pendente'
    },
    {
      id: 2,
      title: 'Configurar ambiente de desenvolvimento',
      description: 'Instalar Angular CLI e configurar o projeto',
      dueDate: '2024-06-10',
      status: 'Concluída',
      completedDate: '2024-06-10'
    },
    {
      id: 3,
      title: 'Revisar documentação',
      description: 'Revisar os requisitos do projeto',
      dueDate: '2024-06-12',
      status: 'Pendente'
    }
  ];

  filterStatus: string = 'Todas';
  sortOption: string = 'dataCrescente';

  constructor(private http: HttpClient, private tarefasServive: TarefasService, private fb: FormBuilder,
    private dialog: MatDialog,
    
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.carregarTarefas();
  }
  initializeForm(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required]
    });
  }

  carregarTarefas(): void {debugger
    this.tarefasServive.getAllTasks().subscribe({ 
      next: (tarefas) => {
        this.tarefas = tarefas;
      },
      error: (erro) => {
        console.error('Erro ao carregar tarefas:', erro);
      }
    });
  }
  removerTarefa(tarefa: any){}
  alternarStatus(tarefa: any){}

  adicionarTarefa() { debugger
    if (this.taskForm.valid) {
      const newTask = {
        title: this.taskForm.value.title,
        description: this.taskForm.value.description,
        dueDate: this.taskForm.value.dueDate
      };
  
      this.tarefasServive.novaTarefa(newTask).subscribe({
        next: (response) => {
          console.log('Tarefa criada com sucesso:', response);
          this.carregarTarefas(); // Recarrega a lista após adicionar
          this.taskForm.reset();
        },
        error: (error) => {
          console.error('Erro ao criar tarefa:', error);
          if (error.error) {
            console.error('Detalhes do erro:', error.error);
          }
        }
      });
    }
  }

  resetForm() {
    this.newTask = {
      title: '',
      description: '',
      dueDate: '',
      status: 'Pendente'
    };
  }

  completeTask(task: any) {
    task.status = 'Concluída';
    task.completedDate = new Date().toISOString().split('T')[0];
  }

  reopenTask(task: any) {
    task.status = 'Pendente';
    task.completedDate = undefined;
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  get filteredTasks() {
    let tasks = [...this.tasks];
    
    // Filtro por status
    if (this.filterStatus !== 'Todas') {
      tasks = tasks.filter(task => task.status === this.filterStatus);
    }
    
    // Ordenação
    if (this.sortOption === 'dataCrescente') {
      tasks.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
    } else {
      tasks.sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime());
    }
    
    return tasks;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  }

  logout() {
    // Lógica de logout (se necessário)
    console.log('Logout realizado');
  }

  getTarefasPorStatus(idStatus: number): any[] {
    return this.tarefas.filter((tarefa: { idStatus: number; }) => tarefa.idStatus === idStatus);
  }

  editarTarefa(tarefaEscolhida: any): void { // Melhor tipar com uma interface
    const dialogRef = this.dialog.open(AlterarStatusModalComponent, {
      width: '400px',
      data: { 
        tarefa: tarefaEscolhida // Passando o objeto completo
      }
    });
  
  
    dialogRef.afterClosed().subscribe((novoStatus: number | undefined) => {
      if (novoStatus !== undefined) {
        this.atualizarStatusTarefa(tarefaEscolhida, novoStatus);
      }
    });
  }
  
  // Método auxiliar para atualizar (separado para melhor organização)
  private atualizarStatusTarefa(idTarefa: number, novoStatus: number): void {
    this.tarefasServive.getTaskById(idTarefa).subscribe({
      next: (tarefa: any) => {
        const tarefaAtualizada = {
          ...tarefa,
          idStatus: novoStatus,
          dataConclusao: novoStatus === 2 ? new Date().toISOString() : tarefa.dataConclusao
          // Atualiza data apenas se for concluída (status 2)
        };
        
        // this.tarefasServive.updateTask(tarefaAtualizada).subscribe({
        //   next: () => {
        //     this.carregarTarefas();
        //     this.snackBar.open('Status atualizado com sucesso!', 'Fechar', { duration: 3000 });
        //   },
        //   error: (erro) => {
        //     console.error('Erro ao atualizar tarefa:', erro);
        //     this.snackBar.open('Erro ao atualizar status', 'Fechar', { duration: 3000 });
        //   }
        // });
      },
      error: (erro) => {
        console.error('Erro ao buscar tarefa:', erro);
       //this.snackBar.open('Erro ao carregar tarefa', 'Fechar', { duration: 3000 });
      }
    });
  }
  
  // Método auxiliar para pegar status atual (opcional)
  private getStatusAtual(idTarefa: number): number {
    const tarefa = this.tarefas.find((t: { idTarefa: number; }) => t.idTarefa === idTarefa);
    return idTarefa; // Retorna 1 (Pendente) se não encontrar
  }
}