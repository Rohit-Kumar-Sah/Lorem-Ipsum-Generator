import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Userservices } from '../data.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  @ViewChild('ip') feild : ElementRef;
  constructor(private myservice : Userservices) { }

  ngOnInit(): void {
  }

  clicked(ip){
    this.myservice.paragraphs.next(ip.value);
    this.feild.nativeElement.value=""
  }
 

}
