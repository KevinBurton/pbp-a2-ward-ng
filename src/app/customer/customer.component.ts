import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input()
  customer: {id: number, name: string};
  constructor() { }
  customerColor = 'gray';
  ngOnInit() {
  }

}
