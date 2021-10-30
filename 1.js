function convertToYears(x,y) {
    if (!Number.isInteger(x)) {
        return x+" is integer";
    }
    else {
        return x*y;
    }
    

}
var x=0;
var y=0;
var hasil=convertToYears(x,y);
console.log("17 => "+convertToYears(17,365)+" days");
console.log("69 => "+convertToYears(69,365)+" days");
console.log("79 => "+convertToYears(79,365)+" days");

convertToYears("marwan",365);
console.log(convertToYears("lidya",365))

