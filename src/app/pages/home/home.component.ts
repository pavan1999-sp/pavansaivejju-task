import { Component, OnInit } from '@angular/core';
import { ImgService } from 'src/app/services/img.service';
import { ServiceitemComponent } from './serviceitem/serviceitem.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 books:any;

constructor(private is:ImgService){
  this.is.getbooks().subscribe(
    (data)=>this.books=data,
    ()=>this.books=[]
  )
}




  ngOnInit(): void {
  }

}
