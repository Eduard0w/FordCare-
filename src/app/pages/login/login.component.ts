import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  storageUsuario: any;
  loginInvalido: boolean = false;
  mensagemErro: string = '';
  constructor(
    private router: Router,
    private storage: LocalStorageService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      senha: [''],
    });
    this.storageUsuario = this.storage.get('usuario');
  }

  verificarConta() {
    this.mensagemErro = 'Email ou senha incorretos.';
    if (!this.storageUsuario) {
      this.loginInvalido = true;
      this.mensagemErro = 'Nenhuma conta encontrada.';
      return;
    }

    if (
      this.storageUsuario.email === this.loginForm.value.email &&
      this.storageUsuario.senha === this.loginForm.value.senha
    ) {
      this.loginInvalido = false;
      console.log('Usuário logado:', this.storageUsuario, ' - ', this.storage.get('usuario'));
      this.router.navigate(['/dashboard']);
      this.storage.set('logado', true);
    } else {
      this.storage.set('logado', false);
      this.loginInvalido = true;
    }
    console.log(this.loginForm.value);
  }

  irHome() {
    this.router.navigate(['']);
  }
}
