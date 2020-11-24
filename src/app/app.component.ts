import { AfterViewInit, Component } from '@angular/core';
import { ClrAriaLiveService } from '@clr/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ClrAriaLiveService]
})
export class AppComponent implements AfterViewInit {
  public progressValue: number = 0;

  title = 'ng-clarity';
  constructor(public ariaLiveService: ClrAriaLiveService) { }

  ngAfterViewInit() {
    console.log("After init")
    this.ariaLiveService.announce('Message to broadcast to screen reader');
  }
}
