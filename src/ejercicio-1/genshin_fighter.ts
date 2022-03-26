import { Fighter } from "./fighter";
export{ GenshinImpact };
export { Element };

enum Element {anemo, pyro, electro, hydro, cryo, geo, dendro};

class GenshinImpact extends Fighter{
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