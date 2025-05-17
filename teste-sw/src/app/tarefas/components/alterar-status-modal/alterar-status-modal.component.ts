import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TarefasService } from '../../../services/tarefas.service';
import { CommonModule } from '@angular/common';

interface StatusOption {
  value: number;
  label: string;
}

@Component({
  selector: 'app-alterar-status-modal',
  templateUrl: './alterar-status-modal.component.html',
  styleUrls: ['./alterar-status-modal.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class AlterarStatusModalComponent implements OnInit {
  statusOptions: StatusOption[] = [
    { value: 1, label: 'Pendente' },
    { value: 2, label: 'Concluída' },
    { value: 3, label: 'Em Andamento' }
  ];
  
  selectedStatus: number | null = null;
  observacao: string = '';
  tarefa: any;
  statusTarefas: any;

  constructor( 
    private tarefasService: TarefasService,
    public dialogRef: MatDialogRef<AlterarStatusModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { tarefa: any }
  ) {}

  ngOnInit(): void {
    this.tarefa = this.data.tarefa;
    this.selectedStatus = this.tarefa.idStatus; // Define o status atual como selecionado
    this.getStatusTarefa();
    
    console.log('ID Tarefa:', this.tarefa.idTarefa);
    console.log('ID Usuário:', this.tarefa.idUsuario);
  }

  getStatusTarefa(): void {debugger
    this.tarefasService.getStatusTarefa().subscribe({ 
      next: (statusTarefas) => { debugger
        this.statusTarefas = statusTarefas;
      },
      error: (erro) => {debugger
        console.error('Erro ao carregar tarefas:', erro);
      }
    });
  }

  onSubmit(): void {debugger
    if (this.selectedStatus) {
      const result = {
        idTarefa: this.tarefa.idTarefa,
        idStatus: this.selectedStatus,
        idUsuario: this.tarefa.idUsuario // Incluindo o idUsuario no retorno
      };

      this.tarefasService.editarStatusTarefa(result).subscribe({
        next: (response) => {debugger
          console.log('Status atualizado com sucesso:', response);
          this.dialogRef.close(result);
        },
        error: (error) => {
          console.error('Erro ao atualizar status:', error);
          // Aqui você pode adicionar um tratamento de erro, como mostrar uma mensagem ao usuário
        }
      });
    }
    else {
      console.error('Nenhum status selecionado');
      // Aqui você pode adicionar um tratamento de erro, como mostrar uma mensagem ao usuário
      // ou desabilitar o botão de envio até que um status seja selecionado
      // Por exemplo:
      // this.snackBar.open('Por favor, selecione um status.', 'Fechar', { duration: 3000 });
      // Ou apenas fechar o modal sem enviar nada
      // this.dialogRef.close();
      // Ou você pode retornar um objeto vazio ou nulo, dependendo do que você precisa
      const result = {
        idTarefa: this.tarefa.idTarefa,
        idStatus: null,
        observacao: this.observacao,
        idUsuario: this.tarefa.idUsuario // Incluindo o idUsuario no retorno
      };
      //this.tarefasService.editarStatusTarefa(result).subscribe();
      console.log('Status não selecionado, retornando resultado vazio:', result);
      // Aqui você pode adicionar um tratamento de erro, como mostrar uma mensagem ao usuário
      // ou desabilitar o botão de envio até que um status seja selecionado
      // Por exemplo:
      // this.snackBar.open('Por favor, selecione um status.', 'Fechar', { duration: 3000 });
      // Ou apenas fechar o modal sem enviar nada
      // this.dialogRef.close();
      // Ou você pode retornar um objeto vazio ou nulo, dependendo do que você precisa
      //this.tarefasService.editarStatusTarefa(result).subscribe();
      //this.tarefasService.editarStatusTarefa(result).subscribe();
      console.log('Status não selecionado, retornando resultado vazio:', result);
      // Aqui você pode adicionar um tratamento de erro, como mostrar uma mensagem ao usuário
      // ou desabilitar o botão de envio até que um status seja selecionado


      
      this.dialogRef.close(result);
    }
  }

  getStatusLabel(idStatus: number): string {
    const status = this.statusOptions.find(s => s.value === idStatus);
    return status ? status.label : 'Desconhecido';
  }

  

  close(): void {
    this.dialogRef.close();
  }
}