import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressum',
  template: `
<div>
  <h4>Impressum</h4>
  <div class="lead">
    <h5>Allgemeine Geschäftsbedingungen der Firma Daarriou Photography</h5>
    <h6>§1 Geltung gegenüber Unternehmern und Begriffsdefinitionen</h6>
    <p>
      (1) Die nachfolgenden Allgemeinen Geschäftbedingungen gelten für alle
      Lieferungen zwischen uns und einem Verbraucher in ihrer zum Zeitpunkt der
      Bestellung gültigen Fassung. Verbraucher ist jede natürliche Person, die
      ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer
      gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet
      werden können (§ 13 BGB).
    </p>
    <h6>§2 Zustandekommen eines Vertrages, Speicherung des Vertragstextes</h6>
    <p>
      (1) Die folgenden Regelungen über den Vertragsabschluss gelten für
      Bestellungen über unseren Internetshop http://www.daariiou-photgraphy.ch .
      <br />
      (2) Im Falle des Vertragsschlusses kommt der Vertrag mit Daarriou
      Photography Dario Passucci Lindenweg 7 D-3362 Niederönz Registernummer
      Registergericht zustande. <br />
      (3) Die Präsentation der Waren in unserem Internetshop stellen kein
      rechtlich bindendes Vertragsangebot unsererseits dar, sondern sind nur
      eine unverbindliche Aufforderungen an den Verbraucher, Waren zu bestellen.
      Mit der Bestellung der gewünschten Ware gibt der Verbraucher ein für ihn
      verbindliches Angebot auf Abschluss eines Kaufvertrages ab. <br />
      (4) Bei Eingang einer Bestellung in unserem Internetshop gelten folgende
      Regelungen: Der Verbraucher gibt ein bindendes Vertragsangebot ab, indem
      er die in unserem Internetshop vorgesehene Bestellprozedur erfolgreich
      durchläuft. Die Bestellung erfolgt in folgenden Schritten: </p>
      <ol>
        <li>Anmelden.</li>
        <li> Bei meinem Profil auf neues Shooting.</li>
        <li> Antrag Neues Shooting ausfüllen.</li>
        <li> Anfrage wird abgesendet.</li>
        <li> Warten auf Genehmigung oder Absage.</li>
        <li> Genehmigung oder Absage wird auf der Seite "Mein Profil" zuunterst angezeigt.</li>
      </ol>
      <p>
      Der Verbraucher kann vor dem verbindlichen Absenden der Bestellung durch
      Betätigen der in dem von ihm verwendeten Internet-Browser enthaltenen
      „Zurück“-Taste nach Kontrolle seiner Angaben wieder zu der Internetseite
      gelangen, auf der die Angaben des Kunden erfasst werden und Eingabefehler
      berichtigen bzw. durch Schließen des Internetbrowsers den Bestellvorgang
      abbrechen. Wir bestätigen den Eingang der Bestellung unmittelbar durch
      eine automatisch generierte E-Mail („Auftragsbestätigung“). Mit dieser
      nehmen wir Ihr Angebot an. <br />
      (5) Speicherung des Vertragstextes bei Bestellungen über unseren
      Internetshop : Wir senden Ihnen die Bestelldaten und unsere AGB per E-Mail
      zu. Die AGB können Sie jederzeit auch unter
      http://www.daariiou-photography.ch/impressum einsehen. Ihre Bestelldaten
      sind aus Sicherheitsgründen nicht mehr über das Internet zugänglich.
    </p>
    <h6>§3 Preise, Zahlung, Fälligkeit</h6>
    <p>
      (1) Die angegebenen Preise enthalten die gesetzliche Umsatzsteuer und
      sonstige Preisbestandteile. Hinzu kommen etwaige Versandkosten. <br />
      (2) Der Verbraucher hat die Möglichkeit der Zahlung per TWINT, PayPal.
      Wobei das erste Shooting meistens Gratis ist.
    </p>
    <h6>$4 Datenschutz</h6>
    <p>
      (1) Die Nutzung unserer Webseite ist in der Regel ohne eine Angabe
      personenbezogener Daten möglich. Soweit auf unseren Seiten
      personenbezogene Daten (beispielsweise Name, Anschrift oder
      E-Mail-Adresse) erhoben werden, erfolgt dies – soweit es möglich ist–
      immer auf freiwilliger Basis. Wir geben Ihre Daten ohne Ihre ausdrückliche
      Zustimmung nicht an Dritte weiter. Außerdem weisen wir Sie darauf hin,
      dass die Datenübertragung im Internet (wie beispielsweise bei der
      Kommunikation über E-Mail) Sicherheitslücken aufweisen kann. Denn ein
      lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
      möglich. Wir widersprechen hiermit ausdrücklich der Nutzung von im Rahmen
      der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
      Übersendung von nicht ausdrücklich angeforderter Werbung und
      Informationsmaterialien. Die Betreiber dieser Seiten behalten sich
      ausdrücklich vor, im Fall der unverlangten Zusendung von
      Werbeinformationen, etwa durch Spam-Mails, rechtliche Schritte
      einzuleiten.
    </p>
    <h6>$5 Grund</h6>
    <p>
      (1) Diese Webseite wurde für Daariiou Photography erstellt im namen von
      Dario Passucci.
    </p>
    <h6>$6 System Administration</h6>
    <address class="lead">
      <a href="mailto:schachar.alon@gmail.com">Shachar Alon</a> <br />
      <a href="mailto:hannes.luethi@bluewin.ch">Hannes Lüthi</a>
    </address>
    <p>Zuletzt Aktualisiert: 25.01.2022 11:52</p>
  </div>
</div>
  `,
  styles: [`
  `]
})
export class ImpressumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
