import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Usuario } from '../../clases/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{
  usuario:Usuario[]=[]
  constructor(private usuarioServicio:UsuarioService){}

  ngOnInit(): void {
    this.listaUsuario()
  }

  
  listaUsuario(){
    this.usuarioServicio.getUsuarioList().subscribe(
      data=>{
        this.usuario=data
        console.log(this.usuario)
      }
    )
  }

  borrarUsuario(id:string){
    const usuarioId = Number(id);
    this.usuarioServicio.deleteUsuario(usuarioId).subscribe(
      data => {
        console.log(data)
        this.listaUsuario()
      }
    )
  }
  

}
