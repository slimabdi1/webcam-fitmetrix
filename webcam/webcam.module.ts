import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamComponent } from './webcam/webcam.component';
import { SettingsComponent } from '../settings/settings.component'


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        WebcamComponent,

    ],
    providers: [SettingsComponent],
    exports: [
        WebcamComponent
    ]
})
export class WebcamModule {
}
