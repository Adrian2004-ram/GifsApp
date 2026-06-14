import { Component } from '@angular/core';
import { environment } from '@enviroments/environment';

@Component({
  selector: 'app-gifs-side-menu-header',
  imports: [],
  templateUrl: './gifs-side-menu-header.html',
})
export class GifsSideMenuHeader {

  envs = environment;

}
