

//interface

interface DesiredDataShape {
    firstName?: string | 'N/A';
    lastName?: string | 'N/A';
    phone?: string | 'N/A';
    email?: string | 'N/A';

}

let data: DesiredDataShape[] = [
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
]


// data.map(val => <DesiredDataShape>{
//    firstName: val.firstName,
//     lastName: val.lastName,
//     phone: val.phone,
//     email: val.email
//   });

function displayData(options: DesiredDataShape): any {
     for(var i=0;i<data.length; i++){
        var allData=data[i]
    
    let user = {
        firstName: options.firstName,
        lastName: options.lastName,
        phone: options.phone,
        email: options.email
    };
    let firstName = options.firstName
    let lastName = options.lastName
    let phone = options.phone
    let email = options.email

// console.log(allData)
    console.log(
        "First Name: " + firstName,
        "Last Name: " + lastName,
        "Phone Number: " + phone,
        "email: " + email);
        
    return user;
    
     }
    
};

// Document.body.textContent=displayData(data[0]);


