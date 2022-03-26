import { Fighter } from "./fighter";
export{ Pokemon };
export { Types };

enum Types {fire, water, grass, electric};

class Pokemon extends Fighter {
  constructor(protected name: string, protected weight: number, 
              protected height: number, protected attack: number, 
              protected defense: number, protected speed: number, 
              protected HP: number, protected type: Types) {
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
  getType() : Types {
    return this.type;
  }
}