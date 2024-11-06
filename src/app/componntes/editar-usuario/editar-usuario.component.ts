import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent implements OnInit{

  usuarioForm: FormGroup;
  usuarioId: string | null = null;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.usuarioForm = this.fb.group({ 
      documento: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      ciudad: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.usuarioId = this.route.snapshot.paramMap.get('id');
    if(this.usuarioId){
      this.getUsuario();
    }
    
    // Puedes cargar el usuario si quieres mostrar los datos actuales antes de editar.
  }

  getUsuario() {
    this.usuarioService.getUsuario(Number(this.usuarioId)).subscribe({
      next: response => {
       // console.log('Get ok', response)

        this.usuarioForm.patchValue(response);
      },
      error: error => {
        console.error('There was an error with the GET request!', error);
      }
    });
  }

  onSubmit() {
    if(this.usuarioId){
      this.putActualizarUsuario();
    } else {
      this.createUsuario();
    }
  }

  putActualizarUsuario() {
    const id = Number(this.usuarioId);
    const body = this.usuarioForm.value;

    this.usuarioService.putActualizarUsuario(id, body).subscribe({
      next: response => {
        console.log('PUT request successful!', response);
      },
      error: error => {
        console.error('There was an error with the PUT request!', error);
      },
    });
  }

  createUsuario() {
    const body = this.usuarioForm.value;
    this.usuarioService.createUsuario(body).subscribe({
      next: response => {
        console.log('POST request successful!', response);
      },
      error: error => {
        console.error('There was an error with the POST request!', error);
      }
    });
  }

  

  
  
}
