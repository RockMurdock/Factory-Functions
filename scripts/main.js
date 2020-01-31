const factoryDoctorFunction = (docName, docSpecialty, docAddress) => {
    return {
        "name": docName,
        "specialty": docSpecialty,
        "address": docAddress
    }
}

const drSally = factoryDoctorFunction("Sally", "oncologist", "123 Main Street")
console.log(drSally)

const drPepper = factoryDoctorFunction("Pepper", "re-freshology", "123 Pepper Street")
console.log(drPepper)

const factoryDogFunction = (petName, petBreed) => {
    return {
        "name": petName,
        "breed": petBreed
    }

}
const bowWowKennels = []

const drMundo = factoryDogFunction("Dr.Mundo", "Schnauzer")
const poppy = factoryDogFunction("Poppy", "Chaweenie")
const olaf = factoryDogFunction("Olaf", "Giant Dachsund")

bowWowKennels.push(drMundo, poppy, olaf)
console.log("bowWowKennels", bowWowKennels)

/*Your job is to sign each of these promising young music stars to the appropriate label.

JumpStop Records works with Funk and Rap artists.
Chatten Records works with Country and Bluegrass artists.
Polar Records works with Pop artists.
Create an array for each of these record labels.

Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

Bruce Atikins is a Country artist and is 23 years old
Jensen Brown is a Pop artist and is 20 years old
Dre Funkz is a Funk artist and is 25 years old
Dusta Grimes is a Rap artist and is 21 years old
Bartholomew Danielson is a Bluegrass artist and is 23 years old
Avilee Dallas is a Country artist and is 19 years old
Austin Kinkaid is a Pop artist and is 22 years old
Loyoncé Branis is a Rap artist and is 27 years old
*/

const jumpStopRecords = []
const chattenRecords = []
const polarRecords = []

const createFunkArtist = (name, age) => {
    return {
        artist: name,
        age: age,
        genre: "Funk"
    }
}
const createRapArtist = (name, age) => {
    return {
        artist: name,
        age: age,
        genre: "Rap"
    }
}
const createCountryArtist = (name, age) => {
    return {
        artist: name,
        age: age,
        genre: "Country"
    }
}
const createBluegrassArtist = (name, age) => {
    return {
        artist: name,
        age: age,
        genre: "Bluegrass"
    }
}
const createPopArtist = (name, age) => {
    return {
        artist: name,
        age: age,
        genre: "Pop"
    }
}
const bruce = createCountryArtist("Bruce Atkins", 23)
const jensen = createPopArtist("Jensen Brown", 20)
const dre = createFunkArtist("Dre Funz", 25)
const dusta = createRapArtist("Dusta Grimes", 21)
const bartholomew = createBluegrassArtist("Bartholomew Danielson", 23)
const avilee = createCountryArtist("Avilee Dallas", 19)
const austin = createPopArtist("Austin Kinkaid", 22)
const loyonce = createRapArtist("Leyonce Branis", 27)

jumpStopRecords.push(dre, dusta, loyonce )
chattenRecords.push(bruce, bartholomew, avilee)
polarRecords.push(jensen, austin)

console.log(jumpStopRecords)
console.log(chattenRecords)
console.log(polarRecords)
