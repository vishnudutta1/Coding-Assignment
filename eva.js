function runProgram(input) {
    input = input.trim().split("\n");
    let t = +input[0];
   console.log(t)

  var i = 1;
  //var j = 2;

for(var i = 1;i <t;i++){
  var k = +input[i];
  i++
  var arr = input[i].trim().split(" ").map(Number)
  i++
  console.log(k,arr)
}


  
    




}
  if (process.env.USERNAME === "Gaurav") {
    runProgram(`3
    3
    1 4 5 6 8 9
    5 
    1 2 6 7 8
    1
    2 3 4 5 6`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }