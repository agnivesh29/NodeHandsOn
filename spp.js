const funVar1 = function (a,b,c) {
    return a+b+c;
}

const funVar2 = (a,b,c) => {
    return a+b+c;
}

const funVar3 = (a,b,c) => a+b+c;

const funVar4 = a => a*a;

const funVar5 = () => Math.ceil(Math.random()*10);

result1 = funVar1(1,2,3);
console.log('result1 = '+result1);

result2 = funVar2(4,5,6);
console.log('result2 = '+result2);

result3 = funVar3(3,4,5);
console.log('result3 = '+result3);

result4 = funVar4(3);
console.log('result4 | square of '+3+' is '+ result4);

result5 = funVar5();
console.log('No arg function: '+result5);

/* Defining a function within an object */

const person = {
    name: 'Agni',
    age: 30,
    /* below approach does not work and is not able to read the property value */
    // greet: () => {
    //     console.log('Hi '+this.name);
    // }

    greet() {
        console.log('Hi '+this.name);
    }
}

person.greet();

/* Using arrays and map function */
const friends = ['Agni', 'Smith', 'Jack'];
for(let friend of friends )
    console.log('Hi '+ friend);

friendsMap = friends.map(function(myFriend) {
    return 'Welcome '+ myFriend;
});

anotherFriendsMap = friends.map(friend => {
    return 'Welcome advance '+friend;
})

console.log(friendsMap);
console.log(friends);
console.log(anotherFriendsMap);

/* spread and rest operator */
// spread operator extracts items in an array or object

const originalArr = ['a', 'b', 'c'];
const arrayUsingSpread = [...originalArr];

console.log(arrayUsingSpread);

const originalObject = {
    name: 'Agni',
    age: '30'
}

const objCreatedWithSpread = {...originalObject};
console.log(objCreatedWithSpread);

// rest operator merges the items into an array

const func = (...args) => {
    return args;
}

console.log(func(1,2,3));