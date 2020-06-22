import { ProductItem } from 'src/app/models/product.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(productsList: ProductItem[], searchWord: string): any[] {
    if(!productsList) return [];
    if(!searchWord) return productsList;
    return productsList.filter(product => 
      product.title.toLowerCase().includes(searchWord.toLowerCase())
    );
  }

}
