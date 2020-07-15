import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-test-app';

  isShow = false
 
  toggleDisplay() {
    this.isShow = !this.isShow
  }
}
