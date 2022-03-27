import { Fighter } from "./fighter";
export{ Cytus };

/**
 * Clase que representa al universo del Cytus
 */
class Cytus extends Fighter{
  /**
   * Constructor de la clase
   * @param name nombre del personaje
   * @param weight Peso del personaje
   * @param height Altura del personaje
   * @param attack Ataque del personaje
   * @param defense Defensa del personaje
   * @param speed Velocidad del personaje
   * @param HP Vida del personaje
   * @param bpm Beats por minuto del personaje (para determinar boost)
   */
  constructor(protected name: string, protected weight: number, 
              protected height: number, protected attack: number, 
              protected defense: number, protected speed: number, 
              protected HP: number, protected bpm: number) {
    super(name, weight, height, attack, defense, speed, HP)
  }

  getName() : string {
    return this.name;
  }

  getWeight() : number {
    return this.weight;
  }
  
  getHeight() : number {
    return this.height;
  }
  
  getAttack() : number {
    return this.attack;
  }
  
  getDefense() : number {
    return this.defense;
  }
  
  getSpeed() : number {
    return this.speed;
  }
  
  getHP() : number {
    return this.HP;
  }

  // Atributo único de clase
  getBpm() : number {
    return this.bpm;
  }
}