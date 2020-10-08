import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Userservices } from '../data.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit, DoCheck {

  myarr:Number[];
paragraphs : Number;
Lorem: string;
constructor(private myservice : Userservices, private myhttp : HttpClient) { }

  ngOnInit(): void {
    this.myservice.paragraphs.subscribe(value => this.paragraphs = value );
    // this.myhttp.get('./assets/data.json').subscribe(data=>this.Lorem= data[0].details)
     this.myhttp.get('https://baconipsum.com/api/?type=meat-and-filler&paras='+this.paragraphs).subscribe(data=>this.Lorem= data[0])


  }

  ngDoCheck(){
    let n= this.paragraphs === undefined ? 0 : Number(this.paragraphs)
    this.myarr= [...Array(n).keys()]
  }
}
