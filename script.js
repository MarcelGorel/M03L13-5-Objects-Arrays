//Deel 1 Objecten:
//1.Maak een object genaamd person.
//2.person heeft de volgende key-value pairs / properties: name en age. Vul hier je eigen naam en leeftijd in.
let person = {
  name: 'Marcel',
  age: 39,
  evaluations: [7, 10, 9]
};
//3.Gebruik console.log(person) en run je JavaScript programma, om je object te loggen.
console.log(person);
//4.Log alleen de value van de naam, door middel van de key name
console.log(person.name);
//5.Log alleen de leeftijd age
console.log(person.age)
//6.Gebruik de dot-notation en de bracket-notation voor het loggen van de bovenstaande 2 properties
person.name = 'Marcel';
person.age = 39;
person['name'] = 'Marcel';
person['age'] = 39;
console.log(person);
/*7.Maak nog een laatste key-value pair. De key is evaluations, de value [7,
10, 9]. Dit zijn de cijfers die je hebt gehaald afgelopen jaar.*/
console.log('de key aan object toegevoegd')
//8.Log alleen de property evaluations . Wat is de waarde?
console.log(person.evaluations);
console.log('[7, 10, 9]');


//Deel 2 Arrays:
//1.Maak een nieuwe variabele met een lege array [].
//let selectedColors = [];

//2.Vul deze array met minstens 3 verschillende kleuren, in de vorm van strings Bijvoorbeeld: "groen", "blauw", "rood".
let selectedColors = ["green", "blue", "red"];

//3.Log je nieuwe array naar de console.
console.log(selectedColors);

//4.Log de lengte van je array naar de console. Gebruik array.length
console.log(selectedColors.length);
//5.Log het eerste element van je array naar de console, dus in ons voorbeeld: "groen".
console.log(selectedColors[0]);
//6.Log het laatste element van je array naar de console, dus in ons voorbeeld: "rood". Ga ervan uit dat je niet weet hoeveel elementen er in de array gaan zitten. array[3] gaat dus niet de juist oplossing zijn als je straks 5 elementen in de array hebt.
console.log(selectedColors[2]);
//7.Voeg een 4de element toe aan je array met de push method. array.push() Resultaat: ['groen, 'blauw, 'rood', 'geel']
selectedColors[3] = "yellow";
//8.Voeg een cijfer toe aan je array met de push methode Resultaat: ['groen, 'blauw, 'rood', 'geel', 5]
selectedColors[4] = 4;
//9.Voeg een object toe aan je array met de push methode. Het object ziet er zo uit: {greeting: "hi ik ben een object"} Resultaat: ['groen, 'blauw, 'rood', 'geel', 5, {greeting: "Hi ik ben een object"} ]
selectedColors[5] = { greeting: "Hi ik ben een object" };
//10.Log alleen de begroeting van het object (het laatste element), naar de console.
console.log(selectedColors[5]);

//Deel 3: Bekijk een "real-life" object

//Objecten in JavaScript kunnen worden vergeleken met objecten in het echte leven. Daarom gaan we nu een opdracht doen met een "echt" object. We hebben 3 katten-soorten voor je in een array gestopt. Hieronder vind je een array met 3 kattenrassen en hun specificaties.

//Array met kattenrassen
const catBreeds = [{
  name: "Abyssinian",
  description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
  dog_friendly: 4,
  energy_level: 5,
  life_span: "14 - 15",
  origin: "Egypt",
  temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
  wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
  food: {
    favourite_food: "fish",
    medium_liked_food: "dried fruits",
    disliked_food: "walnuts"
  }
},
{
  name: "Aegean",
  description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
  dog_friendly: 4,
  energy_level: 53,
  life_span: "9- 12",
  origin: "Greece",
  temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
  wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
  food: {
    favourite_food: "tuna",
    medium_liked_food: "canned food",
    disliked_food: "all fruits"
  }
},
{
  name: "American Bobtail",
  description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
  dog_friendly: 5,
  energy_level: 3,
  life_span: "11 - 15",
  origin: "United States",
  temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
  wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
  food: {
    favourite_food: "meaty things",
    medium_liked_food: "tuna",
    disliked_food: "canned food"
  }
}
]
/*Gebruik bij elke stap een console.log("omschrijving van het object", hierjouwoplossing) Bijvoorbeeld console.log("Herkomst
kat 1:", catBreeds[0].origin)*/

//1.Log de naam van het laatste kattenras. Resultaat: American Bobtail
console.log("Naam van het laatste kattenras:", catBreeds[2].name);
//2.Log de energy levels van de eerste kat. Resultaat: 5
console.log("Energy levels van de eerste kat:", catBreeds[0].energy_level);
//3.Log het eerste temperament van de temperamenten van de tweede kat. Resultaat: Affectionate
console.log("Het eerste temperament van de temperamenten van de tweede kat:", catBreeds[1].temperament[0]);
//4.Log het laatst temperament van de temperamenten van de derde kat. Resultaat: Sensitive
console.log("Het laatst temperament van de temperamenten van de derde kat:", catBreeds[2].temperament[4]);
//5.Log het favoriete voedsel van de derde kat. Resultaat: meaty things
console.log("Het favoriete voedsel van de derde kat:", catBreeds[2].food.favourite_food);