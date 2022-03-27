import 'mocha';
import { expect } from 'chai';
import { Fighter } from '../../src/ejercicio-1/fighter';
import { Cytus } from '../../src/ejercicio-1/cytus_fighter';

let ivy = new Cytus("Ivy", 53, 170, 87, 41, 70, 460, 200);
//let nora = new Cytus("Nora", 42, 130, 82, 50, 67, 430, 190);

describe('Comprobación de la clase GenshinImpact', () => {
  it('Comprobación de que se puede instanciar el objeto', () => {
    expect(ivy).to.be.an.instanceOf(Cytus);
  });
  it('Comprobación de que hereda de la clase Fighter', () => {
    expect(ivy).to.be.an.instanceOf(Fighter);
  });
  it('Se puede acceder al atributo name', () => {
    expect(ivy.getName()).to.be.eql("Ivy");
  });
  it('Se puede acceder al atributo weight', () => {
    expect(ivy.getWeight()).to.be.eql(53);
  });
  it('Se puede acceder al atributo height', () => {
    expect(ivy.getHeight()).to.be.eql(170);
  });
  it('Se puede acceder al atributo attack', () => {
    expect(ivy.getAttack()).to.be.eql(87);
  });
  it('Se puede acceder al atributo defense', () => {
    expect(ivy.getDefense()).to.be.eql(41);
  });
  it('Se puede acceder al atributo speed', () => {
    expect(ivy.getSpeed()).to.be.eql(70);
  });
  it('Se puede acceder al atributo HP', () => {
    expect(ivy.getHP()).to.be.eql(460);
  });
  it('Se puede acceder al atributo element', () => {
    expect(ivy.getBpm()).to.be.eql(200);
  });
});