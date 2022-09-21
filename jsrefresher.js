function callBack(aSring){
  setTimeout(() => {
    console.log(aSring);
  }, 2500);
}

setTimeout(callBack => {
  callBack("Helllo there");
}, 1500);

console.log("Planet");