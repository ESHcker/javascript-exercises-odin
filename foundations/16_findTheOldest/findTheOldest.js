const findTheOldest = function(people) {
    let oldestPerson = [{name: "", age: "0"}];
    for(let index = 0; index < people.length; index++){
        let ageOfPerson = getAgeOfPerson(
            people[index].yearOfBirth,
            people[index].yearOfDeath
        );
        if (ageOfPerson > oldestPerson[0].age){
            oldestPerson[0]= { name: people[index].name,
                age: ageOfPerson,
            };
              
        }
    }
    return oldestPerson[0];
}

function getAgeOfPerson(yearOfBirth, yearOfDeath){
    if(typeof yearOfDeath === "undefined")yearOfDeath = new Date().getFullYear();
    return yearOfDeath - yearOfBirth;
}


// Do not edit below this line
module.exports = findTheOldest;
