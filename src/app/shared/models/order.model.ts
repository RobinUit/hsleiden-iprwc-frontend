import { Item } from './item.model';

export class Order {

    constructor(
        public totalAmount?: number,
        public shippingCosts?: number, 
        public firstname?: string,
        public lastname?: string,
        public email?: string,
        public phonenumber?: string,
        public housenumber?: string, 
        public zipcode?: string, 
        public street?: string, 
        public city?: string, 
        public country?: string,
        public items?: Item[], 
        public message?: string
        ) {}
}