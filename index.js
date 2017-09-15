const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

desturctivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}