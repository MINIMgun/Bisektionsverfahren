# Bisektionsverfahren

## Logik

Das Bisektionsverfahren ist [in dieser Klasse](./src/app/app.component.ts) implementiert.
Die Logik sieht folgendermaßen aus:

```typescript
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
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.
