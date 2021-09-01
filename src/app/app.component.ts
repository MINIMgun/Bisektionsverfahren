import { Component } from '@angular/core';
import { Rechenschritt } from './rechenschritt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * Das m das der Nutzer eingibt.
   */
  m?: number;
  /**
   * Die Rechenschritte die angezeigt werden.
   */
  rechenschritte: Array<Rechenschritt> = new Array();
  /**
   * Das Ergebnis das angezeigt wird.
   */
  ergebnis?: number;
  private a: number = 0;
  private b: number = 2;
  private n?: number;

  /**
   * Diese Methode wird ausgeführt wenn der Nutzer auf "Berechnen" drückt.
   */
  calculate(): void {
    // Zurücksetzen zu Standart Werten
    this.rechenschritte = new Array();
    this.a = 0;
    this.b = 2;
    // N berechnen
    this.n = this.calculateN();
    let x;
    for (let index = 1; index <= this.n; index++) {
      // Mittelpunkt berechnen
      x = (this.a + this.b) / 2;
      // f(x) berechnen
      const fx = this.f(x);
      // Werte zur Wertetabelle hinzufügen
      this.rechenschritte.push({
        a: this.a,
        b: this.b,
        fx: fx,
        n: index,
        x: x,
      });
      if (fx === 0) {
        // f(x) ist schon 0
        break;
      } else if (fx > 0) {
        // f(x) = 0 liegt links von x -> oberer Grenze des Intervalles setzen
        this.b = x;
      } else {
        // f(x) = 0 liegt rechts von x -> untere Grenze des Intervalles setzen
        this.a = x;
      }
    }
    // Ergebnis setzen
    this.ergebnis = x;
  }

  /**
   * Berechnet f(x).
   * @param x Der x Wert
   * @returns Das Ergebnis von x^2-2
   */
  f(x: number): number {
    return Math.pow(x, 2) - 2;
  }

  /**
   * Berechnet wie viele Rechenschritte man mindestens benötigt, um auf die angegebene Genauigkeit zu kommen
   * @returns n als aufgerundete natürliche Zahl, da n<0 nicht möglich ist
   */
  calculateN(): number {
    if (this.m) {
      return Math.ceil(
        Math.log2(this.b - this.a) + (this.m + 1) * Math.log2(10)
      );
    }
    return 0;
  }
}
