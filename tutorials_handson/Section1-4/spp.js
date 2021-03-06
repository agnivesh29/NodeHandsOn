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
console.log('');
console.log('*************** spread and rest operator ***************');
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

// destructuring - object and array
console.log('');
console.log('*************** destructuring - object and array ***************');
const personObj = {
    name: 'Agni',
    age: '30',
    dob: '17031989',
    mobile: '0456456456',
    education: {
        tenth: '80%',
        twelfth: '68%',
        grads: '70%' 
    }
}

const destructFunc = ({name, mobile, education}) => {
    console.log(name);
    console.log(mobile);
    console.log(education.tenth);
}

destructFunc(personObj);

// object initialisation using object destructuring
console.log('');
console.log('*************** object/array initialisation using object/array destructuring ***************');
const {name, age, education} = personObj
console.log('name: '+name);
console.log('age: '+age);
console.log('grad score: '+ education.grads);

// Arrays can also be destructured
const nameArray = ['Agni', 'Abi', 'John']
const [name1, name2] = nameArray;

console.log(name1, name2); // destructs element from array

/* Promise & async call in JavaScript */

// Using async call w/o using Promise object
console.log('');
console.log('*************** Using async call w/o using Promise object ***************');

const asyncFunc = callback => {
    //console.log('Inside async function');
    setTimeout(function() {
        callback('Callback from asyncFunc');
    }, 1000);
}

setTimeout(function(){
    console.log('Trigger function');
    asyncFunc(text => {
        console.log(text);
    })
}, 1000);

// Problem with above approach is as we have more async call that are part of dependency, the nested callback will go deeper and deeper

// Using a Promise object to resolve async call
console.log('');
console.log('*************** Using a Promise object to resolve async call ***************');

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('callback complete with a Promise object');
        }, 1500)
    });
    return promise;
}

setTimeout(() => {
    fetchData()
        .then(arg => {
            console.log(arg);
            return fetchData();            
        })
        .then(arg => {
            console.log(arg);
        });
}, 2000);

// Start of staging branch

  