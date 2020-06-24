import { ProductItem } from 'src/app/models/product.model';
import { ProductService } from './../../services/product/product.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() searchText: string;
  productList: ProductItem[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    }) 
  }


/* public products = [
    {
      id: 1,
      img_link: "https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027",
      title: "Guitar 1",
      description: "Some guitar 1.",
      price: 300,
      in_stock: true
    },
    {
      id: 2,
      img_link: "https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027",
      title: "Guitar 2",
      description: "Some guitar 2.",
      price: 600,
      in_stock: false
    },
    {
      id: 3,
      img_link: "https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027",
      title: "Drums",
      description: "Some drums.",
      price: 1200,
      in_stock: true
    },
    {
      id: 4,
      img_link: "https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027",
      title: "Guitar 1",
      description: "Some guitar 1.",
      price: 300,
      in_stock: true
    },
    {
      id: 5,
      img_link: "https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027",
      title: "Guitar 2",
      description: "Some guitar 2.",
      price: 600,
      in_stock: false
    },
    {
      id: 6,
      img_link: "https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027",
      title: "Drums",
      description: "Some drums.",
      price: 1200,
      in_stock: true
    }
  ]; */

}
