import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, RouterLink ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  isLoading = signal(false);
  errorMessage = signal<string | null>(null);

  loginForm: FormGroup;

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  async onSubmit() {
    // Validação do formulário
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
  
    this.isLoading.set(true);
    this.errorMessage.set(null);
  
    // Objeto tipado (melhor que 'any')
    const credentials = {
      Login: this.loginForm.value.email, // Ou 'email' se for o campo correto
      Senha: this.loginForm.value.password
    };
  
    try {
      const response = await lastValueFrom(this.authService.login(credentials));
      
      // Tratamento da resposta bem-sucedida
      console.log('Login realizado com sucesso:', response);
      
      // Armazenar token (se usar JWT)
      if (response.token) {
        localStorage.setItem('authToken', response.token);
        // Opcional: armazenar dados do usuário
        localStorage.setItem('userData', JSON.stringify({
          id: response.userId,
          login: response.login
        }));
      }
      
      // Redirecionar ou atualizar estado da aplicação
      this.router.navigate(['/tarefas']); // Exemplo
      
    } catch (error: any) {
      console.error('Erro no login:', error);
      this.errorMessage.set(error.message || 'Erro durante o login');
      
      // Log adicional para erros 401
      if (error.status === 401) {
        console.warn('Tentativa de login com credenciais inválidas');
      }
    } finally {
      this.isLoading.set(false);
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }


    // try {

    //   await this.authService.login(obj);
    //   this.router.navigate(['/dashboard']);
    // } catch (error) {
    //   this.errorMessage.set('Credenciais inválidas. Por favor, tente novamente.');
    // } finally {
    //   this.isLoading.set(false);
    // }
  }


