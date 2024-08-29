import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


interface Supplier {
  name : string,
  address : string,
  email : string,
  phone : string
}


@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {

  suppliers : Array<Supplier> = [
    {name : "Supplier 1", address : "Address 1", phone : "01234567", email : "supplier1@gmail.com"},
    {name : "Supplier 2", address : "Address 2", phone : "02134567", email : "supplier2@gmail.com"},
    {name : "Supplier 3", address : "Address 3", phone : "03124567", email : "supplier3@gmail.com"},
    {name : "Supplier 4", address : "Address 4", phone : "04123567", email : "supplier4@gmail.com"},
    {name : "Supplier 5", address : "Address 5", phone : "01234567", email : "supplier5@gmail.com"},
    {name : "Supplier 6", address : "Address 6", phone : "02134567", email : "supplier6@gmail.com"},
    {name : "Supplier 7", address : "Address 7", phone : "03124567", email : "supplier7@gmail.com"},
    {name : "Supplier 8", address : "Address 8", phone : "04123567", email : "supplier8@gmail.com"},
    {name : "Supplier 9", address : "Address 9", phone : "01234567", email : "supplier9@gmail.com"},
    {name : "Supplier 10", address : "Address 10", phone : "02134567", email : "supplier10@gmail.com"},
    {name : "Supplier 11", address : "Address 11", phone : "03124567", email : "supplier11@gmail.com"},
    {name : "Supplier 12", address : "Address 12", phone : "04123567", email : "supplier12@gmail.com"},
    {name : "Supplier 13", address : "Address 13", phone : "01234567", email : "supplier13@gmail.com"},
    {name : "Supplier 14", address : "Address 14", phone : "02134567", email : "supplier14@gmail.com"},
    {name : "Supplier 15", address : "Address 15", phone : "03124567", email : "supplier15@gmail.com"},
    {name : "Supplier 16", address : "Address 16", phone : "04123567", email : "supplier16@gmail.com"},
    {name : "Supplier 17", address : "Address 17", phone : "01234567", email : "supplier17@gmail.com"},
    {name : "Supplier 18", address : "Address 18", phone : "02134567", email : "supplier18@gmail.com"},
    {name : "Supplier 19", address : "Address 19", phone : "03124567", email : "supplier19@gmail.com"},
    {name : "Supplier 20", address : "Address 20", phone : "04123567", email : "supplier20@gmail.com"},
  ];



}
