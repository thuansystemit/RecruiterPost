import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainInboxComponent } from './main-inbox.component';
import { MainInboxRoutingModule } from './main-inbox-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    declarations: [
        MainInboxComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ],
    imports: [
        CommonModule,
        MainInboxRoutingModule,
        MatToolbarModule,
        MatTabsModule
    ],
    providers: []
})
export class MainInboxModule { }