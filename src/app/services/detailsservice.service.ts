import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DetailsserviceService {

  mybook:any
  constructor(public bdc:HttpClient) {
    
   }

  getBookdetails(id:any):Observable<any>{
    return this.bdc.get("http://localhost:9000/books/"+id)
  }

  postData(obj:any):Observable<any>{
    this.mybook={
      headers : new HttpHeaders({
        'Content_Type' : "application/json"
      })
    }
    return this.bdc.post("http://localhost:9000/books",obj,this.mybook)
}
}
