import { Component, OnInit } from '@angular/core';
import devicelist from '../device-list.json';

interface Devicelist {
  id: Number;
  name: String;
}  
@Component({
  selector: 'app-devices-list-details',
  templateUrl: './devices-list-details.component.html',
  styleUrls: ['./devices-list-details.component.scss']
})
export class DevicesListDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  device_lists: Devicelist[] = devicelist;  
}
