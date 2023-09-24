import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnChanges, AfterViewInit, OnInit {
  @Input() sharedData: any;
  ngOnInit(): void {
    if (this.sharedData === undefined) {
      this.sharedData = {
        'isViewDetails': false,
        'data': []
      }
   }    
  }

  ngAfterViewInit(): void {
  
}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.sharedData);
  }
}