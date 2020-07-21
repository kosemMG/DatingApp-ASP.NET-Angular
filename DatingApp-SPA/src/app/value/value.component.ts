import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  public values: any;

  private url = 'http://localhost:5000/api/values';

  ngOnInit(): void {
    this.getValues().subscribe(
      response => this.values = response,
      error => console.log(error)
    );
  }

  private getValues(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
