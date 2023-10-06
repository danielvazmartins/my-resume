import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-group',
  templateUrl: './course-group.component.html',
  styleUrls: ['./course-group.component.scss']
})
export class CourseGroupComponent implements OnInit {

  @Input() title: string = ""
  @Input() data: string = ""
  @Input() show: boolean = true

  constructor() { }

  ngOnInit() { }
}
