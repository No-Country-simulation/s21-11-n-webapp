import { productFilterOptions } from '@/_infraestructure/utils/products/productFilterOptions';
import { productSortOptions } from '@/_infraestructure/utils/products/productSortOptions';

export interface ProductoSearchFormAttributes {
  textToSearch: string,
  productSort: typeof productSortOptions[number],
  productFilter: typeof productFilterOptions[number],
}
