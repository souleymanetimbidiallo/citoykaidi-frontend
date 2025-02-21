import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://citoykaidi-backend.onrender.com/api/users'; // URL de ton backend

  constructor(private http: HttpClient) {}

  // Récupérer la liste des utilisateurs
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Ajouter un utilisateur
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
