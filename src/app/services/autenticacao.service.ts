import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, catchError, from, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private auth: AngularFireAuth) { }

  signIn(params: DadosUsuario): Observable<any> {
    return from(this.auth.signInWithEmailAndPassword(
      params.email, params.password
    )).pipe(
      catchError((error: FirebaseError) =>
        throwError(() => new Error(error.code+" "+error.message))
      )
    );
  }

  async registrar(params:DadosUsuario): Promise<string> {
    try {
      const user = await this.auth.createUserWithEmailAndPassword(params.email,params.password);
      return user.user!.uid;
    }
    catch(error){
      return error+"";
    }

  }

  getCredetial(){
    this.auth.currentUser.then(user=>console.log(user));
  }

}

type DadosUsuario = {
  email: string;
  password: string;
}

type FirebaseError = {
  code: string;
  message: string
};
