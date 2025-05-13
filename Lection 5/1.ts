interface GameCharacter {
  name: string;
  move: () => string;
}

function isGameCharacter(value: unknown): value is GameCharacter {
  return (
    typeof value === 'object' &&
    value != null &&
    'name' in value &&
    typeof value.name === 'string' &&
    'move' in value &&
    typeof value.move === 'function'
  );
}

function processCharacter(value: unknown) {
  if (isGameCharacter(value)) {
    const { name, move } = value;
    return `${name} moves: ${move()}`;
  } else {
    return 'Not a game character!';
  }
}

const hero = { name: 'Hero', move: () => 'Runs forward!' };
const fake = { name: 'Dog', bark: () => 'Woof!' };

console.log(processCharacter(hero)); // "Hero moves: Runs forward!"
console.log(processCharacter(fake)); // "Not a game character!"

export {};
