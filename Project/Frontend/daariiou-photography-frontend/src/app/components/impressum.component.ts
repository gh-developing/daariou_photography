import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressum',
  template: `
  <div class="container">
  <h4 class="mt-4">Impressum</h4>
  <strong class="mt-3"> Datenschutz </strong>
  <p>
      Die Nutzung unserer Webseite ist in der Regel ohne eine Angabe personenbezogener Daten möglich. Soweit auf unseren
      Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adresse) erhoben werden, erfolgt dies –
      soweit es möglich ist– immer auf freiwilliger Basis. Wir geben Ihre Daten ohne Ihre ausdrückliche Zustimmung nicht
      an Dritte weiter. Außerdem weisen wir Sie darauf hin, dass die Datenübertragung im Internet (wie beispielsweise bei
      der Kommunikation über E-Mail) Sicherheitslücken aufweisen kann. Denn ein lückenloser Schutz der Daten vor dem
      Zugriff durch Dritte ist nicht möglich. Wir widersprechen hiermit ausdrücklich der Nutzung von im Rahmen der
      Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter
      Werbung und Informationsmaterialien. Die Betreiber dieser Seiten behalten sich ausdrücklich vor, im Fall der
      unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, rechtliche Schritte einzuleiten.
  </p>
  
  <strong>Grund</strong>
  <p>
      Diese Webseite wurde für Daariiou Photography erstellt im namen von Dario Passucci.
  </p>
  
  <strong> System Administration </strong>
  <address>
      <a href="mailto:schachar.alon@gmail.com">Shachar Alon</a> <br />
      <a href="mailto:hannes.luethi@bluewin.ch">Hannes Lüthi</a>
  </address>`,
  styles: [`
  @media only screen and (min-width: 757px) {
    div {
    height: calc(100vh - 232px);
  }
  }
  
  `]
})
export class ImpressumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
