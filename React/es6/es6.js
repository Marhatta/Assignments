// let and const
//let is used to declare a block scope variable

let i = 1;
if(i===1){
    let i = 2;
    console.log(i); //output : 2
}
console.log(i); //output : 1
//If we used 'var' instead , the output to the above statement would be 2 

//Const cannot be redeclared and we cannot reassign a value
const num = 7;
try{
    num = 8;
} catch(e){
    console.log(e);
}
//output : TypeError: Assignment to constant variable.
//========================================================================

//Arrow Functions
//Alternative way to define a function 
//No need to bind this
const sayMyName = name => {
    console.log(name)
}

sayMyName('vishal');

//If multiple args
const describeMe = (name,age) => {
    console.log('Name is: '+ name , '\nAge is :' + age);
}

describeMe('vishal',22);
//=======================================================================
// Classes

class Dog {
    breed = 'boxer';
    bark = () =>{
        console.log('Bow');
    }
}

const dog = new Dog();
console.log('Breed is: '+dog.breed,'\nBarks like : ' + dog.bark());


//Inheritance
class AnotherDog extends Dog{
    gender = 'male'
}

const anotherDog = new AnotherDog();
console.log('Gender is : '+anotherDog.gender,'\nBarks like : '+anotherDog.bark());
//=========================================================================

//Spread and Rest Operator
//Both the operators are represented by ...
//Their use in a particular context is what differentiates them
//Spread - Pull elements out of an array or properties out of object
const array1 = [1,2,3];
const array2 = [...array1,4,5];
console.log(array1);
console.log(array2);

//Rest
const addNumbers = (...arguments) => {
    return arguments.reduce((current,total) => {
        return total+=current;
    })
}

console.log(addNumbers(1,2,3));
//=====================================================================
//Destructuring
//Helps access the the values of arrays and objects
const arr = [1,2,3];
const [x, , y] = arr;
console.log(x,y);


const obj = {
    name:'vishal',
    branch:'IT'
}

const {branch} = obj;
console.log(branch);
//====================================================================
