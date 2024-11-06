import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  [x: string]: any;
  private url:string="http://localhost:8080/usuarios"
  private apiUrl:string="http://localhost:8080/usuarios"

  constructor(private http:HttpClient) { }

  getUsuarioList():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url)
  }

 
  // putActualizarUsuario(id: string, Usuario: Usuario): Observable<Usuario> {
  //   return this.http.put<Usuario>(`${this.apiUrl}/${id}`, Usuario);
  // }

  putActualizarUsuario(id:number, data:Usuario):Observable<Usuario>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<Usuario>(`${this.url}/${id}`, data, { headers });
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  createUsuario(data: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Usuario>(this.url, data, { headers });
  }


}