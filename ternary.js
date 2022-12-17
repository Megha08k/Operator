const greeting = (person) =>{
    const name=person ? person.name : "stranger";
    return `hey ${name}`;
}

 console.log(greeting({name:"Megha"}));

 console.log(greeting(null));
