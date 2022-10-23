setInterval(callBack, 1000)

function callBack(){
 let d = new Date();
 console.log(d.toLocaleTimeString());
}
