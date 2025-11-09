import { Injectable } from '@angular/core';
import {MenuLateralComponent} from './menu-lateral.component';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuLateralService {

  public menuLateralCompoment : MenuLateralComponent;

  constructor() { }


}
