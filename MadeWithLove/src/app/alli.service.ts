import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class AlliService {

  private db!: SQLiteObject;
  private isOpen!: boolean;

  private nombreUsuario: string = '';

  setNombreUsuario(nombre: string) {
    this.nombreUsuario = nombre;
  }

  getNombreUsuario(): string {
    return this.nombreUsuario;
  }

  constructor(
    public http: HttpClient,
    public storage = new SQLite()
  ) {
    if (!this.isOpen) {
      this.storage = new SQLite();
      this.storage.create({ name: "data.db", location: "default" }).then((db: SQLiteObject) => {
        this.db = db;
        db.executeSql("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, identification INTEGER, nombre TEXT, email TEXT, password TEXT)", []);
        this.isOpen = true;
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  CreateUser(identification: number, nombre: string, email: string, password: string) {
    return new Promise((resolve, reject) => {
      let sql = "INSERT INTO users (identification, nombre, email, password) VALUES (?, ?, ?, ?)";
      this.db.executeSql(sql, [identification, nombre, email, password]).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    })
  }

  GetAllUsers() {
    return new Promise((resolve, reject) => {
      this.db.executeSql("SELECT * FROM users", []).then((data) => {
        let arrayUsers = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            arrayUsers.push({
              id: data.rows.item(i).id,
              identification: data.rows.item(i).identification,
              nombre: data.rows.item(i).nombre,
              email: data.rows.item(i).email,
              password: data.rows.item(i).password
            });
          }
        }
        resolve(arrayUsers);
      }, (error) => {
        reject(error);
      });
    })
  }
}

