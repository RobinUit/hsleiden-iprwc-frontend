
export class Product {

    constructor(
        public name: string, 
        public price: string, 
        public image: string,
        public productInformation: string,
        public productSpecification: string,
        public extraInfo1?: string,
        public extraInfo2?: string,
        public benefit1?: string,
        public benefit2?: string,
        public benefit3?: string
        ) {}
}