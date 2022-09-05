let motto = getMotto();
let count = getCount();


function getMotto() {
    return prompt("Please enter your favorite motto:")
}

function getCount() {
    return parseFloat(prompt("How many times would you like to see your motto?"))
}

function printMotto() {
    for (let i = 0; i < count; i++) {
        console.log(motto)
      }
}
printMotto();
