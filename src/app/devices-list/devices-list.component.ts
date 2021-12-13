import { Component, OnInit } from '@angular/core';
import devicelist from '../device-list.json';

interface Devicelist {
  id: Number;
  name: String;
}  

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})

export class DevicesListComponent implements OnInit {
  searchText;
  
  constructor() { }

  ngOnInit() {
  }

  device_lists: Devicelist[] = devicelist;  
}
