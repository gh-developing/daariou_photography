import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q-and-a',
  templateUrl: './q-and-a.component.html',
  styleUrls: ['./q-and-a.component.scss']
})
export class QAndAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public qanda1: any = [
    {
      question: "Wie lange Fotografiere ich schon?",
      answer: "Ich Fotografiere seit 3 jahren, seit einem Jahr probiere ich es Professionel. Ich mache dies jedoch nur Hobbymässig."
    },
    {
      question: "Was und womit bearbeite ich an den Bildern?",
      answer: "Ich bearbeite nur kleinere sachen wie pickel oder Falten aber bearbeite kein Brazilian Buttlifting. Die Bilder bearbeite ich auf Adobe Lightroom und Adobe Photoshop."
    },
    {
      question: "Bei weiteren Fragen, kannst du mich jederzeit gerne über Instagram oder per Kontakt Formular kontaktieren.",
      answer: ""
    }
  ]

  public qanda: any = [

    {
      question: "Wie teuer ist ein Shooting?",
      answer: "Ein Shooting kostet zwischen 50 und 250 Fr.-, jeh nach aufwand, länge und spezifischem wünsche. Wobei ich in der regel das erste shooting gratis mache, um dir meine Resultate schon vorzuweisen und um sich kennen zu lernen."
    },
    {
      question: "Wie langen brauchen die Bilder bis sie angekommen sind?",
      answer: "Die Bilder kommen zwischen 5 Tagen und 2 Wochen fertig Bearbeitet und in Digitaler Form bei dir an."
    },
    {
      question: "Mit welcher Kamera Fotografiere ich?",
      answer: "Ich Fotografiere mit einer Sony A7RII, vorzugsweise mit einer Festbrennweite 80mm f1.8 von Viltrox oder dem 70-200mm f4 von Sony."
    }
  ]
}
