var loki = require('lokijs')

db = new loki("Example")
var users = db.addCollection("users", { indices: ["email"] })

var odin = users.insert({ name: "odin", email: "soad@lokijs.org", age: 20 })
var thor = users.insert({ name: 'thor', email: 'thor.soap@lokijs.org', age: 25 });
var stan = users.insert({ name: 'stan', email: 'stan.soap@lokijs.org', age: 29 });
var oliver = users.insert({ name: 'oliver', email: 'oliver.soap@lokijs.org', age: 31 });
var hector = users.insert({ name: 'hector', email: 'hector.soap@lokijs.org', age: 15 });

var dv = users.addDynamicView('a_complex_view')
dv.applyWhere(function aCustomer(obj) {
    return obj.name.length < 7 && obj.age > 25;
})

// console.log(dv.data())
// users.insert({ name: "joe", age: 31 })
// console.log(dv.data())

// var result = users.where((obj) => obj.age > 25)

users.addTransform("progeny", [
    {
        type: 'find',
        value: {
            'age': { "$lte": 40 }
        }
    },
    {
        type: "simplesort",
        property: "age",
        desc: true
    }
])
var result = users.chain("progeny").data();
console.log(result)