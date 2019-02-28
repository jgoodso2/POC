import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ImageDetails, Hotspot, Markup } from '../entities';
import {ActivatedRoute} from '@angular/router'
import 'rxjs/add/operator/map'
declare var $: any;
@Component({
  selector: 'app-image-map',
  templateUrl: './image-map.component.html',
  styleUrls: ['./image-map.component.css']
})
export class ImageMapComponent implements OnInit {
  
  constructor(private http:HttpClient,private route : ActivatedRoute) { }
  imageDetails:ImageDetails;
  selectedHotspot: Hotspot;
  ngOnInit() {
    this.route.params.subscribe(params=>{
    this.http.get(`assets/data/${params.filename}`).map((t:ImageDetails)=>this.imageDetails = t).subscribe(res=>console.log(res))
    });
  }
 
  showModal(hotSpot:Hotspot)
  {
    this.http.get(`assets/data/${hotSpot.filename}`).subscribe((markUp:Markup)=>{
    this.selectedHotspot = hotSpot;
    this.selectedHotspot.markup = markUp;
    console.log('modal clicked');
    $('#myModal').modal()
  });
  }
}
