//interface

var people= [
    { lastName: "Alberston", phone: "555-255-5555", email: "name.a@email.com" },
    { firstName: "Ringo", lastName: "Starter", phone: "555-455-5555", email: "ringo@email.com" },
    { firstName: "Courtney McKenzie", lastName: "", phone: "555-545-5555", email: "ringo@email" },
    { firstName: "", lastName: "Dave Flippin", phone: "555-226-5555", email: "" },
    { firstName: "Paul", lastName: "Allan", phone: "555-255-5555", email: "paul@email.com" },
    { phone: "555-555-5555", email: "george@email.com" },
    { firstName: "Jerry", phone: "555-355-5555", email: "jerry@email.com" },
    { firstName: "Sterling", lastName: "Loggins", email: "johnsemail.com" },
    { firstName: "George", lastName: "Harrold", phone: "555-555-5555", email: "george@email.com" },
    { firstName: "Mary", lastName: "Fallen", phone: "5551555555", email: "mary@email.com" },
    { firstName: "John", lastName: "Stalin", phone: "555-355-5555", email: "john@email.com" },
    { firstName: "Jim", lastName: "Onfire" }
    
];
function displayData(data) {
    data.map(person => {
      const {
        firstName = "",
        lastName = "",
        phone = "missing",
        email = "missing"
      } = person;
      const newPerson = {
        firstName,
        lastName,
        phone,
        email
      };
      console.log(newPerson);
      document.body.textContent=JSON.stringify(people, undefined, 2);
    });
  }
  displayData(people);

 
