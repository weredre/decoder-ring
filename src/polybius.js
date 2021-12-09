// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const polybiusSquare=[
    ["a","f","l","q","v"],
    ["b","g","m","r","w"],
    ["c","h","n","s","x"],
    ["d","(i/j)","o","t","y"],
    ["e","k","p","u","z"],
  ]
  function polybius(input, encode = true) {
    // your solution code here
    if(!input) return false
    if (typeof(input)=="number")input.toString()
    let result = ""
    if(!encode){
      let count = 0
      let num1,num2 =0
      for (i of input)if(i!=" ")count++
      if (count%2==1)return false
      for (let i=0;i<input.length;i+=2){
        if(input[i]==" "){
         result+=" "
          i--
          continue
        }
        num1 = Number(input[i])
        num2= Number(input[i+1])
        result +=polybiusSquare[num1-1][num2-1];
        }
      return result
    }
    else{input = input.toLowerCase()
    for (i in input){
      if (input[i]===" "){ result += " ";continue;}
      polybiusSquare.find(row=>{
        let num1 = (polybiusSquare.indexOf(row)+1)
        row.find(letter=>{
          if (letter.includes(input[i])){
            let num2 = (row.indexOf(letter)+1)
            return result+=num1.toString()+num2.toString()
          }
          return
      })})
    }
    return result}
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
