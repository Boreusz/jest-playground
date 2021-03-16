const ceaserCipher = (String, key) => {
  const template = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "y",
    "z",
  ];
  let splittedWords = String.split(" ");
  let words = splittedWords.map((word) =>
    word
      .split("")
      .map((letter) =>
        letter !== "." && letter !== "," && letter !== "!" && letter !== "?"
          ? parseInt(template.indexOf(letter))
          : letter
      )
  );
 let solution = words.map((word) => {
   return word.map((element) => {
        if (element !== "." && element !== "," && element !== "!" && element !== "?") {
          if(element +key > 24){
            return template[element + key -25];
          }
          return template[element + key];
        }
        return element
      }).join('');

  }).join(' ');

  return solution;
};

module.exports = ceaserCipher;
