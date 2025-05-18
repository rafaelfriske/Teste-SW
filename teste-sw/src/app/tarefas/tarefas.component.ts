import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TarefasService } from '../services/tarefas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlterarStatusModalComponent } from './components/alterar-status-modal/alterar-status-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';


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
  isLoading = false;
  public math = Math;
  currentPage = 1;
  itemsPerPage = 5;


  filterStatus: string = 'Todas';
  sortOption: string = 'dataCrescente';

  constructor(private http: HttpClient, private tarefasServive: TarefasService, private fb: FormBuilder,
    private dialog: MatDialog, private snackBar: MatSnackBar, private authService: AuthService
    
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

  getTarefasPaginadas(tarefas: any[]): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return tarefas.slice(startIndex, startIndex + this.itemsPerPage);
  }
  getTotalPages(itemsCount: number): number {
    return Math.ceil(itemsCount / this.itemsPerPage);
  }



  carregarTarefas(): void {
    this.isLoading = true;
    this.tarefasServive.getAllTasks().subscribe({ 
      next: (tarefas) => {
        this.tarefas = tarefas;
        this.isLoading = false;
      },
      error: (erro) => {
        this.isLoading = false;
        this.snackBar.open('Erro ao carregar tarefas', 'Fechar', { duration: 3000 });
      }
    });
  }
  removerTarefa(tarefa: any) {
    if (confirm('Tem certeza que deseja remover esta tarefa?')) {
      this.isLoading = true;
      
      this.tarefasServive.removerTarefa(tarefa).subscribe({ 
        next: () => {
         this.carregarTarefas();
          

          
          this.snackBar.open('Tarefa removida com sucesso!', 'Fechar', { duration: 3000 });
          this.isLoading = false;
        },
        error: (erro) => {
          console.error('Erro ao remover tarefa:', erro);
          this.snackBar.open('Erro ao remover tarefa', 'Fechar', { duration: 3000 });
          this.isLoading = false;
        }
      });
    }
  }

  adicionarTarefa() { debugger
    if (this.taskForm.valid) {
      const newTask = {
        title: this.taskForm.value.title,
        description: this.taskForm.value.description,
        dueDate: this.taskForm.value.dueDate
      };
  
      this.tarefasServive.novaTarefa(newTask).subscribe({
        next: (response) => {
          // Adiciona a nova tarefa localmente para atualização imediata
          this.tarefas.unshift(response);
          
          // Mostra feedback visual
          this.snackBar.open('Tarefa adicionada com sucesso!', 'Fechar', { duration: 3000 });
          
          // Reseta o formulário
          this.taskForm.reset({
            title: '',
            description: '',
            dueDate: '',
            priority: 1
          });
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


  logout() {
    // Lógica de logout (se necessário)
    this.authService.logout();
    console.log('Logout realizado');
  }

  getTarefasPorStatus(idStatus: number): any[] {
    return this.tarefas.filter((tarefa: { idStatus: number; }) => tarefa.idStatus === idStatus);
  }

  editarTarefa(tarefaEscolhida: any): void {
    const dialogRef = this.dialog.open(AlterarStatusModalComponent, {
      width: '400px',
      data: { tarefa: tarefaEscolhida }
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Mostra loading
        this.isLoading = true;
        
        // Atualização imediata (opcional)
        const index = this.tarefas.findIndex((t: { idTarefa: any; }) => t.idTarefa === tarefaEscolhida.idTarefa);
        if (index !== -1) {
          this.tarefas[index] = { ...this.tarefas[index], ...result };
        }
  
        // Recarrega todas as tarefas
        this.tarefasServive.getAllTasks().subscribe({
          next: (tarefas) => {
            this.tarefas = tarefas;
            this.isLoading = false;
            this.snackBar.open('Tarefa atualizada com sucesso!', 'Fechar', { duration: 3000 });
          },
          error: (erro) => {
            console.error('Erro ao atualizar tarefas:', erro);
            this.isLoading = false;
            this.snackBar.open('Erro ao atualizar tarefa', 'Fechar', { duration: 3000 });
          }
        });
      }
    });
  }
}