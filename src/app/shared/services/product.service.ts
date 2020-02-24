import { Product } from 'src/app/shared/models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor() {
    this.products = [
      new Product(
        1,
        "E-book Back to the Roots",
        "7,99",
        "Back to the Roots Culturen verbinden met passie In Back to the Roots doen de verschillende culturen die in Nederland vertegenwoordigd zijn hun verhaal.Iedere cultuur heeft kenmerkende muziek, dans en gerechten.Door deze passie te combineren willen we de culturen verbinden. Dompel jezelf onder in de culturen en doe kennis op door de gerechten zelf te maken en de interviews te lezen. Doormiddel van QR - codes te scannen luister je gemakkeljk naar de bijbehorende muziek.",
        "Bindwijze: E-book\nVerschijningsdatum: januari 2020\nEbook formaat: Adobe PDF\nIllustraties: Met illustraties\nAuteur: Back to the Roots\n\nLees mogelijkheden: Lees dit ebook op\nAndroid(tablet) | Kobo e - reader | Desktop(Mac en Windows) | iOS(tablet) | Windows(tablet) | Overige e - reader",
        10,
        "Direct leverbaar",
        3,
        true,
        "E-book",
        "Direct leverbaar!"
      ),
      new Product(
        2,
        "Paperback Back to the Roots",
        "14,99",
        "In Back to the Roots doen de verschillende culturen die in Nederland vertegenwoordigd zijn hun verhaal. Iedere cultuur heeft kenmerkende muziek, dans en gerechten. Door deze passie te combineren willen we de culturen verbinden. Dompel jezelf onder in de culturen en doe kennis op door de gerechten zelf te maken en de interviews te lezen. Doormiddel van QR-codes te scannen luister je gemakkeljk naar de bijbehorende muziek.",
        "Bindwijze: Paperback\nVerschijningsdatum: januari 2020\nAfmetingen: 240x170 mm\nAantal pagina’s: 80\nIllustraties: Met illustraties\nAuteur: Back to the Roots\n\nOverige kenmerken\nTaal: Nederlands",
        10,
        "2-5 werkdagen",
        1,
        false,
        "Pre-order Sale",
        "Adviesprijs €20"
      ),
      new Product(
        3,
        "E-book Back to the Roots",
        "4,99",
        "Back to the Roots Culturen verbinden met passie In Back to the Roots doen de verschillende culturen die in Nederland vertegenwoordigd zijn hun verhaal.Iedere cultuur heeft kenmerkende muziek, dans en gerechten.Door deze passie te combineren willen we de culturen verbinden. Dompel jezelf onder in de culturen en doe kennis op door de gerechten zelf te maken en de interviews te lezen. Doormiddel van QR - codes te scannen luister je gemakkeljk naar de bijbehorende muziek.",
        "Bindwijze: E-book Verschijningsdatum: januari 2020 Ebook formaat: Adobe PDF Illustraties: Met illustraties Auteur: Back to the Roots Lees mogelijkheden Lees dit ebook op Android(tablet) | Kobo e - reader | Desktop(Mac en Windows) | iOS(tablet) | Windows(tablet) | Overige e - reader",
        0,
        "Direct leverbaar",
        1,
        true
      ),
      new Product(
        4,
        "E-book Back to the Roots",
        "4,99",
        "Back to the Roots Culturen verbinden met passie In Back to the Roots doen de verschillende culturen die in Nederland vertegenwoordigd zijn hun verhaal.Iedere cultuur heeft kenmerkende muziek, dans en gerechten.Door deze passie te combineren willen we de culturen verbinden. Dompel jezelf onder in de culturen en doe kennis op door de gerechten zelf te maken en de interviews te lezen. Doormiddel van QR - codes te scannen luister je gemakkeljk naar de bijbehorende muziek.",
        "Bindwijze: E-book Verschijningsdatum: januari 2020 Ebook formaat: Adobe PDF Illustraties: Met illustraties Auteur: Back to the Roots Lees mogelijkheden Lees dit ebook op Android(tablet) | Kobo e - reader | Desktop(Mac en Windows) | iOS(tablet) | Windows(tablet) | Overige e - reader",
        10,
        "Direct leverbaar",
        1,
        true
      ),
    ]
  }

  //TODO haal alle producten op uit de database

  public getAllProducts(): Product[] {
    return this.products.slice();
  }

  //TODO product zoeken op id
  public getProductByID(id: number): Product {
    return this.products[id - 1]
  }
}
