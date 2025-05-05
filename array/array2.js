function reverseName(name){

    let arr = name.split("")
    let reverse = arr.reverse()
    let str = reverse.join("")

    return str 

}

var fname = "dev";
var reverseName = reverseName(fname)
console.log("Reverse name = ",reverseName);
