import { Component, OnInit } from '@angular/core';
import { ConfigServiceService } from '../config-service.service';
import { Item } from '../item';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public items: Item[];
  constructor(private configService: ConfigServiceService) {}

  ngOnInit(): void {
    this.configService.getUsers().subscribe(
      (response: Item[]) => {
        this.items = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getItems() {
    return this.items;
  }
}
