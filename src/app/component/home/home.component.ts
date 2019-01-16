import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: String;
  imagePath: String;

  constructor(private auth: AuthService) {
  }
 
  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.auth.getData().subscribe(
      result => {
        console.log(result);
        this.username = result.username;
      },
      error => {
        console.log(error);
      }
    );
  }
}