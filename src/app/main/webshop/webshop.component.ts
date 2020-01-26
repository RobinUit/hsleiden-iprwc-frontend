import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-webshop',
  templateUrl: './webshop.component.html',
  styleUrls: ['./webshop.component.scss']
})
export class WebshopComponent implements OnInit {

  products: Array<Product> = [
    new Product("E-book Back to the Roots",
      "4,99",
      "https://www.zwart-peters.nl/wp-content/uploads/2016/09/book-png-7.png",
      "Back to the Roots Culturen verbinden met passie In Back to the Roots doen de verschillende culturen die in Nederland vertegenwoordigd zijn hun verhaal.Iedere cultuur heeft kenmerkende muziek, dans en gerechten.Door deze passie te combineren willen we de culturen verbinden. Dompel jezelf onder in de culturen en doe kennis op door de gerechten zelf te maken en de interviews te lezen. Doormiddel van QR - codes te scannen luister je gemakkeljk naar de bijbehorende muziek.",
      "Bindwijze: E-book Verschijningsdatum: januari 2020 Ebook formaat: Adobe PDF Illustraties: Met illustraties Auteur: Back to the Roots Lees mogelijkheden Lees dit ebook op Android(tablet) | Kobo e - reader | Desktop(Mac en Windows) | iOS(tablet) | Windows(tablet) | Overige e - reader"
      ),
      new Product("E-book Back to the Roots",
      "4,99",
      "https://www.zwart-peters.nl/wp-content/uploads/2016/09/book-png-7.png",
      "Back to the Roots Culturen verbinden met passie In Back to the Roots doen de verschillende culturen die in Nederland vertegenwoordigd zijn hun verhaal.Iedere cultuur heeft kenmerkende muziek, dans en gerechten.Door deze passie te combineren willen we de culturen verbinden. Dompel jezelf onder in de culturen en doe kennis op door de gerechten zelf te maken en de interviews te lezen. Doormiddel van QR - codes te scannen luister je gemakkeljk naar de bijbehorende muziek.",
      "Bindwijze: E-book Verschijningsdatum: januari 2020 Ebook formaat: Adobe PDF Illustraties: Met illustraties Auteur: Back to the Roots Lees mogelijkheden Lees dit ebook op Android(tablet) | Kobo e - reader | Desktop(Mac en Windows) | iOS(tablet) | Windows(tablet) | Overige e - reader"
      ),
      new Product("E-book Back to the Roots",
      "4,99",
      "https://www.zwart-peters.nl/wp-content/uploads/2016/09/book-png-7.png",
      "Back to the Roots Culturen verbinden met passie In Back to the Roots doen de verschillende culturen die in Nederland vertegenwoordigd zijn hun verhaal.Iedere cultuur heeft kenmerkende muziek, dans en gerechten.Door deze passie te combineren willen we de culturen verbinden. Dompel jezelf onder in de culturen en doe kennis op door de gerechten zelf te maken en de interviews te lezen. Doormiddel van QR - codes te scannen luister je gemakkeljk naar de bijbehorende muziek.",
      "Bindwijze: E-book Verschijningsdatum: januari 2020 Ebook formaat: Adobe PDF Illustraties: Met illustraties Auteur: Back to the Roots Lees mogelijkheden Lees dit ebook op Android(tablet) | Kobo e - reader | Desktop(Mac en Windows) | iOS(tablet) | Windows(tablet) | Overige e - reader"
      ),
      new Product("E-book Back to the Roots",
      "4,99",
      "https://www.zwart-peters.nl/wp-content/uploads/2016/09/book-png-7.png",
      "Back to the Roots Culturen verbinden met passie In Back to the Roots doen de verschillende culturen die in Nederland vertegenwoordigd zijn hun verhaal.Iedere cultuur heeft kenmerkende muziek, dans en gerechten.Door deze passie te combineren willen we de culturen verbinden. Dompel jezelf onder in de culturen en doe kennis op door de gerechten zelf te maken en de interviews te lezen. Doormiddel van QR - codes te scannen luister je gemakkeljk naar de bijbehorende muziek.",
      "Bindwijze: E-book Verschijningsdatum: januari 2020 Ebook formaat: Adobe PDF Illustraties: Met illustraties Auteur: Back to the Roots Lees mogelijkheden Lees dit ebook op Android(tablet) | Kobo e - reader | Desktop(Mac en Windows) | iOS(tablet) | Windows(tablet) | Overige e - reader"
      ),
  
    ]

  constructor() { }

  ngOnInit() {
  }

}
