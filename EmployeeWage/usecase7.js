class employee{
    constructor(){}
    attendance(prab){
        if (prab <= 0) {
            return "Present";
        } else {
            return "Absent";
        }
    }
    dailywage(wage,hour){
        return wage*hour;
    }
    isparttime(test){
        if (test <= 0) {
            return "true";
        } else {
            return "false";
        }
    }
    
    parttimewage(wage,hour){
        return wage*hour;
    }
    ispresent(num){
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
    
    isparttime(choice){
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
    monthlyWage(wage,days){
        return wage*days;
    }
    wagecal(wage,days,hours){
        var final=0;
        while(days<=20 || hours <=160){
            final=final+hours*wage;
            days++;
            hours++;
        }
        return final;
    }
}
const demo = new employee();
demo.attendance(1);
demo.dailywage(100,8);
demo.isparttime(0);
