//5.reduce-yesle large value lai reduce garera single value ma change garx
let marks=[12,13,15]
marks.reduce(function(prev,cur){
    console.log("Value from Reduce-Prev",prev)
    console.log("Value from reduce-Cur",cur)

    return prev + cur
})