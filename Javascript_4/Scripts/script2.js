//Opdracht1
const age = 17

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!")
}
else {
    console.log("Je krijgt geen korting");
}


//Opdracht2
const name = "Abraham"

if (name === "Bram" || name === "Sarah" || name === "Abraham") {
    console.log("Jij krijgt een gratis biertje!")
}
else {
    console.log("Je krijgt geen biertje");
}


//Opdracht3
const totalAmount = 100

if (totalAmount > 25 && totalAmount <= 50) {
    console.log("Jij krijgt gratis (vega)bitterballen! ");
}
else if (totalAmount > 50 && totalAmount < 100) {
    console.log("Je krijgt een gratis portie nachos");
}
else if (totalAmount >= 100) {
    console.log("Je krijgt een gratis fles champagne");
}
else {
    console.log("Je krijgt helemaal niks");
}