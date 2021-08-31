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
  calculate(): void {}

  /**
   * Berechnet f(x).
   * @param x Der x Wert
   * @returns Das Ergebnis von x^2-2
   */
  f(x: number): number {
    return Math.pow(x, 2) - 2;
  }
}
