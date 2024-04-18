function wagecal(wage,days,hours){
    var final=0;
    while(days<=20 || hours <=160){
        final=final+hours*wage;
        days++;
        hours++;
    }
    return final;
}