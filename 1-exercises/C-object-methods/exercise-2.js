/*

   "myPets" is an object containing many animals and 
   their names. Use the appropriate "Object." static method to
   get an array of the names of each pet in the "myPets" object.

   Assign this to the "petNames" variables declared below.

*/

let myPets = {
  dog: "Rufus",
  cat: "Mr Fluffykins",
  tortoise: "Lord Voldetort",
  rabbit: "Bugs",
};

let petNames = [];
  /* todo */
  for (const [key, value] of objects.entries(myPets)) {
    petNames.push(value);
    
  }

  // DO NOT EDIT BELOW THIS LINE
  console.log(
    `Expected result: ["Rufus", "Mr Fluffykins", "Lord Voldetort", "Bugs"]. Actual result: ${petNames}`
  );
