import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-group',
  templateUrl: './data-group.component.html',
  styleUrls: ['./data-group.component.scss']
})
export class DataGroupComponent implements OnInit {

  @Input() title: string = ""
  @Input() data: string = ""
  @Input() dataLines: string[] = []
  @Input() dataWords: string[] = []

  constructor() { }

  ngOnInit() {
  }

}
