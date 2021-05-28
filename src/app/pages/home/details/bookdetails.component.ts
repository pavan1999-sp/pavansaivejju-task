import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsserviceService } from 'src/app/services/detailsservice.service';



@Component({
  selector: 'app-book',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./details.css']
  
})
export class BookDetails implements OnInit {

  constructor(public route:ActivatedRoute, public bd:DetailsserviceService) { }
  id:any
  details:any;

 
  ngOnInit(): void {
    this.route.params.subscribe(
        
      (idNo)=>{
          
        this.id = idNo.id
        console.log(this.id);
      },
      ()=>console.log("id no is not found")      
    )
    this.bd.getBookdetails(this.id).subscribe(
      (data)=>this.details = data
    )}
  
    }
