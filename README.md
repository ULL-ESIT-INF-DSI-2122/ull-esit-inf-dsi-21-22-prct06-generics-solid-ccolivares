# PRACTICA 6. CLASES E INTERFACES GENERICAS. PRINCIPIOS SOLID

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-ccolivares/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-ccolivares?branch=main)

[INFORME EN GITHUB PAGES](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct06-generics-solid-ccolivares/)

## Introducción

El objetivo para esta práctica será la resolución de una serie de ejercicios para profundizar mas en los conceptos de clases e interfaces genéricas de Typescript. Además utilizaremos las herramientas Instanbul y Coveralls para el cubrimiento de las pruebas unitarias.

Como apuntamiento en esta práctica no se mostrarán capturas del código sino que he optado por incluir cajas de código en Markdown y además proporcionar el link a los archivos correspondientes de cada ejemplo. 

## Desarrollo

### Ejercicio 1 - El combate definitivo

Se nos pide para este ejercicio que a partir del ejercicio 1 de la práctica 5 permitamos ahora combates multiuniversos. En nuestro caso los universos serán Pokémon, Genshin Impact y Cytus, tres juegos de distintas temáticas.

En primer lugar desarrollaremos la clase abstracta `Fighter` que representará a un luchador de cualquier universo, por lo tanto la desarrollaremos de la siguiente forma: 

```Typescript
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
```
[Clase abstracta Fighter ⤴](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-ccolivares/blob/main/src/ejercicio-1/fighter.ts)

Luego desarrollaremos especificamente las clases que representarán a los universos, comenzaremos por la que teníamos anteriormente desarrollada que será `Pokémon`, la particularidad de esta clase reside en el tipo y la velocidad de los `Pokémon`. El tipo (que será determinado por un `enum` con unos tipos ya definidos) influira como vimos en los ejercicios anteriores en la efectividad de los ataques y la velocidad influira en el combatiente que atacará primero. Su desarrollo lucirá de la siguiente forma:

```typescript
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

  getType() : Types {
    return this.type;
  }
}
```
[Clase Pokemon (Fighter) ⤴](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-ccolivares/blob/main/src/ejercicio-1/pokemon_fighter.ts)

El siguiente universo que desarrollaremos será el de `Genshin Impact`. En este universo los personajes poseen amuletos llamados **visiones** que les proporcionan el poder de controlar ciertos elementos; la efectividad entre elementos funciona de forma parecida que en `Pokémon` a diferencia que no existen las desventajas y no todos los tipos pueden ser parte de una ventaja de daño, por lo tanto solo trataremos con los elementos _pyro_, _cryo_ e _hydro_ de la siguiente forma:

```
EFECTOS GENSHIN: 
hydro -> pyro (x2 dmg)
pyro -> cryo (x2 dmg)
pyro -> hydro (x1.5 dmg)
cryo -> pyro (x1.5 dmg)

(leyenda: atacante -> defensor, dmg = daño)
```

Esto lo tomaremos en cuenta a la hora de hacer el combate entre personajes de este universo. La clase que representará a un combatiente de este universo se verá de la siguiente forma:

```typescript
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

  getElement() : Element {
    return this.element;
  }
}

```
[Clase GenshinImpact (Fighter) ⤴](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-ccolivares/blob/main/src/ejercicio-1/genshin_fighter.ts)

Para finalizar presentaremos el universo de `Cytus`, un juego rítmico, por esta razón estos personajes contarán con un atributo que representará los BPM (beats por minuto) medios de sus canciones, si poseen mayor número de BPM que su contrincante del mismo universo su daño se verá duplicado. La clase que representa a este universo se verá de la siguiente manera:

```typescript
class Cytus extends Fighter{
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

  getBpm() : number {
    return this.bpm;
  }
}
```
[Clase Cytus (Fighter) ⤴](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-ccolivares/blob/main/src/ejercicio-1/cytus_fighter.ts)

Por último desarrollaremos la clase que esta encargada de simular los combates, esta clase consistirá en una funcion `start()` que pondrá en marcha los combates, esta función llamará a otra según si estamos tratando con personajes de distintos universos y de cuales, y si estamos tratando con combates entre universos. 

Para realizar los combates específicos desarrollaremos pares de funciones `damage()` y `combat`. Las funciones `combat` simularán los combates específicos y llamarán a las funciones `damage()` correspondientes para calcular los daños de cada turno. 

Comenzaremos viendo de nuevo las funciones que formarán parte del combate entre dos `Pokémon`.
En primer lugar veremos la función `pokemonDamage()` que calculará el daño que le hace un `Pokémon` a otro según el tipo que sean ambos (como ya vimos en los ejercicios de las anteriores prácticas sobre este universo, con las efectividades):

```typescript
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
```
[Clase Combat (Línea 30) ⤴](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-ccolivares/blob/main/src/ejercicio-1/combat.ts)

Luego realizaremos el combate Pokémon, representado en la funcion `pokemonCombat()` la gran diferencia de este combate con todos los demás reside en que el Pokémon que comenzará atacando será el que posea mayor velocidad (como se define realmente en el juego), por lo tanto el combate lucirá de la siguiente forma:

```typescript
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

```
[Clase Combat (Línea 77) ⤴](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-ccolivares/blob/main/src/ejercicio-1/combat.ts)

Para continuar veremos las funciones del universo de `Genshin Impact`, en primer lugar veremos la función `genshinDamage()` que se verá influenciada por las efectividades de los elementos que mencionamos anteriormente:

```
EFECTOS GENSHIN: 
hydro -> pyro (x2 dmg)
pyro -> cryo (x2 dmg)
pyro -> hydro (x1.5 dmg)
cryo -> pyro (x1.5 dmg)

(leyenda: atacante -> defensor, dmg = daño)
```

Podemos ver la función `genshinDamage()` a continuación:

```typescript
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
```
[Clase Combat (Línea 173) ⤴](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-ccolivares/blob/main/src/ejercicio-1/combat.ts)

Ahora veremos la función `genshinCombat()` que simulará un combate básico como ya lo planteamos en el universo `Pokémon`:

```typescript
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
```
[Clase Combat (Línea 198) ⤴](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-ccolivares/blob/main/src/ejercicio-1/combat.ts)

Continuaremos viendo el par de funciones que conformarán al universo `Cytus`, en primer lugar veremos sus daños, que como anteriormente mencionamos se verán afectados por los BPM, si el atacante tiene mayores BPM que el defensor le hará el doble de daño:

```typescript
cytusDamage(cytus_A: Cytus, cytus_D: Cytus) : number {
  let damage: number = 0;
  
  if (cytus_A.getBpm() > cytus_D.getBpm()) {
    damage = 50 * (cytus_A.getAttack() / cytus_D.getDefense()) * 1.3;
  } else {
    damage = 50 * (cytus_A.getAttack() / cytus_D.getDefense());
  }

  return damage;
}
```
[Clase Combat (Línea 252) ⤴](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-ccolivares/blob/main/src/ejercicio-1/combat.ts)

Y su combate al igual que el de los demás universos será un combate básico, tomando en cuenta su función complementaria como ya mencionamos:

```typescript
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
```
[Clase Combat (Línea 272) ⤴](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-ccolivares/blob/main/src/ejercicio-1/combat.ts)

Para los combates entre universo desarrollaremos el par de funciones neutras, comenzaremos viendo la función que calculará los daños (los cuales serán la operación simple sin efectos) `neutralDamage()`:

```typescript
neutralDamage(attacker: Fighter, defender: Fighter) : number {
  return (50 * (attacker.getAttack() / defender.getDefense()));
}
```
[Clase Combat (Línea 326) ⤴](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-ccolivares/blob/main/src/ejercicio-1/combat.ts)

El combate será obviamente un combate básico tomando en cuenta los daños neutros, vemos como se desarrolla `neutralCombat()`:

```typescript
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
```
[Clase Combat (Línea 336) ⤴](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-ccolivares/blob/main/src/ejercicio-1/combat.ts)

Por último veremos el desarrollo de `start()` que simplemente llamará a las funciones necesarias según el tipo de objeto del que dispongamos, además de imprimir cabeceras para el combate, omitiremos el código de estas cabeceras para no llenar de informacion indiferente nuestro ejemplo:

```typescript
start() : string {
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
```
[Clase Combat (Línea 387) ⤴](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-ccolivares/blob/main/src/ejercicio-1/combat.ts)