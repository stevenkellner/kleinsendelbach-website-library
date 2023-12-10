import { Component } from '@angular/core';
import { ListComponent } from 'kleinsendelbach-website-library';

@Component({
  selector: 'list-page',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.sass']
})
export class ListPage {

}
