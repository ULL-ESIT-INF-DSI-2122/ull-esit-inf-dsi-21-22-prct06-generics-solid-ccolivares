export { Printable }

/**
 * Interfaz Printable, integra el método print
 */
interface Printable<T> {
  print() : string;
}