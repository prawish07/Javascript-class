//HOF- Higher order function- jasma function bhitra function pass garne of funcion ko parameter ma
//function pass garne
let numbers = [1, 2, 3,6];
const doSquare = function () {
  let result = [];
  for (let v of numbers) {
    console.log("It give the square",v*v)
    console.log("Push gives the length of array",result.push(v*v ))//output-1,2,3,4
  }
  return result;
};
console.log("It calls the function and gives sqaure",doSquare());
const doCube = function () {
  let result = [];
  for (let v of numbers) {
    
    result.push(v*v*v )
  }
  return result;
};
console.log("It calls the function and gives cube",doCube());

const doSquareRoot = function () {
  let result = [];
  for (let v of numbers) {
    
    result.push(Math.sqrt(v) )
  }
  return result;
};
console.log("It calls the function and gives Square root",doSquareRoot());

//We can reduce the repeated code from above to optimize and use higher order function
const doSquare_HOF =(v)=> v*v;//arrow function ma single line code xa vane bracket nahalda huncha
const doCube_HOF =(v)=> v*v*v;
const doSquareRoot_HOF =(v)=> Math.sqrt(v)
const calculate=function(logic){
    let result_HOF=[]
    for(let v of numbers){
        result_HOF.push(logic(v))
    }
    return result_HOF

}
console.log("This sqaure from dynamic function",calculate(doSquare_HOF))
console.log("This cube from dynamic function",calculate(doCube_HOF))
console.log("This sqaure root from dynamic function",calculate(doSquareRoot_HOF))