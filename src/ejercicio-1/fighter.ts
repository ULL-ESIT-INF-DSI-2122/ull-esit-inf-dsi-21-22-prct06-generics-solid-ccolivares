export { Fighter };

/**
 * Clase que representa a un luchador
 */
abstract class Fighter {
  /**
   * Constructor de la clase
   * @param name Nombre del luchador
   * @param weight Peso del luchador
   * @param height Altura del luchador
   * @param attack Ataque del luchador
   * @param defense Defensa del luchador
   * @param speed Velocidad del luchador
   * @param HP Vida del luchador
   */
  constructor(protected name: string, protected weight: number, 
              protected height: number, protected attack: number, 
              protected defense: number, protected speed: number, 
              protected HP: number) {
  }

  abstract getName() : string;
  abstract getWeight() : number;
  abstract getHeight() : number;
  abstract getAttack() : number;
  abstract getDefense() : number;
  abstract getSpeed() : number;
  abstract getHP() : number;
}