import 'mocha';
import { expect } from 'chai';
import { Fighter } from '../../src/ejercicio-1/fighter';
import { GenshinImpact } from '../../src/ejercicio-1/genshin_fighter';
import { Element } from '../../src/ejercicio-1/genshin_fighter';

let hutao = new GenshinImpact("Hu Tao", 50, 153, 70, 40, 95, 430, Element.pyro);
//let mona = new GenshinImpact("Mona", 45, 160, 65, 45, 87, 475, Element.hydro);

describe('Comprobación de la clase GenshinImpact', () => {
  it('Comprobación de que se puede instanciar el objeto', () => {
    expect(hutao).to.be.an.instanceOf(GenshinImpact);
  });
  it('Comprobación de que hereda de la clase Fighter', () => {
    expect(hutao).to.be.an.instanceOf(Fighter);
  });
  it('Se puede acceder al atributo name', () => {
    expect(hutao.getName()).to.be.eql("Hu Tao");
  });
  it('Se puede acceder al atributo weight', () => {
    expect(hutao.getWeight()).to.be.eql(50);
  });
  it('Se puede acceder al atributo height', () => {
    expect(hutao.getHeight()).to.be.eql(153);
  });
  it('Se puede acceder al atributo attack', () => {
    expect(hutao.getAttack()).to.be.eql(70);
  });
  it('Se puede acceder al atributo defense', () => {
    expect(hutao.getDefense()).to.be.eql(40);
  });
  it('Se puede acceder al atributo speed', () => {
    expect(hutao.getSpeed()).to.be.eql(95);
  });
  it('Se puede acceder al atributo HP', () => {
    expect(hutao.getHP()).to.be.eql(430);
  });
  it('Se puede acceder al atributo element', () => {
    expect(hutao.getElement()).to.be.eql(1);
  });
});