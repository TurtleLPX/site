var message = "in global";
console.log("Global: message=" + message);

var a = function(){
  var message = "in a";
  console.log("a : message=" + message);

  var b = function(){
    console.log("b : message=" + message);
  }

  b();

}



a();