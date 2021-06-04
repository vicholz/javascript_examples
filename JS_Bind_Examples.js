// Bind - Connect function to another object (similar to overriding)

var person = {
   name: "Bob",
   getName: function (){
      return this.name;
   },
   clickHandler: function (){
      alert(this.name + " was clicked");
   }
}

var animal = {
   name: "NyanCat",
   getName: function (){
      return this.name;
   },
   clickHandler: function (){
      alert(this.name + " was clicked");
   }
}

var animalBoundToPersonGetNameFun = animal.getName.bind(person); // Bind/share the person object data with the animal.getName() function.
// Returns persons name instead of animals since 'this' object is also shared. This can be used to override the 'this' object for document elements with
// data that you need for that object: document.querySelector('.personElement').click(person.clickHandler.bind(person));
// When element .personElement is clicked the person.clickHandler function is run with the person object as the 'this' object instread of the element 'this'.
console.log(animalBoundToPersonGetNameFun());