//1.forEach 2.map 3.filter 4.reduce 5.sort all theese fucntion is used for array
//all these fuction are HOF

//1.forEach-
let num = [1, 2, 3, 4, 5];
num.forEach(function (v, i) {
  console.log("V give the value", v);
  console.log("I give the index", i);
});
//2.map- yesle data lai new data ma trasform garxa
// map gareko data array ma store huncha []
//map le original data kei change gardaina
let colors = ["red", "green", "blue"];
let transformData = num.map(function (c, i) {
  // return `<p>${c}</p>`
  return c * c;
});
console.log("Data from map function", transformData);
console.log("map le original data kei change gardaina", num);

//3.filter function-- array and object ma use huncha

//--ARRAY
let canVote = [23, 26, 28, 10, 6];
let voter = canVote.filter( (value)=> 
(value>=16?true
    :false
)
//   if (value >= 16) return true;
//   else return false;
  //condition lagaunu parxa filter use garne bela--true and false
  //condition true vayesi matra value array rakhxa [23,26,28] and false value rakhdaina
);
console.log("Data from filter function in ARRAY: eligible voters", voter);

//--OBJECT
let personInfo = [
  {
    name: "Ramesh",
    gender: "Male",
  },
  {
    name: "Ram",
    gender: "Male",
  },
  {
    name: "Riya",
    gender: "Female",
  },
];
const malePersonList=personInfo.filter((value,index)=>{
   return value.gender=="Male"?true
    :false
   
})
console.log("Data from filter function in OBJECT",malePersonList)


//4. redeuce -- multiple data single reduce garera single value change garna sakinxa
//.reduce-yesle large value lai reduce garera single value ma change garx
let marks=[12,13,15]
marks.reduce(function(prev,cur){
    console.log("Value from Reduce-Prev",prev)
    console.log("Value from reduce-Cur",cur)

    return prev + cur
})

