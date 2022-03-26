export { Fighter };

abstract class Fighter {
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