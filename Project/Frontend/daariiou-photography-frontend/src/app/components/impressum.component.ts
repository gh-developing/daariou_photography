import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressum',
  template: `
  <div>
  <h4>Impressum</h4>
  <h5 class="mt-3"> Datenschutz </h5>
  <p class="lead">
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
  
  <h5>Grund</h5>
  <p class="lead">
      Diese Webseite wurde für Daariiou Photography erstellt im namen von Dario Passucci.
  </p>
  
  <h5> System Administration </h5>
  <address class="lead">
      <a href="mailto:schachar.alon@gmail.com">Shachar Alon</a> <br />
      <a href="mailto:hannes.luethi@bluewin.ch">Hannes Lüthi</a>
  </address>
  <p>Zuletzt Aktualisiert: 25.01.2022 11:52</p>
  `,
  styles: [`
  `]
})
export class ImpressumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
