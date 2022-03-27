import { Fighter } from "./fighter";
export{ GenshinImpact };
export { Element };

enum Element {anemo, pyro, electro, hydro, cryo, geo, dendro};

/**
 * Clase que representa a un personaje de Genshin Impact
 */
class GenshinImpact extends Fighter{
  /**
   * Constructor de la clase
   * @param name Nombre del personaje
   * @param weight Peso del personaje
   * @param height Altura del personaje
   * @param attack Ataque del personaje
   * @param defense Defensa del personaje
   * @param speed Velocidad del personaje
   * @param HP Vida del personaje
   * @param element Elemento que controla el personaje  
   */
  constructor(protected name: string, protected weight: number, 
              protected height: number, protected attack: number, 
              protected defense: number, protected speed: number, 
              protected HP: number, protected element: Element) {
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
  getElement() : Element {
    return this.element;
  }
}