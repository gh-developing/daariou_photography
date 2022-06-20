import { Component, OnInit } from '@angular/core';
import { KindOfShootingService, QandAService } from "src/api/lib/services";
import { Qandum } from 'src/api/lib/models/qandum';

@Component({
  selector: 'app-q-and-a',
  templateUrl: './q-and-a.component.html',
  styleUrls: ['./q-and-a.component.scss']
})
export class QAndAComponent implements OnInit {
  public qanda1: Qandum[];
  public qanda: Qandum[];

  constructor(private readonly qandAService: QandAService) { }

  ngOnInit(): void {
    this.getQandAs();
  }

<<<<<<< Updated upstream
  public getQandAs() {
    this.qandAService.apiV1QandAGetAllGet$Json().subscribe(
      (result) => {
        this.qanda1 = result.slice(0, result.length/2);
        this.qanda = result.slice(result.length/2, result.length);
      },
      (error) => {
        console.log(error);
      }
    );
  }
=======
  public qanda1: any = [
    {
      question: "Seit wann fotografiere ich?",
      answer: "Ich fotografiere seit 4 Jahren, seit einem Jahr fotografiere ich Professionel."
    },
    {
      question: "Was und womit bearbeite ich an den Bildern?",
      answer: "Ich bearbeite nur kleinere Sachen wie Pickel oder Falten. Ich mache aber keine Körperveränderungen. Die Bilder bearbeite ich auf Adobe Lightroom und Adobe Photoshop."
    },
    {
      question: "Bei weiteren Fragen, kannst du mich jederzeit gerne über Instagram oder per Kontakt Formular kontaktieren.",
      answer: ""
    }
  ]

  public qanda: any = [
    {
      question: "Wie teuer ist ein Shooting?",
      answer: "Ein Shooting kostet zwischen 50 und 250 Fr., je nach Aufwand, Länge und spezifischen wünschen."
    },
    {
      question: "Wie langen brauchen die Bilder bis sie angekommen sind?",
      answer: "Die Bilder kommen zwischen 5 Tagen und 2 Wochen fertig bearbeitet und in digitaler Form bei dir an."
    },
    {
      question: "Mit welcher Kamera fotografiere ich?",
      answer: "Ich fotografiere mit einer Sony A7RII, vorzugsweise mit einer Festbrennweite 80mm f1.8 von Viltrox oder dem 70-200mm f2.8 von Tamron."
    }
  ]
>>>>>>> Stashed changes
}
