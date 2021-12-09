// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
     input = input.toLowerCase()
    if(!shift||shift===0||shift>25||shift<-25){return false}
    // your solution code here
    const alphabet= `abcdefghijklmnopqrstuvwxyz`
    let newInput=""
    for(let i in input){
      let index = (alphabet.indexOf(input[i]))
      let calcIndex=(index,shift)=>{
        if(index+shift >25){return index+=shift-26}
        if(index+shift <0){return index+=shift+26}
        return index+=shift
      }
     if (!alphabet.includes(input[i])){newInput += input[i];}
      else{
        if (encode===true) newInput += alphabet[calcIndex(index,shift)]
      if (encode===false) newInput += alphabet[calcIndex(index,(-shift))]
      }
      if(alphabet.toUpperCase().includes(index[i]))continue
      }
    return newInput
  }

  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
