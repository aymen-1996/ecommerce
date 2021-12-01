import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public user = {
    name: "Chouaibi Med Aymen ",
    age: "24",
    email: "chouaibiaymen03@gmail.com"
  };
  
  public today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  public reverseName() {
    return this.user.name.split('').reverse().join('');
  }

  public changeUserName() {
    this.user.name = this.user.name == "Mohamed Aymen Chouaibi" ? "Chouaibi" : "Med Aymen";
  }

}
