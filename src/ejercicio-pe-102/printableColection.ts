import { Collectable } from './collectable';
import { Printable } from './printable';
export { PrintableCollection };

/**
 * Implementa las interfaces Collectable y Printable
 */
abstract class PrintableCollection<T> implements Collectable<T>, Printable<T> {
  constructor(protected items: T[]) {
  }

  /**
   * Añade un item a la colección
   * @param aux item a añadir de tipo genérico
   */
  addItem(aux: T): void {
    this.items.push(aux);
  }

  /**
   * Getter para una posición en concreto de la colección
   * @param aux posición concreta 
   */
  getItem(aux: number): T {
    return this.items[aux];
  }

  /**
   * Elimina un item específico de la colección
   * @param aux posición del item
   */
  removeItem(aux: number) : void {
    this.items.splice(aux, 1);
  }

  /**
   * Devuelve el número de items que hay en la colección
   */
  getNumberOfItems(): number {
    return this.items.length;
  }

  /**
   * Método de impresión que devuelve una cadena con los objetos de la
   * colección separados por comas
   */
  print() : string {
    let aux_s: string = "";
    this.items.forEach((item) => {
      aux_s += item;
      aux_s += ", ";
    });
    return aux_s;
  }
}