import { Component } from '@angular/core';
import { IPracticeDT } from '../../../types/practice-d-t';
import practice_data from '../../../data/practice-data';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent {
  public practiceData: IPracticeDT[] = practice_data;
}