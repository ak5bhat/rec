import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


export class Nms {
  S_No ?: number;
  OLT_NE_ID ?: string;
  OLT ?: string;
  type ?: string;
  PON ?: string;
  Serialnumber ?: string;
  Zone ?: string;
  Site ?: string;
}
@Component({
  selector: 'app-nms',
  templateUrl: './nms.component.html',
  styleUrls: ['./nms.component.css']
})
export class NmsComponent implements OnInit{
  nms?: Nms[];
  currentNms: Nms = {};
  // currentIndex = -1;
  // title = '';

  constructor(private apiService : ApiService){}

  ngOnInit(): void {
    this.retrieveNms();
  }

  retrieveNms(): void {
    this.apiService.getNms()
      .subscribe({
        next: (data) => {
          this.nms = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  // refreshList(): void {
  //   this.retrieveNms();
  //   this.currentNms = {};
  //   this.currentIndex = -1;
  // }
  // setActiveNms(nms: Nms, index: number): void {
  //   this.currentNms = nms;
  //   this.currentIndex = index;
  // }
}
