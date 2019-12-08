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
console.log('result4 | square of '+3+' = '+ result4);

result5 = funVar5();
console.log('No arg function: '+result5);