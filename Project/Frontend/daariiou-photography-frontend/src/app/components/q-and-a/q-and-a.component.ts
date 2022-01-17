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
      question: "Seit wann fotografiere ich?",
      answer: "Ich fotografiere seit 3 Jahren, seit einem Jahr versuche ich es Professionel. Ich fotografiere jedoch nur hobbymässig."
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
      answer: "Ein Shooting kostet zwischen 50 und 250 Fr., je nach Aufwand, Länge und spezifischen wünschen. In der Regel mache ich das erste Shooting gratis, um dir meine Resultate schon vorzuweisen und um sich kennen zu lernen."
    },
    {
      question: "Wie langen brauchen die Bilder bis sie angekommen sind?",
      answer: "Die Bilder kommen zwischen 5 Tagen und 2 Wochen fertig bearbeitet und in digitaler Form bei dir an."
    },
    {
      question: "Mit welcher Kamera fotografiere ich?",
      answer: "Ich fotografiere mit einer Sony A7RII, vorzugsweise mit einer Festbrennweite 80mm f1.8 von Viltrox oder dem 70-200mm f4 von Sony."
    }
  ]
}
