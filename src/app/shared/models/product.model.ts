
export class Product {

    constructor(
        public id: number,
        public name: string, 
        public price: string, 
        public description: string,
        public specifications: string,
        public stock: number,
        public deliveryTime: string,
        public totalImages: number,
        public digital: boolean,
        public extraInfo1?: string,
        public extraInfo2?: string,
        public benefit1?: string,
        public benefit2?: string,
        public benefit3?: string
        ) {}
}