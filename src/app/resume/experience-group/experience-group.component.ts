import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-group',
  templateUrl: './experience-group.component.html',
  styleUrls: ['./experience-group.component.scss']
})
export class ExperienceGroupComponent implements OnInit {

  @Input() dateFrom: string = ""
  @Input() dateTo: string = ""
  @Input() title: string = ""
  @Input() subTitle: string = ""
  @Input() data: string = ""
  @Input() dataLines: string[] = []
  @Input() show: boolean = true

  constructor() { }

  ngOnInit() {}

}
