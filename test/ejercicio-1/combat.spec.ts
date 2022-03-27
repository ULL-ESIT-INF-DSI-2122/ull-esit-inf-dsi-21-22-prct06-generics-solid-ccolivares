import 'mocha';
import { expect } from 'chai';
import { Fighter } from '../../src/ejercicio-1/fighter';
import { Combat } from '../../src/ejercicio-1/combat';
import { Pokemon } from '../../src/ejercicio-1/pokemon_fighter';
import { Types } from '../../src/ejercicio-1/pokemon_fighter';
import { GenshinImpact } from '../../src/ejercicio-1/genshin_fighter';
import { Element } from '../../src/ejercicio-1/genshin_fighter';
import { Cytus } from '../../src/ejercicio-1/cytus_fighter';

let psyduck = new Pokemon("Psyduck", 19.6, 0.8, 52, 58, 55, 500, Types.water);
let chikorita = new Pokemon("Chikorita", 6.4, 0.9, 49, 65, 45, 450, Types.grass);
let hutao = new GenshinImpact("Hu Tao", 50, 153, 70, 40, 95, 430, Element.pyro);
let mona = new GenshinImpact("Mona", 45, 160, 65, 45, 87, 475, Element.hydro);
let ivy = new Cytus("Ivy", 53, 170, 87, 41, 70, 460, 200);
let nora = new Cytus("Nora", 42, 130, 82, 50, 67, 430, 190);

let pokemonFight = new Combat(psyduck, chikorita);
let genshinFight = new Combat(hutao, mona);
let cytusFight = new Combat(ivy, nora);
let neutralFight = new Combat(hutao, ivy);

describe('Comprobación de la clase Combat', () => {
  it('Comprobación de que se puede instanciar el objeto con Pokemons', () => {
    expect(pokemonFight).to.be.an.instanceOf(Combat);
  });
  it('Comprobación de que se puede instanciar el objeto con personajes de Genshin', () => {
    expect(genshinFight).to.be.an.instanceOf(Combat);
  });
  it('Comprobación de que se puede instanciar el objeto con personajes del Cytus', () => {
    expect(cytusFight).to.be.an.instanceOf(Combat);
  });
  it('Comprobación de que se puede instanciar el objeto multiuniverso', () => {
    expect(neutralFight).to.be.an.instanceOf(Combat);
  });
});

describe('Comprobación del combate Pokemon', () => {
  it('Comprobación del cálculo del daño', () => {
    expect(pokemonFight.pokemonDamage(psyduck, chikorita)).to.be.eql(20);
    expect(pokemonFight.pokemonDamage(chikorita, psyduck)).to.be.eql(84.48275862068965);
  });
  it('Devuelve correctamente al ganador', () => {
    expect(pokemonFight.pokemonCombat(chikorita, psyduck)).to.be.eql("Chikorita");
  });
});

describe('Comprobación del combate Genshin Impact', () => {
  it('Comprobación del cálculo del daño', () => {
    expect(genshinFight.genshinDamage(hutao, mona)).to.be.eql(116.66666666666669);
    expect(genshinFight.genshinDamage(mona, hutao)).to.be.eql(162.5);
  });
  it('Devuelve correctamente al ganador', () => {
    expect(genshinFight.genshinCombat(hutao, mona)).to.be.eql("Mona");
  });
});

describe('Comprobación del combate Cytus', () => {
  it('Comprobación del cálculo del daño', () => {
    expect(cytusFight.cytusDamage(ivy, nora)).to.be.eql(113.10000000000001);
    expect(cytusFight.cytusDamage(nora, ivy)).to.be.eql(100);
  });
  it('Devuelve correctamente al ganador', () => {
    expect(cytusFight.cytusCombat(ivy, nora)).to.be.eql("Ivy");
  });
});

describe('Comprobación del combate multiuniverso (neutral)', () => {
  it('Comprobación del cálculo del daño', () => {
    expect(neutralFight.neutralDamage(ivy, hutao)).to.be.eql(108.74999999999999);
    expect(neutralFight.neutralDamage(hutao, ivy)).to.be.eql(85.36585365853658);
  });
  it('Devuelve correctamente al ganador', () => {
    expect(neutralFight.neutralCombat(ivy, hutao)).to.be.eql("Ivy");
  });
});

describe('Comprobación de la función start', () => {
  it('Comprobación con dos Pokemon', () => {
    expect(pokemonFight.start()).to.be.eql("Chikorita"); 
  });
  it('Comprobación con dos personajes de Genshin', () => {
    expect(genshinFight.start()).to.be.eql("Mona"); 
  });
  it('Comprobación con dos personajes del Cytus', () => {
    expect(cytusFight.start()).to.be.eql("Ivy"); 
  });
  it('Comprobación con un combate neutro', () => {
    expect(neutralFight.start()).to.be.eql("Ivy"); 
  });
});








