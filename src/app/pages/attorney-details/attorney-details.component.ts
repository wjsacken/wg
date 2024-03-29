import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';
import { of, switchMap } from 'rxjs';
import { IAttorneyDT } from '../../shared/types/attorney-d-t';
import { catchError } from 'rxjs/operators';
import { UtilsService } from '../../shared/services/utils.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import sal from 'sal.js';

@Component({
  selector: 'app-attorney-details',
  standalone: true,
  imports: [CommonModule,HeaderTwoComponent,FooterTwoComponent],
  templateUrl: './attorney-details.component.html',
  styleUrl: './attorney-details.component.scss'
})
export class AttorneyDetailsComponent {
  public attorney: IAttorneyDT | null | undefined;

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
      const attorneyUrl = params.get('url');
      if (attorneyUrl) {
        return this.utilsService.getAttorneyByUrl(attorneyUrl).pipe(
          catchError(error => {
            console.error('Error fetching Attorney:', error);
            // Handle the error as needed, e.g., navigate to a 404 page
            return of(null); // Emit null if there's an error
          })
        );
      }
      return of<IAttorneyDT | null>(null); // Emit null if there's no blogSlug
    })
    ).subscribe((attorney: IAttorneyDT | null | undefined) => {
      if (!attorney) {
        // Handle the case when the blog is null or undefined
        // For example, navigate to a 404 page
      } else {
        // Proceed with handling the fetched blog
        this.attorney = attorney;
      }
    });
  }
}
