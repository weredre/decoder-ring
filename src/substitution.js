// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const Alphabet = "abcdefghijklmnopqrstuvwxyz"
  function substitution(input, alphabet, encode = true) {
    result =''
    // your solution code here
    if (!input||!alphabet||alphabet.length<26) return false
    for (i of alphabet){
      let nums = 0
      for (comp of alphabet){
        if (comp === i)nums++
      }
      if(nums>1)return false
    }
    if (!encode){
      for (j of input){
        if (j==" "){result+=j;continue}
        index = alphabet.indexOf(j)
        result += Alphabet[index]
    }
    return result
  }
    for (j of input){
      if (j==" "){result+=j;continue}
      index = Alphabet.indexOf(j)
      result += alphabet[index]
    }
    return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
