// for (let i=0;i<=3; i++){
//     console.log(i)
// }

const cities = ["Tokyo", "London", "Ktm"];

//For Loop
for (let i = 0; i < cities.length; i++) {
  console.log("From for Loop",cities[i]);
}

// types of for loop
// 1. forEach--only use this loop in array and not work for object
cities.forEach(function (v, i) {
  console.log("From forEach Loop",v);
});
//2. For of loop-- yesle array ma vayeko data ko value dincha

for(let city of cities){
    console.log("From for in loop for Array",city)
}
//string ma pani use huncha-

let detail="Prabesh";
for(let s of detail){
    console.log("From for of loop to String",s)
}
// jasma euta euta letter print huncha i.e
//  P
// r
// a
// b
// e
// s
// h

//3. for in loop-- jasle index value dinxa
for(let i in cities){
    console.log("From for in loop to array",i)
    console.log("From loop in to find valuein array",cities[i])
}

//object--yeslai for in loop le key dinxa but array lai index dinxa
const student={
    name:"abc",
    address:"ktm"
}
for(let s in student){
    console.log("From for in loop to Object",s)
    console.log("From loop in to find value in Object",student[s])
}

//in case of Object inside object
const student1={
    name:"Raj",
    address:{
        lat:1,
        long:2
    },
}
for(let s in student1){
    console.log("Object inside object",student1[s])
    let value=student1[s]
     if(typeof value==="object"){
        for(key in value)
        {
            console.log("Object inside object to find the value",value[key])
        }
     }
     else{
        console.log("Object inside object to find the value",value)
     }
   
}