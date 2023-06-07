import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, catchError, from, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  logado:boolean=false;
  user:any;

  constructor(private auth: AngularFireAuth) {
    auth.onAuthStateChanged((user)=> {
      if(user) {
        this.logado = true;
        this.user = user;
      }
      else{
        this.logado = false;
      }
    })
  }

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

  onAuthChange(email:string|null,logado:boolean) {
    return this.auth.onAuthStateChanged((user)=> {
      if(user){
        console.log(user);
        email = user.email;
        logado = true;
        return user;
      }
      else{
        logado=false;
        return user;
      }
    });
  }

  sair() {
    this.auth.signOut();
  }

  getLogado(){
    return this.logado;
  }

  getUser(){
    return this.user;
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
