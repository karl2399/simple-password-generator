const characters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pw1El = document.getElementById("pw1")

let pw2El = document.getElementById("pw2")

for (let i = 0; i < 15; i++) {
    pw1El.textContent += characters[Math.floor(Math.random()*characters.length)]
}

for (let i = 0; i < 15; i++) {
    pw2El.textContent += characters[Math.floor(Math.random()*characters.length)]
}
// console.log(pw1El)
// console.log(pw2El)
// get characters 15 times using for loops
// insert it to pw1

// get characters 15 times using for loops
// insert it to pw2

function generatePasswords() {
    // toolTipEl.textContent = "Copy 📝"
    pw1El.textContent = ""
    pw2El.textContent = ""
   getPw1()
   getPw2()
   console.log("generating passwords...")
}

function getPw1() {
    for (let i = 0; i < 15; i++) {
        pw1El.textContent += characters[Math.floor(Math.random()*characters.length)]
    }
}

function getPw2() {
    for (let i = 0; i < 15; i++) {
        pw2El.textContent += characters[Math.floor(Math.random()*characters.length)]
    }
}

function copyPw1() {
    let copiedTxt1 = pw1El.textContent
    navigator.clipboard.writeText(copiedTxt1)
    let snackbarEl = document.getElementById("snackbar");
    snackbarEl.className = "show"
    setTimeout(function(){ snackbarEl.className = snackbarEl.className.replace("show", ""); }, 1500);
    
    console.log(copiedTxt1)
}

function copyPw2() {
    let copiedTxt2 = pw2El.textContent
    navigator.clipboard.writeText(copiedTxt2)
    let snackbarEl = document.getElementById("snackbar");
    snackbarEl.className = "show"
    setTimeout(function(){ snackbarEl.className = snackbarEl.className.replace("show", ""); }, 1500);

    console.log(copiedTxt2)
    
}

