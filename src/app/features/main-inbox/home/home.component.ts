import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sharedData: any;

  updateSharedData(data: any) {

    this.sharedData = {
      'isViewDetails': true,
      'data': data
    };
  }

}
