import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {Route, Router} from '@angular/router';
import {BarraNavegacaoService} from '../barra-navegacao/barra-navegacao.service';
import {MenuLateralService} from '../barra-navegacao/menu-lateral/menu-lateral.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  retornoApi;
  erro = false;
  isCarregado = false;
  formLogin: FormGroup;
  mostraErro = false;
  msgErro;
  btnFormDisable= false;
  btnText = "Logar";



  constructor(
    private formBilder:FormBuilder,
    private loginService:LoginService,
    public router: Router,
    public barraNavegacaoService:BarraNavegacaoService,
    public menuLateralService:MenuLateralService
  ) { }



  ngOnInit() {
    this.formLogin = this.formBilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });

    this.barraNavegacaoService.barraNavegacaoComponent.btnToogleVisible = false;
    this.menuLateralService.menuLateralCompoment.menuAberto = false;
  }


  onSubmit(){
    this.loginService.logar(this);

  }



  setMostraErro(bln){
    this.mostraErro = bln;
  }


}
