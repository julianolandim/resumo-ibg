import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LoginComponent} from './login.component';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }



  logar(loginComponent:LoginComponent){

    if(!this.validaLogin(loginComponent)){
      return;
    }


    if(!loginComponent.formLogin.invalid){

      loginComponent.isCarregado = false;
      loginComponent.btnText = "Aguarde";
      loginComponent.btnFormDisable = true;
      loginComponent.formLogin.disable();

      loginComponent.mostraErro = false;
      loginComponent.msgErro="";


      let user = loginComponent.formLogin.value.username;
      let sen = loginComponent.formLogin.value.password;


      this.http.post(environment.apiUrl+"/login?user="+user+"&sen="+sen, null)
        .subscribe(retorno => loginComponent.retornoApi = retorno,
        erro => {
          loginComponent.msgErro = "Erro ao conectar com o servidor.";
          loginComponent.mostraErro = true;

          loginComponent.btnText = "Logar";
          loginComponent.btnFormDisable = false;
          loginComponent.formLogin.enable();

        },
        ()=>{

          loginComponent.isCarregado = true;
          loginComponent.btnText = "Logar";

          if(loginComponent.retornoApi) {
            localStorage.setItem("usuario",loginComponent.formLogin.value.username);
            loginComponent.barraNavegacaoService.barraNavegacaoComponent.btnToogleVisible = true;
            loginComponent.router.navigate(["/resumo"])
          }else{
            loginComponent.btnFormDisable = false;
            loginComponent.formLogin.enable();

            loginComponent.msgErro = "Dados Incorretos.";
            loginComponent.mostraErro = true;
          }

        });


    }
  }



  validaLogin(loginComponent:LoginComponent):boolean{

    const rawUser = loginComponent.formLogin.value.username;
    const rawPass = loginComponent.formLogin.value.password;

    const username = (rawUser == null ? '' : String(rawUser)).trim();
    const password = (rawPass == null ? '' : String(rawPass)).trim();

    if(username === ""){
      loginComponent.mostraErro = true;
      loginComponent.msgErro="Informe o usuário";
      return false;
    }

    if(password === ""){
      loginComponent.mostraErro = true;
      loginComponent.msgErro="Informe a senha.";
      return false;
    }
    return true;

  }





}
