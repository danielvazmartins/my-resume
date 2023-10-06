import { Component, OnInit } from "@angular/core";

import { ResumeService } from "../shared/services/resume.service";

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: [
        './resume.component.scss',
        './styles/brown-style.scss',
        './styles/pink-style.scss',
        './styles/gray-style.scss'
    ]
})
export class ResumeComponent implements OnInit {
    resume: any
    styleName: string = 'brow'

    constructor(
        private resumeService: ResumeService
    ) {}

    ngOnInit(): void {
        this.resume = this.resumeService.getResume(0)
        console.log(this.resume)
    }
}