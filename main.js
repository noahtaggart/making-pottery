const buyClay = () => {
    const newPottery = {    }
    return newPottery
}
let pottery = buyClay()

const makePottery = (potObject) => {
    potObject.shape ='bowl'
    return potObject
}
let madeBowl = makePottery(pottery)

const bisqueFire = (potObject) => {
    potObject.readyForGlazing = true
    return potObject
}
let glazeReady = bisqueFire(pottery)

const glazePottery = (potObject) => {
    if (potObject.readyForGlazing === true) {
        potObject.glazing = 'Midnight Blue'
        return potObject
    } else {
        console.log('Make sure you bisque fire the pottery before you glaze it.')
    }
}
let glazedPot = glazePottery(pottery)

const finalFiring = (potObject, tempOfKilnNumber) => {
    if (tempOfKilnNumber > 1200) {
        potObject.cracked = true
    } else {
        potObject.cracked = false
    }
    return potObject
} 

const firedPottery1400 = finalFiring(pottery, 1200)
console.log(pottery)