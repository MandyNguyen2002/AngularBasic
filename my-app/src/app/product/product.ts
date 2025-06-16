import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  styleUrls: ['./product.scss'],
  standalone: false,
})
export class ProductComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef;
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (res: any) => {
        this.products = res.products;
        this.filteredProducts = res.products;
      },
      error: (err) => {
        alert('Error fetching products: ' + err.message);
      }
    });
  }

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(500)
      )
      .subscribe((searchText: string) => {
        this.filteredProducts = this.products.filter(product =>
          product.title.toLowerCase().includes(searchText.toLowerCase())
        );
      });
  }
}
