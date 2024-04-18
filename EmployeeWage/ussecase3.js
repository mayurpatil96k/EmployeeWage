const pr = Math.floor(Math.random() * 2);
function isparttime(test){
    if (test <= 0) {
        return "true";
    } else {
        return "false";
    }
}

function parttimewage(wage,hour){
    return wage*hour;
}