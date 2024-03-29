import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import sal from 'sal.js';
import { IPracticeDT } from '../../shared/types/practice-d-t';
import { catchError } from 'rxjs/operators';
import { UtilsService } from '../../shared/services/utils.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';
import { NiceSelectComponent } from '../../shared/ui/nice-select/nice-select.component';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderTwoComponent,NiceSelectComponent,FooterTwoComponent],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {
  public practice: IPracticeDT | null | undefined;

  constructor(
    private route: ActivatedRoute,
    private utilsService: UtilsService,
    private router: Router
  ) { }

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }
  ngOnInit() {

  this.route.paramMap.pipe(
    switchMap(params => {
      const practiceUrl = params.get('slug');
      if (practiceUrl) {
        return this.utilsService.getPracticeByUrl(practiceUrl).pipe(
          catchError(error => {
            console.error('Error fetching Practice:', error);
            // Handle the error as needed, e.g., navigate to a 404 page
            return of(null); // Emit null if there's an error
          })
        );
      }
      return of<IPracticeDT | null>(null); // Emit null if there's no blogSlug
    })
    ).subscribe((practice: IPracticeDT | null | undefined) => {
      if (!practice) {
        // Handle the case when the blog is null or undefined
        // For example, navigate to a 404 page
      } else {
        // Proceed with handling the fetched blog
        this.practice = practice;
      }
    });
  }
}
