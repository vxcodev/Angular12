import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public name = "Bảo Lộc 87";
  public birthday ="29/02/1988";
  public addressHolder = 'Nhập địa chỉ';
  public titleNote = 'Đây là địa chỉ ';
  public age = 16;
  public age2 = 19;
  public name2 = "Bình Nam";

  ngOnInit(): void {
  }
  public resetName(): void{
    console.log("Okie");
    this.name2 = '';
  }
  

}
