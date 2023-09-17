import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { JobDescriptionComponent } from 'src/app/shared/components/job-description/job-description.component';
import { JobDetailComponent } from 'src/app/shared/components/job-detail/job-detail.component';
import { SearchComponent } from 'src/app/shared/components/search/search.component';

@NgModule({
    declarations: [
        HomeComponent,
        JobDescriptionComponent,
        SearchComponent,
        JobDetailComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    providers: []
})
export class HomeModule { }