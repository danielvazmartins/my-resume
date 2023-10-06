import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ResumeComponent } from "./resume.component";
import { CourseGroupComponent } from "./course-group/course-group.component";
import { DataGroupComponent } from "./data-group/data-group.component";
import { ExperienceGroupComponent } from "./experience-group/experience-group.component";

@NgModule({
    declarations: [
        ResumeComponent,
        CourseGroupComponent,
        DataGroupComponent,
        ExperienceGroupComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ResumeComponent
    ]
})
export class ResumeModule {}