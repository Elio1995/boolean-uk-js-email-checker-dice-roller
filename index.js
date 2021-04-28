// const emails = ["eliomehmeti@yahoo.com", "elio123@gmail.com", "elio4546@yahoo.com", "elio1995@live.com", "elio2601@gmail.com"]
// const useremail = prompt(What is your email?)
// if(emails.contains(useremail)) {
// alert (`Your email is listed!`);
// alert (`You have access to the website.`);
// }
// else
// alert (`The email is not listed.`);

// EMAIL CHECKER
const emails = ["eliomehmeti@yahoo.com", "elio123@gmail.com", "elio4546@yahoo.com", "elio1995@live.com", "elio2601@gmail.com"]
const useremail = prompt(`What is your email?`)

for (const address of emails){
    if(useremail===address) alert(`Your email is listed. You will have access to the programme.` + " " + useremail)
    else alert(`Your email is not listed. You will not have access.`)
}

// DICE ROLLER 

let b = 0
let randomNumber = Math.floor(Math.random()*7)
for (let a=0, a < 5; a++){
    let playeruser = Math.floor(Math.random()*7)
    let computeruser = Math.floor(Math.random()*7)
    console.log(computeruser)
    if (computeruser > playeruser){
        j + 1
    }
}

if (a >= 2){alert(`Congratulations, you won`)} 
else(`Game over!`)
}