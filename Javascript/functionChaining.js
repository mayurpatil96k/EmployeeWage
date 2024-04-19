const test = [1,2,3,4,5,6,7];
test.filter(x=>x%2==0).map(x=>x*2).forEach(function(num){
    console.log(num);
})