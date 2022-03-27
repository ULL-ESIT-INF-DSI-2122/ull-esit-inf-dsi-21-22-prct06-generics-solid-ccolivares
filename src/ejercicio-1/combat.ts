import { Fighter } from "./fighter";
import { Pokemon } from "./pokemon_fighter";
import { Types } from "./pokemon_fighter";
import { GenshinImpact } from "./genshin_fighter";
import { Element } from "./genshin_fighter";
import { Cytus } from "./cytus_fighter";
export { Combat };
export { Effectiveness };

enum Effectiveness {super_effective = 2, neutral = 1, not_very_effective = 0.5};

/**
 * Clase Combat que lleva a cabo un combate entre cualquier Fighter
 */
class Combat {
  /**
   * Constructor de la clase
   * @param fighter_A Luchador A
   * @param fighter_B Luchador B
   */
  constructor(protected fighter_A: Fighter, protected fighter_B: Fighter) {
  }

  /**
   * Daño entre dos Pokemon
   * @param pokemon_A Pokemon atacante
   * @param pokemon_D Pokemon defensor
   * @returns Puntos de daño
   */
  pokemonDamage(pokemon_A: Pokemon, pokemon_D: Pokemon) : number {
    let damage: number = 0;

    if (pokemon_A.getType() == Types.fire && pokemon_D.getType() == Types.grass) { // fire > grass (super_effective)
      damage = 50 * (pokemon_A.getAttack() / pokemon_D.getDefense()) * Effectiveness.super_effective;
  
    } else if (pokemon_A.getType() == Types.grass && pokemon_D.getType() == Types.fire) { // grass < fire (not_very_effective)
      damage = 50 * (pokemon_A.getAttack() / pokemon_D.getDefense()) * Effectiveness.not_very_effective;
  
    } else if (pokemon_A.getType() == Types.water && pokemon_D.getType() == Types.fire) { // water > fire (super_effective)
      damage = 50 * (pokemon_A.getAttack() / pokemon_D.getDefense()) * Effectiveness.super_effective;
  
    } else if (pokemon_A.getType() == Types.fire && pokemon_D.getType() == Types.water) { // fire < water (not_very_effective)
      damage = 50 * (pokemon_A.getAttack() / pokemon_D.getDefense()) * Effectiveness.not_very_effective;
  
    } else if (pokemon_A.getType() == Types.fire && pokemon_D.getType() == Types.electric || 
               pokemon_A.getType() == Types.electric && pokemon_D.getType() == Types.fire) { // fire = electric (neutral)
      damage = 50 * (pokemon_A.getAttack() / pokemon_D.getDefense()) * Effectiveness.neutral;
      
    } else if (pokemon_A.getType() == Types.grass && pokemon_D.getType() == Types.water) { // grass > water (super_effective)
      damage = 50 * (pokemon_A.getAttack() / pokemon_D.getDefense()) * Effectiveness.super_effective;
  
    } else if (pokemon_A.getType() == Types.water && pokemon_D.getType() == Types.grass) { // water < grass (not_very_effective)
      damage = 50 * (pokemon_A.getAttack() / pokemon_D.getDefense()) * Effectiveness.not_very_effective;
      
    } else if (pokemon_A.getType() == Types.electric && pokemon_D.getType() == Types.water) { // electric > water (super_effective)
      damage = 50 * (pokemon_A.getAttack() / pokemon_D.getDefense()) * Effectiveness.super_effective;
  
    } else if (pokemon_A.getType() == Types.water && pokemon_D.getType() == Types.electric) { // water < electric (not_very_effective)
      damage = 50 * (pokemon_A.getAttack() / pokemon_D.getDefense()) * Effectiveness.not_very_effective;
      
    } else if (pokemon_A.getType() == Types.grass && pokemon_D.getType() == Types.electric || 
               pokemon_A.getType() == Types.electric && pokemon_D.getType() == Types.grass) { // grass = electric (neutral)
      damage = 50 * (pokemon_A.getAttack() / pokemon_D.getDefense()) * Effectiveness.neutral;
      
    }
  
    return damage;
  }

  /**
   * Simula un combate entre dos Pokemon
   * @param pokemon_A Pokemon A
   * @param pokemon_B Pokemon B
   * @returns Nombre del ganador
   * (Toma en cuenta el tipo del Pokemon)
   */
  pokemonCombat(pokemon_A: Pokemon, pokemon_B: Pokemon) : string {
    let HP_A: number = pokemon_A.getHP();
    let HP_B: number = pokemon_B.getHP();
    let aux_damage: number = 0;

    console.log(`COMIENZA EL COMBATE!`);
    console.log(`----------------------------------------------------------------------------`);

    if (pokemon_A.getSpeed() > pokemon_B.getSpeed()) {
      console.log(`${pokemon_A.getName()} atacará primero`);

      while (HP_A > 0 && HP_B > 0) {
        // TURNO A
        aux_damage = this.pokemonDamage(pokemon_A, pokemon_B);
        HP_B = HP_B - aux_damage;
        console.log(`${pokemon_A.getName()} ataca a ${pokemon_B.getName()} con ${aux_damage.toFixed(0)} puntos de daño`);
        if (HP_B <= 0) {
          console.log(`${pokemon_B.getName()} se ha debilitado`);
          break;
        }
        console.log(`\n`);
        console.log(`${pokemon_A.getName()} --> ${HP_A.toFixed(0)}`);
        console.log(`${pokemon_B.getName()} --> ${HP_B.toFixed(0)}`);
        console.log(`----------------------------------------------------------------------------`);

        
        // TURNO B
        aux_damage = this.pokemonDamage(pokemon_B, pokemon_A);
        HP_A = HP_A - aux_damage;
        console.log(`${pokemon_B.getName()} ataca a ${pokemon_A.getName()} con ${aux_damage.toFixed(0)} puntos de daño`);
        if (HP_A <= 0) {
          console.log(`${pokemon_A.getName()} se ha debilitado`);
          break;
        }
        console.log(`\n`);
        console.log(`${pokemon_A.getName()} --> ${HP_A.toFixed(0)}`);
        console.log(`${pokemon_B.getName()} --> ${HP_B.toFixed(0)}`);
        console.log(`----------------------------------------------------------------------------`);
      }
    } else {
      console.log(`${pokemon_B.getName()} atacará primero`);
        
      while (HP_A > 0 && HP_B > 0) {
        // TURNO B
        aux_damage = this.pokemonDamage(pokemon_B, pokemon_A);
        HP_A -= aux_damage;
        console.log(`${pokemon_B.getName()} ataca a ${pokemon_A.getName()} con ${aux_damage.toFixed(0)} puntos de daño`);
        if (HP_A < 0) {
          console.log(`${pokemon_A.getName()} se ha debilitado`);
          break;
        }
        console.log(`\n`);
        console.log(`${pokemon_A.getName()} --> ${HP_A.toFixed(0)}`);
        console.log(`${pokemon_B.getName()} --> ${HP_B.toFixed(0)}`);

        // TURNO A
        aux_damage = this.pokemonDamage(pokemon_A, pokemon_B);
        HP_B -= aux_damage;
        console.log(`${pokemon_A.getName()} ataca a ${pokemon_B.getName()} con ${aux_damage.toFixed(0)} puntos de daño`);
        if (HP_B < 0) {
          console.log(`${pokemon_B.getName()} se ha debilitado`);
          break;
        }
        console.log(`\n`);
        console.log(`${pokemon_A.getName()} --> ${HP_A.toFixed(0)}`);
        console.log(`${pokemon_B.getName()} --> ${HP_B.toFixed(0)}`);
      }
    }

    if (HP_A > HP_B) {
      console.log(`----------------------------------------------------------------------------`);
      console.log(`¡${pokemon_A.getName()} es el ganador!`);
      return pokemon_A.getName();
    } else {
      console.log(`----------------------------------------------------------------------------`);
      console.log(`¡${pokemon_B.getName()} es el ganador!`);
      return pokemon_B.getName();
    }
  }


  /**
   * Daño entre dos personajes de Genshin Impact
   * @param genshin_A Personaje atacante
   * @param genshin_D Personaje defensor
   * @returns Puntos de daño
   * 
   *  EFECTOS GENSHIN: 
   *  hydro -> pyro (x2 dmg)
   *  pyro -> cryo (x2 dmg)
   *  pyro -> hydro (x1.5 dmg)
   *  cryo -> pyro (x1.5 dmg)
   * 
   *  No todos los elementos provocan elevación del daño
   * 
   */
  genshinDamage(genshin_A: GenshinImpact, genshin_D: GenshinImpact) : number {
    let damage: number = 0;

    if (genshin_A.getElement() == Element.hydro && genshin_D.getElement() == Element.pyro) {
      damage = 50 * (genshin_A.getAttack() / genshin_D.getDefense()) * 2;
    } else if (genshin_A.getElement() == Element.pyro && genshin_D.getElement() == Element.cryo) {
      damage = 50 * (genshin_A.getAttack() / genshin_D.getDefense()) * 2;
    } else if (genshin_A.getElement() == Element.pyro && genshin_D.getElement() == Element.hydro) {
      damage = 50 * (genshin_A.getAttack() / genshin_D.getDefense()) * 1.5;
    } else if (genshin_A.getElement() == Element.cryo && genshin_D.getElement() == Element.pyro) {
      damage = 50 * (genshin_A.getAttack() / genshin_D.getDefense()) * 1.5;
    } else {
      damage = 50 * (genshin_A.getAttack() / genshin_D.getDefense());
    }

    return damage;
  }

  /**
   * Simula un combate entre dos personajes de Genshin Impact
   * @param genshin_A Personaje de Genshin A
   * @param genshin_B Personaje de Genshin B
   * @returns Nombre del ganador
   * (Toma en cuenta el elemento que controlan) 
   */
  genshinCombat(genshin_A: GenshinImpact, genshin_B: GenshinImpact) : string {
    let HP_A: number = genshin_A.getHP();
    let HP_B: number = genshin_B.getHP();
    let aux_damage: number = 0;

    console.log(`COMIENZA EL COMBATE!`);
    console.log(`----------------------------------------------------------------------------`);
    console.log(`${genshin_A.getName()} atacará primero`);

    while (HP_A > 0 && HP_B > 0) {
      // TURNO A
      aux_damage = this.genshinDamage(genshin_A, genshin_B);
      HP_B = HP_B - aux_damage;
      console.log(`${genshin_A.getName()} ataca a ${genshin_B.getName()} con ${aux_damage.toFixed(0)} puntos de daño`);
      if (HP_B <= 0) {
        console.log(`${genshin_B.getName()} se ha debilitado`);
        break;
      }
      console.log(`\n`);
      console.log(`${genshin_A.getName()} --> ${HP_A.toFixed(0)}`);
      console.log(`${genshin_B.getName()} --> ${HP_B.toFixed(0)}`);
      console.log(`----------------------------------------------------------------------------`);

      // TURNO B
      aux_damage = this.genshinDamage(genshin_B, genshin_A);
      HP_A = HP_A - aux_damage;
      console.log(`${genshin_B.getName()} ataca a ${genshin_A.getName()} con ${aux_damage.toFixed(0)} puntos de daño`);
      if (HP_A <= 0) {
        console.log(`${genshin_A.getName()} se ha debilitado`);
        break;
      }
      console.log(`\n`);
      console.log(`${genshin_A.getName()} --> ${HP_A.toFixed(0)}`);
      console.log(`${genshin_B.getName()} --> ${HP_B.toFixed(0)}`);
      console.log(`----------------------------------------------------------------------------`);
    }

    if (HP_A > HP_B) {
      console.log(`----------------------------------------------------------------------------`);
      console.log(`¡${genshin_A.getName()} es el ganador!`);
      return genshin_A.getName();
    } else {
      console.log(`----------------------------------------------------------------------------`);
      console.log(`¡${genshin_B.getName()} es el ganador!`);
      return genshin_B.getName();
    }
  }

  /**
   * Daño entre dos personajes del Cytus
   * @param cytus_A Personaje atacante
   * @param cytus_D Personaje defensor
   * @returns Puntos de daño
   */
  cytusDamage(cytus_A: Cytus, cytus_D: Cytus) : number {
    let damage: number = 0;
    
    if (cytus_A.getBpm() > cytus_D.getBpm()) {
      damage = 50 * (cytus_A.getAttack() / cytus_D.getDefense()) * 1.3;
    } else {
      damage = 50 * (cytus_A.getAttack() / cytus_D.getDefense());
    }

    return damage;
  }


  /**
   * Simula un combate entre dos personajes del Cytus
   * @param cytus_A Personaje del Cytus A
   * @param cytus_B Personaje del Cytus B
   * @returns Nombre del ganador
   * (Toma en cuenta los BPM para boostear a los personajes)
   */
  cytusCombat(cytus_A: Cytus, cytus_B: Cytus) : string {
    let HP_A: number = cytus_A.getHP();
    let HP_B: number = cytus_B.getHP();
    let aux_damage: number = 0;

    console.log(`COMIENZA EL COMBATE!`);
    console.log(`----------------------------------------------------------------------------`);
    console.log(`${cytus_A.getName()} atacará primero`);

    while (HP_A > 0 && HP_B > 0) {
      // TURNO A
      aux_damage = this.cytusDamage(cytus_A, cytus_B);
      HP_B = HP_B - aux_damage;
      console.log(`${cytus_A.getName()} ataca a ${cytus_B.getName()} con ${aux_damage.toFixed(0)} puntos de daño`);
      if (HP_B <= 0) {
        console.log(`${cytus_B.getName()} se ha debilitado`);
        break;
      }
      console.log(`\n`);
      console.log(`${cytus_A.getName()} --> ${HP_A.toFixed(0)}`);
      console.log(`${cytus_B.getName()} --> ${HP_B.toFixed(0)}`);
      console.log(`----------------------------------------------------------------------------`);

      // TURNO B
      aux_damage = this.cytusDamage(cytus_B, cytus_A);
      HP_A = HP_A - aux_damage;
      console.log(`${cytus_B.getName()} ataca a ${cytus_A.getName()} con ${aux_damage.toFixed(0)} puntos de daño`);
      if (HP_A <= 0) {
        console.log(`${cytus_A.getName()} se ha debilitado`);
        break;
      }
      console.log(`\n`);
      console.log(`${cytus_A.getName()} --> ${HP_A.toFixed(0)}`);
      console.log(`${cytus_B.getName()} --> ${HP_B.toFixed(0)}`);
      console.log(`----------------------------------------------------------------------------`);
    }

    if (HP_A > HP_B) {
      console.log(`----------------------------------------------------------------------------`);
      console.log(`¡${cytus_A.getName()} es el ganador!`);
      return cytus_A.getName();
    } else {
      console.log(`----------------------------------------------------------------------------`);
      console.log(`¡${cytus_B.getName()} es el ganador!`);
      return cytus_B.getName();
    }
  }

  /**
   * Daño entre dos personajes de distinto universo (neutral)
   * @param attacker Atacante
   * @param defender Defensor
   * @returns Puntos de daño
   */
  neutralDamage(attacker: Fighter, defender: Fighter) : number {
    return (50 * (attacker.getAttack() / defender.getDefense()));
  }

  /**
   * Simula un combate entre dos personajes de distintos universos (neutral)
   * @param fighter_A Personaje A
   * @param fighter_B Personaje B
   * @returns Nombre del ganador
   */
  neutralCombat(fighter_A: Fighter, fighter_B: Fighter) : string {
    let HP_A: number = fighter_A.getHP();
    let HP_B: number = fighter_B.getHP();
    let aux_damage: number = 0;

    console.log(`COMIENZA EL COMBATE!`);
    console.log(`----------------------------------------------------------------------------`);
    console.log(`${fighter_A.getName()} atacará primero`);

    while (HP_A > 0 && HP_B > 0) {
      // TURNO A
      aux_damage = this.neutralDamage(fighter_A, fighter_B);
      HP_B = HP_B - aux_damage;
      console.log(`${fighter_A.getName()} ataca a ${fighter_B.getName()} con ${aux_damage.toFixed(0)} puntos de daño`);
      if (HP_B <= 0) {
        console.log(`${fighter_B.getName()} se ha debilitado`);
        break;
      }
      console.log(`\n`);
      console.log(`${fighter_A.getName()} --> ${HP_A.toFixed(0)}`);
      console.log(`${fighter_B.getName()} --> ${HP_B.toFixed(0)}`);
      console.log(`----------------------------------------------------------------------------`);

      // TURNO B
      aux_damage = this.neutralDamage(fighter_B, fighter_A);
      HP_A = HP_A - aux_damage;
      console.log(`${fighter_B.getName()} ataca a ${fighter_A.getName()} con ${aux_damage.toFixed(0)} puntos de daño`);
      if (HP_A <= 0) {
        console.log(`${fighter_A.getName()} se ha debilitado`);
        break;
      }
      console.log(`\n`);
      console.log(`${fighter_A.getName()} --> ${HP_A.toFixed(0)}`);
      console.log(`${fighter_B.getName()} --> ${HP_B.toFixed(0)}`);
      console.log(`----------------------------------------------------------------------------`);
    }

    if (HP_A > HP_B) {
      console.log(`----------------------------------------------------------------------------`);
      console.log(`¡${fighter_A.getName()} es el ganador!`);
      return fighter_A.getName();
    } else {
      console.log(`----------------------------------------------------------------------------`);
      console.log(`¡${fighter_B.getName()} es el ganador!`);
      return fighter_B.getName();
    }
  }

  /**
   * 
   */
  start() : string {
    if (this.fighter_A instanceof Pokemon && this.fighter_B instanceof Pokemon) {
      console.log("--------------------------------------------------------------------------------------------");
      console.log("[UNIVERSO POKEMON] Bienvenidos al combate Pokémon!");
      console.log("--------------------------------------------------------------------------------------------");
    }
    else if (this.fighter_A instanceof GenshinImpact && this.fighter_B instanceof GenshinImpact){  
      console.log("--------------------------------------------------------------------------------------------");
      console.log("[UNIVERSO GENSHIN IMPACT] Bienvenidos a Teyvat!");
      console.log("--------------------------------------------------------------------------------------------");
    }
    else if (this.fighter_A instanceof Cytus && this.fighter_B instanceof Cytus){  
      console.log("--------------------------------------------------------------------------------------------");
      console.log("[UNIVERSO CYTUS] Bienvenidos al Cytus!");
      console.log("--------------------------------------------------------------------------------------------");
    }
    else {
      console.log("--------------------------------------------------------------------------------------------");
      console.log("[MULTIUNIVERSO] Bienvenidos al combate entre universos!");
      console.log("--------------------------------------------------------------------------------------------");
    }

    // Pokemon - A
    if (this.fighter_A instanceof Pokemon) { 
      if (this.fighter_A.getType() == Types.electric)
        console.log(`Nuestro primer luchador será ${this.fighter_A.getName()}, un Pokémon de tipo eléctrico!`);
      if (this.fighter_A.getType() == Types.fire)
        console.log(`Nuestro primer luchador será ${this.fighter_A.getName()}, un Pokémon de tipo fuego!`);
      if (this.fighter_A.getType() == Types.grass)
        console.log(`Nuestro primer luchador será ${this.fighter_A.getName()}, un Pokémon de tipo hierba!`);
      if (this.fighter_A.getType() == Types.water)
        console.log(`Nuestro primer luchador será ${this.fighter_A.getName()}, un Pokémon de tipo agua!`);
  
    } 

    // Genshin - A
    if (this.fighter_A instanceof GenshinImpact) { 
      if (this.fighter_A.getElement() == Element.anemo)
        console.log(`Nuestro primer luchador será ${this.fighter_A.getName()}, portador/a de una visión de Anemo!`);
      if (this.fighter_A.getElement() == Element.cryo)
        console.log(`Nuestro primer luchador será ${this.fighter_A.getName()}, portador/a de una visión de Cryo!`);
      if (this.fighter_A.getElement() == Element.dendro)
        console.log(`Nuestro primer luchador será ${this.fighter_A.getName()}, portador/a de una visión de Dendro!`);
      if (this.fighter_A.getElement() == Element.electro)
        console.log(`Nuestro primer luchador será ${this.fighter_A.getName()}, portador/a de una visión de Electro!`);
      if (this.fighter_A.getElement() == Element.geo)
        console.log(`Nuestro primer luchador será ${this.fighter_A.getName()}, portador/a de una visión de Geo!`);
      if (this.fighter_A.getElement() == Element.hydro)
        console.log(`Nuestro primer luchador será ${this.fighter_A.getName()}, portador/a de una visión de Hydro!`);
      if (this.fighter_A.getElement() == Element.pyro)
        console.log(`Nuestro primer luchador será ${this.fighter_A.getName()}, portador/a de una visión de Pyro!`);

    } 
    
    // Cytus - A
    if (this.fighter_A instanceof Cytus) {  
      console.log(`Nuestro primer luchador será ${this.fighter_A.getName()}, proveniente del Cytus, con ${this.fighter_A.getBpm()}!`);
    }

    // Pokemon - B
    if (this.fighter_B instanceof Pokemon) { 
      if (this.fighter_B.getType() == Types.electric)
        console.log(`Nuestro segundo luchador será ${this.fighter_B.getName()}, un Pokémon de tipo eléctrico!`);
      if (this.fighter_B.getType() == Types.fire)
        console.log(`Nuestro segundo luchador será ${this.fighter_B.getName()}, un Pokémon de tipo fuego!`);
      if (this.fighter_B.getType() == Types.grass)
        console.log(`Nuestro segundo luchador será ${this.fighter_B.getName()}, un Pokémon de tipo hierba!`);
      if (this.fighter_B.getType() == Types.water)
        console.log(`Nuestro segundo luchador será ${this.fighter_B.getName()}, un Pokémon de tipo agua!`);
  
    } 
    
    // Genshin - B
    if (this.fighter_B instanceof GenshinImpact) { 
      if (this.fighter_B.getElement() == Element.anemo)
        console.log(`Nuestro segundo luchador será ${this.fighter_B.getName()}, portador/a de una visión de Anemo!`);
      if (this.fighter_B.getElement() == Element.cryo)
        console.log(`Nuestro segundo luchador será ${this.fighter_B.getName()}, portador/a de una visión de Cryo!`);
      if (this.fighter_B.getElement() == Element.dendro)
        console.log(`Nuestro segundo luchador será ${this.fighter_B.getName()}, portador/a de una visión de Dendro!`);
      if (this.fighter_B.getElement() == Element.electro)
        console.log(`Nuestro segundo luchador será ${this.fighter_B.getName()}, portador/a de una visión de Electro!`);
      if (this.fighter_B.getElement() == Element.geo)
        console.log(`Nuestro segundo luchador será ${this.fighter_B.getName()}, portador/a de una visión de Geo!`);
      if (this.fighter_B.getElement() == Element.hydro)
        console.log(`Nuestro segundo luchador será ${this.fighter_B.getName()}, portador/a de una visión de Hydro!`);
      if (this.fighter_B.getElement() == Element.pyro)
        console.log(`Nuestro segundo luchador será ${this.fighter_B.getName()}, portador/a de una visión de Pyro!`);

    } 
    
    // Cytus - B
    if (this.fighter_B instanceof Cytus) { 
      console.log(`Nuestro segundo luchador será ${this.fighter_B.getName()}, proveniente del Cytus, con ${this.fighter_B.getBpm()}!`);
    }

    console.log("--------------------------------------------------------------------------------------------");

    let winner: string = "";

    if (this.fighter_A instanceof Pokemon && this.fighter_B instanceof Pokemon) {
      winner = this.pokemonCombat(this.fighter_A, this.fighter_B);
    } else if (this.fighter_A instanceof GenshinImpact && this.fighter_B instanceof GenshinImpact) {
      winner = this.genshinCombat(this.fighter_A, this.fighter_B);
    } else if (this.fighter_A instanceof Cytus && this.fighter_B instanceof Cytus) {
      winner = this.cytusCombat(this.fighter_A, this.fighter_B);
    } else { // Neutral
      winner = this.neutralCombat(this.fighter_A, this.fighter_B);
    }

    return winner;
  }
}