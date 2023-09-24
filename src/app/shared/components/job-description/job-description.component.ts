import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.scss']
})
export class JobDescriptionComponent {
  @Output() dataChanged = new EventEmitter<any>();
  selectedItemIndex: number = -1;
  toggleSelection(index: number) {
    this.selectedItemIndex = index;
    this.dataChanged.emit(this.jobs[index]);
  }
  showColorPriority(value: string) {
    return 'HOT' === value;
  }
  jobs = [
    {
    'createdDate': 'Posted 6 hours ago',
    'priority': 'SUPER HOT',
    'jobName': 'Java Developer (Java 8+, Spring Boot)',
    'logoCompany': 'Logo bbv Vietnam',
    'viewSalary': 'Sign in to view Salary',
    'office': 'At office',
    'location': 'Ho Chi Minh',
    'defineId': 'keyId_',
    'skills': [{
      'id': 1,
      'name': 'Java'
    },
    {
      'id': 2,
      'name': 'Spring'
    },
    {
      'id': 3,
      'name': 'Spring Boot'
    },
    {
      'id': 4,
      'name': 'J2EE'
    }],
    'benefits': [{
      'id': 1,
      'name': '13th salary + Loyalty bonus'
    },
    {
      'id': 2,
      'name': 'Company pay PIT for you'
    },
    {
      'id': 3,
      'name': 'Training Offer'
    }],
    'details': []
  },
  {
    'createdDate': 'Posted 6 hours ago',
    'priority': 'SUPER HOT',
    'jobName': 'Senior Java Developer (J2EE/Spring)',
    'logoCompany': 'Logo bbv Vietnam',
    'viewSalary': 'Sign in to view Salary',
    'office': 'At office',
    'location': 'Ho Chi Minh',
    'defineId': 'keyId_',
    'skills': [{
      'id': 1,
      'name': 'Java'
    },
    {
      'id': 2,
      'name': 'Spring'
    },
    {
      'id': 3,
      'name': 'Spring Boot'
    },
    {
      'id': 4,
      'name': 'J2EE'
    }],
    'benefits': [{
      'id': 1,
      'name': '13th salary + Loyalty bonus'
    },
    {
      'id': 2,
      'name': 'Company pay PIT for you'
    },
    {
      'id': 3,
      'name': 'Training Offer'
    }]
  },
  {
    'createdDate': 'Posted 6 hours ago',
    'priority': 'SUPER HOT',
    'jobName': 'Singapore Java Fullstack Developer (Spring) Up to $3000',
    'logoCompany': 'Logo bbv Vietnam',
    'viewSalary': 'Sign in to view Salary',
    'office': 'At office',
    'location': 'Ho Chi Minh',
    'defineId': 'keyId_',
    'skills': [{
      'id': 1,
      'name': 'Java'
    },
    {
      'id': 2,
      'name': 'Spring'
    },
    {
      'id': 3,
      'name': 'Spring Boot'
    },
    {
      'id': 4,
      'name': 'J2EE'
    }],
    'benefits': [{
      'id': 1,
      'name': '13th salary + Loyalty bonus'
    },
    {
      'id': 2,
      'name': 'Company pay PIT for you'
    },
    {
      'id': 3,
      'name': 'Training Offer'
    }]
  },
  {
    'createdDate': 'Posted 6 hours ago',
    'priority': 'SUPER HOT',
    'jobName': 'Mid Java Developer (MySQL/ Spring)',
    'logoCompany': 'Logo bbv Vietnam',
    'viewSalary': 'Sign in to view Salary',
    'office': 'At office',
    'location': 'Ho Chi Minh',
    'defineId': 'keyId_',
    'skills': [{
      'id': 1,
      'name': 'Java'
    },
    {
      'id': 2,
      'name': 'Spring'
    },
    {
      'id': 3,
      'name': 'Spring Boot'
    },
    {
      'id': 4,
      'name': 'J2EE'
    }],
    'benefits': [{
      'id': 1,
      'name': '13th salary + Loyalty bonus'
    },
    {
      'id': 2,
      'name': 'Company pay PIT for you'
    },
    {
      'id': 3,
      'name': 'Training Offer'
    }]
  },
  {
    'createdDate': 'Posted 6 hours ago',
    'priority': 'HOT',
    'jobName': 'Java Developer (Java 8+, Spring Boot)',
    'logoCompany': 'Logo bbv Vietnam',
    'viewSalary': 'Sign in to view Salary',
    'office': 'At office',
    'location': 'Ho Chi Minh',
    'defineId': 'keyId_',
    'skills': [{
      'id': 1,
      'name': 'Java'
    },
    {
      'id': 2,
      'name': 'Spring'
    },
    {
      'id': 3,
      'name': 'Spring Boot'
    },
    {
      'id': 4,
      'name': 'J2EE'
    }],
    'benefits': [{
      'id': 1,
      'name': '13th salary + Loyalty bonus'
    },
    {
      'id': 2,
      'name': 'Company pay PIT for you'
    },
    {
      'id': 3,
      'name': 'Training Offer'
    }]
  },
  {
    'createdDate': 'Posted 6 hours ago',
    'priority': 'SUPER HOT',
    'jobName': 'Java Developer (Java 8+, Spring Boot)',
    'logoCompany': 'Logo bbv Vietnam',
    'viewSalary': 'Sign in to view Salary',
    'office': 'At office',
    'location': 'Ho Chi Minh',
    'defineId': 'keyId_',
    'skills': [{
      'id': 1,
      'name': 'Java'
    },
    {
      'id': 2,
      'name': 'Spring'
    },
    {
      'id': 3,
      'name': 'Spring Boot'
    },
    {
      'id': 4,
      'name': 'J2EE'
    }],
    'benefits': [{
      'id': 1,
      'name': '13th salary + Loyalty bonus'
    },
    {
      'id': 2,
      'name': 'Company pay PIT for you'
    },
    {
      'id': 3,
      'name': 'Training Offer'
    }]
  }];
}
