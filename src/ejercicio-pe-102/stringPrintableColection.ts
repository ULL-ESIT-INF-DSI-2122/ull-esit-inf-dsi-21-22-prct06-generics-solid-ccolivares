import { PrintableCollection } from './printableColection';
export { StringPrintableCollection };

/**
 * Modela una colección de objetos cadena
 */
class StringPrintableCollection<T> extends PrintableCollection<T> {
  constructor(protected items: T[]) {
    super(items);
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