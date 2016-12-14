import { Component, Input, OnInit } from '@angular/core';
import { Customer, CustomerService } from './';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  constructor(private _customerService: CustomerService) { }

  ngOnInit() {
    this._customerService.getCustomers()
      .subscribe(
        // it worked
        (customers) => { this.customers = customers; },
        // error
        (err) => { console.log(err); }
      );
  }
}
