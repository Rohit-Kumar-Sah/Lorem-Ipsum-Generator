import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
@Injectable({
    providedIn :'root'
})
 export class Userservices{


    paragraphs = new Subject<Number>()
    

 }