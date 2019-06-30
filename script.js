//interface
var data = [
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
// data.map(val => <DesiredDataShape>{
//    firstName: val.firstName,
//     lastName: val.lastName,
//     phone: val.phone,
//     email: val.email
//   });
function displayData(options) {
    for (var i = 0; i < data.length; i++) {
        var allData = data[i];
        var user = {
            firstName: options.firstName,
            lastName: options.lastName,
            phone: options.phone,
            email: options.email
        };
        console.log("user: " + JSON.stringify(user));
        var firstName = options.firstName;
        var lastName = options.lastName;
        var phone = options.phone;
        var email = options.email;
        console.log("allData: " + JSON.stringify(allData));
        console.log("First Name: " + firstName, "Last Name: " + lastName, "Phone Number: " + phone, "email: " + email);
        return user;
    }
}
;
 document.body.textContent=JSON.stringify(data[0]);
