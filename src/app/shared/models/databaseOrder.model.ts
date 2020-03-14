export class DatabaseOrder {

    constructor(
        public id: number,
        public totalAmount: number,
        public shippingCosts: number, 
        public firstname: string,
        public lastname: string,
        public email: string,
        public phonenumber: string,
        public housenumber: string, 
        public zipcode: string, 
        public street: string, 
        public city: string, 
        public country: string,
        public orderDate: string,
        public status: string,
        public message: string,
        public userID: string
        ) {}
}