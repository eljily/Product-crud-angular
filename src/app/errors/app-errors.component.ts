import { Component } from '@angular/core';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-errors',
  templateUrl: './app-errors.component.html',
  styleUrls: ['./app-errors.component.css']
})
export class AppErrorsComponent {
  public constructor(public appState : AppStateService){}

}
