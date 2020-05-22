// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    //console.log(contacts.reduce((x, y, i, arr) => y.firstName === name ? arr[i] : x, undefined))
    // console.log(contacts.reduce((x, y, i, arr) => y.firstName === name ? x.concat(arr[i]) : x, []))
    // console.log(contacts.filter(x => x.firstName === name))
    
    // const c = () => {
    //     for (let i = 0 ;i < contacts.length; i++){
    //         if (contacts[i].firstName === name) return i
    //     }
    //     return undefined
    // }
    // const cc = contacts[c()]

    let contact = contacts.find(x => x.firstName === name)

    return contact ? contact[prop] || "No such property" : "No such contact"
// Only change code above this line
}

console.log(lookUpProfile("Bob", "number"));
