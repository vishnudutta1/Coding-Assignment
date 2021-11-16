function runProgram(input) {
    input = input.trim().split("\n");
    let t = +input[0];
    let line = 1;

    for(let i = 1; i <= t; i++){
        let n = +input[line++];
        console.log(findWays(n));
    }
}

function findWays(n){

    if(n == 0){
        return 1;
    }
    if(n < 0){
        return 0;
    }

    return findWays(n - 1) + findWays(n - 2) + findWays(n - 5);

}
  if (process.env.USERNAME === "Gaurav") {
    runProgram(`1
    5`);
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