const app = "I don't do much."
var kittens = ['Garfield', 'Tom', 'Milo']
function destructivelyAppendKitten(name) {
  kittens.unshift(name);
  return kittens;
}
