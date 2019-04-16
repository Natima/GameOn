// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { NavComponent } from './nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
    ],
    declarations: [
        NavComponent,
    ],
    exports: [
        NavComponent,
    ]
})
export class NavModule {

}
