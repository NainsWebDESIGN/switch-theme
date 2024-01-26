import { Component, OnInit } from '@angular/core';
import { CSSLoaderService } from './css-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public cssLoder: CSSLoaderService) { }
  ngOnInit() {
  }
}
