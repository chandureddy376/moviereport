import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent  implements OnInit{
  @Input() movieid="";
constructor(){
}
ngOnInit(): void {
  
}
}
