import { Product } from 'src/app/shared/models/product.model';

export class Item {

    constructor(
        public product: Product, 
        public amount: number
        ) {}
}