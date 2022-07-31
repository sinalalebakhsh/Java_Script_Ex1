
var person = {
    name: 'sina',
    family: 'lalenakhsh',
    age: 29,
    fullname: function () {
        return this.name + " " + this.family;
    }
};

console.log(person.fullname());
