import { Component, OnInit } from '@angular/core';
import { ImgService } from 'src/app/services/img.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
imgs:any;
  constructor(private ij:ImgService) {
    this.ij.getbooks().subscribe(
      (data)=>this.imgs=data,
      ()=>this.imgs=[]
    )
   }

  ngOnInit(): void {
  }

}
