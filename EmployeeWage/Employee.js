console.log("Welcome to Employee Wage Computation Program on Master Branch");
const pr = Math.floor(Math.random() * 2);
// const pr = 0

function attendance(prab){
    if (prab <= 0) {
        return "Present";
    } else {
        return "Absent";
    }
}

console.log(attendance(pr));
