import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsumoDepartamentosService } from '../../servicios/consumo-departamentos.service';
import { ConsumoDepartamentos } from '../../clases/consumo-departamentos';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-departamentos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './departamentos.component.html',
  styleUrl: './departamentos.component.css'
})
export class DepartamentosComponent implements OnInit{

 consumoDepartamentos:ConsumoDepartamentos[]=[]
  constructor(private ConsumoDepartamentosService:ConsumoDepartamentosService){}

  ngOnInit(): void {
    this.listaConsumoDepartamentos()
  }

  
  listaConsumoDepartamentos(){
    this.ConsumoDepartamentosService.getConsumoDepartamentosList().subscribe(
      data=>{
        this.consumoDepartamentos=data
        console.log(this.consumoDepartamentos)
      }
    )
  }

}
