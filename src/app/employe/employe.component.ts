import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-employe',
	templateUrl: './employe.component.html',
	styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

	employee=[];
	
	public currentEuroRates: any = null;
	constructor(private readonly http: HttpClient) {}
  
  	ngOnInit() {
    	this.getEmployees();
  	}

  	public getEmployees() {
		const url='https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/donald';
    	this.http.get(url).subscribe(apiData => (this.currentEuroRates = apiData)); 
	}

	
}

export interface Employee {
	id: number;
	name: string;
	last_name: string;
	birthday: any;
}

export interface Data {
	employees: Employee[];
}

export interface RootObject {
	success: boolean;
	data: Data;
}

