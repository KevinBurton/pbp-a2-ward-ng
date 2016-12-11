import { Component, Input, OnInit } from '@angular/core';

import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any;
  constructor(private _customerService: CustomerService) { }

  ngOnInit() {
    this.customers = this._customerService.getCustomers()
  }

}
