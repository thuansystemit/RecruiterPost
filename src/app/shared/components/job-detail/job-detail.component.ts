import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnChanges, AfterViewInit {
  ngAfterViewInit(): void {
    if (this.sharedData=== undefined) {
      this.sharedData = [{'jobName': 'test'}];
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.sharedData);
  }
  @Input() sharedData: any;


}
