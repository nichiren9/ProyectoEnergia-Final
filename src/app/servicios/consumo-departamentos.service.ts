import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsumoDepartamentos } from '../clases/consumo-departamentos';

@Injectable({
  providedIn: 'root'
})
export class ConsumoDepartamentosService {

  private url:string="http://localhost:8080/departamentos"

  constructor(private http:HttpClient) { }

  getConsumoDepartamentosList():Observable<ConsumoDepartamentos[]>{
    return this.http.get<ConsumoDepartamentos[]>(this.url)
  }

  
}
