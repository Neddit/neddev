import cmds from "./cmd";
var code = document.getElementById('code');
var resu = document.getElementById('res');
var sub = document.getElementById('sub');


function read() {
    let cmd = 'console.poo';
    let args = cmd.split(".");
    let a = args[0];
    if(!args[1]){
        resu.innerHTML="Error";
        break
    } 
    resu.innerHTML="YOOO";
}

