//bind
const bind_demo={
    fname:"mayur",
    lname:"patil",
    getfullname: function(){
        return this.fname + " " +this.lname;
    }
};

const getfname = bind_demo.getfullname;
const bindgetfname=  getfname.bind(bind_demo);
console.log(bindgetfname());

// call