import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario';
import { UsuarioExisteService } from './usuario-existe.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExisteService: UsuarioExisteService
  ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      nome: ['',[
        Validators.required, Validators.minLength
      ]],
      contato: ['',[
        Validators.required, Validators.minLength(11)
      ]],
      cpf: ['',[
        Validators.required, Validators.minLength(11)
      ]],
      email: ['',[
        Validators.required, Validators.email, [this.usuarioExisteService.usuarioJaExiste()]
      ]],
      senha: ['',[
        Validators.required, Validators.minLength(8)
      ]],
    });
  }

  cadastrar(){
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
    
  }
}
