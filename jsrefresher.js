let user = {
    uName: "John Paul",
    age: 25,
    greet: function(){
        console.log(`hello ${this.uName}`);
    }
}

user.greet();