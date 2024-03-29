import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IBlogDT } from '../types/blog-d-t';
import { IAttorneyDT } from '../types/attorney-d-t';
import { INewsDT } from '../types/news-d-t';
import { IPracticeDT } from '../types/practice-d-t';
import { Observable, map, of } from 'rxjs';
import blog_data from '../data/blog-data';
import attorney_data from '../data/attorney-data';
import news_data from '../data/news-data';
import practice_data from '../data/practice-data';
@Injectable({
  providedIn: 'root',
})
export class UtilsService {

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isSearchOpen = false;
        this.isProductModalOpen = false;
        this.openMobileMenus = false;
        this.removeBackdropAndProductModal();
        this.mini_cart_sidebar = false;
      }
    });
  }

  // video modal
  public videoUrl: string = 'https://www.youtube.com/embed/EW4ZYb3mCZk';
  public isVideoOpen: Boolean = false;
  public isSearchOpen: Boolean = false;
  public isProductModalOpen: Boolean = false;
  public openMobileMenus: Boolean = false;
  public white_header: Boolean = false;
  public mini_cart_sidebar: Boolean = false;
  public iframeElement: HTMLIFrameElement | null = null;
  // product modal
  public modalId: string = 'product-modal-1';

  // open mobile sidebar
  handleOpenMobileMenu() {
    this.openMobileMenus = !this.openMobileMenus;
  };

  // mini cart sidebar
  handleMiniCartSidebar() {
    this.mini_cart_sidebar = !this.mini_cart_sidebar;
  };

  // modal video play
  playVideo(videoId: string) {
    const videoOverlay = document.querySelector('#video-overlay');
    this.videoUrl = `https://www.youtube.com/embed/${videoId}`;
    if (!this.iframeElement) {
      this.iframeElement = document.createElement('iframe');
      this.iframeElement.setAttribute('src', this.videoUrl);
      this.iframeElement.style.width = '60%';
      this.iframeElement.style.height = '80%';
    }

    this.isVideoOpen = true;
    videoOverlay?.classList.add('open');
    videoOverlay?.appendChild(this.iframeElement);
  }
  // close modal video
  closeVideo() {
    const videoOverlay = document.querySelector('#video-overlay.open');

    if (this.iframeElement) {
      this.iframeElement.remove();
      this.iframeElement = null;
    }

    this.isVideoOpen = false;
    videoOverlay?.classList.remove('open');
  }

  handleSearchOpen() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  handleWhiteHeader(index: number) {
    if (index === 1) {
      this.white_header = true;
    }
    else {
      this.white_header = false;
    }
  }


  removeBackdropAndProductModal() {
    const modalBackdrop = document.querySelector('.modal-backdrop');
    const product_modal = document.querySelector('.tp-product-modal.show') as HTMLElement;
    if (modalBackdrop) {
      modalBackdrop.remove();
      document.body.classList.remove('modal-open');
      document.body.removeAttribute('style');
    }
    if (product_modal) {
      product_modal.style.display = 'none';
    }
  }


  moveImage(e: MouseEvent, item: HTMLElement | any,children:number): void {
    const itemRect = item.getBoundingClientRect();
    const x = e.clientX - itemRect.left;
    const y = e.clientY - itemRect.top;
    const childElement = item.children[children] as HTMLElement;
    if (childElement) {
      childElement.style.left = `${x}px`;
      childElement.style.top = `${y}px`;
    }
  }

  handleMouseMove(e: MouseEvent, selector: string,children:number): void {
    const hoverItems = document.querySelectorAll(selector);

    hoverItems.forEach((item) => {
      this.moveImage(e, item as HTMLElement,children);
    });
  }

  // Get blogs
  public get blogs(): Observable<IBlogDT[]> {
    return of(blog_data);
  }

  // Get blog Filter
  public filterBlogs(): Observable<IBlogDT[]> {
    return this.blogs.pipe(map((blogs: IBlogDT[]) => {
      return blogs;
    }));
  }
;
  // Get blog By id
  public getBlogById(id: string): Observable<IBlogDT | undefined> {
    return this.blogs.pipe(map(items => {
      const blog = items.find(p => Number(p.id) === Number(id));
      return blog;
    }));
  };
  public getBlogBySlug(slug: string): Observable<IBlogDT | undefined> {
    return this.blogs.pipe(map(items => {
      const blog = items.find(p => p.slug === slug);
      return blog;
    }));
  };
  public get attorneys(): Observable<IAttorneyDT[]> {
    return of(attorney_data);
  };
  public getAttorneyByUrl(url: string): Observable<IAttorneyDT | undefined> {
    return this.attorneys.pipe(map(items => {
      const attorney = items.find(p => p.url === url);
      return attorney;
    }));
  };

  public get news(): Observable<INewsDT[]> {
    return of(news_data);
  };
  public getNewsByHeadline(headline: string): Observable<INewsDT | undefined> {
    return this.news.pipe(map(items => {
      const newss = items.find(p => p.headline === headline);
      return newss;
    }));
  };
  public get practice(): Observable<IPracticeDT[]> {
    return of(practice_data);
  };
  public getPracticeById(id: string): Observable<IPracticeDT | undefined> {
    return this.practice.pipe(map(items => {
      const practices = items.find(p => Number(p.id) === Number(id));
      return practices;
    }));
  };
  public getPracticeByUrl(slug: string): Observable<IPracticeDT | undefined> {
    return this.practice.pipe(map(items => {
      const practices = items.find(p => p.slug === slug);
      return practices;
    }));
  };
}
