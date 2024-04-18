function ispresent(num){
    switch (num) {
        case 0:
            return "Absent";
            break;
        case 1:
            return "Present";
            break;
    
        default:
            return "wrong choice"
            break;
    }
}

function isparttime(choice){
    switch(choice){
        case 0:
            return "true"
            break;
        case 1:
            return "false"
            break;
        default:
            return "Invalid input"
            break;
    }
}

console.log(ispresent(Math.floor(Math.random() * 2)));
console.log(isparttime(Math.floor(Math.random() * 2)));