import 'mocha';
import { expect } from 'chai';
import { Fighter } from '../../src/ejercicio-1/fighter';
import { Pokemon } from '../../src/ejercicio-1/pokemon_fighter';
import { Types } from '../../src/ejercicio-1/pokemon_fighter';

let psyduck = new Pokemon("Psyduck", 19.6, 0.8, 52, 48, 55, 500, Types.water);
//let chikorita = new Pokemon("Chikorita", 6.4, 0.9, 49, 65, 45, 450, Types.grass);

describe('Comprobación de la clase Pokemon', () => {
  it('Comprobación de que se puede instanciar el objeto', () => {
    expect(psyduck).to.be.an.instanceOf(Pokemon);
  });
  it('Comprobación de que hereda de la clase Fighter', () => {
    expect(psyduck).to.be.an.instanceOf(Fighter);
  });
  it('Se puede acceder al atributo name', () => {
    expect(psyduck.getName()).to.be.eql("Psyduck");
  });
  it('Se puede acceder al atributo weight', () => {
    expect(psyduck.getWeight()).to.be.eql(19.6);
  });
  it('Se puede acceder al atributo weight', () => {
    expect(psyduck.getHeight()).to.be.eql(0.8);
  });
  it('Se puede acceder al atributo weight', () => {
    expect(psyduck.getAttack()).to.be.eql(52);
  });
  it('Se puede acceder al atributo weight', () => {
    expect(psyduck.getDefense()).to.be.eql(48);
  });
  it('Se puede acceder al atributo weight', () => {
    expect(psyduck.getSpeed()).to.be.eql(55);
  });
  it('Se puede acceder al atributo weight', () => {
    expect(psyduck.getHP()).to.be.eql(500);
  });
  it('Se puede acceder al atributo type', () => {
    expect(psyduck.getType()).to.be.eql(1);
  });
});