export { Collectable };

/**
 * Interfaz que modela una colección de items y funcionalidades
 */
interface Collectable<T> {
  addItem(aux: T): void;
  getItem(aux: number): T;
  removeItem(aux: number) : void;
  getNumberOfItems(): number;
}
