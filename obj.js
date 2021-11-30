// var hihi = require("./app.js");
// hihi();
// var person =
// {
//     firstName :"ha",
//     age :18,
//     say: function()
//     {
//         console.log("alo, "+ this.firstName + "tupi: "+ this.age);
//     }
// }
// person.say() ;

// console.log(person["firstName"]) ;

//     function Person(name , password)
//     {
//         this.name = name; 
//         this.password = password ;
//     }
//     Person.prototype.getName = function()
//     {
//         return this.name ;
//     }

//     Person.prototype.getPass = function()
//     {
//         return this.password ;
//     }

//     Person.prototype.getLevel = function()
//     {
//         return this.level ;
//     }
//     Person.prototype.level = "admim" ;


//     function User ()
//     {
        
//     }
//     User.prototype = new Person() ;
//     User.prototype.age = 18;


//     var person = new Person("NguyenBaHa" , "12436") ;
//    // console.log("Name: " + person.getName() +" Pass: "+person.getPass() + " Level: " + person.getLevel()) ;

//     var user = new User("NguyenBaHa" , "12436")
//     console.log("Name: " + user.getName() + " pass: "+ user.getPass() + " age: "+user.age);



    // Date.prototype.vnFormat = function()
    // {
    //     var year = this.getFullYear() ;
    //     var month = this.getMonth()+1 ;
    //     var date = this.getDate() ;
    //     return date +"/"+month + "/"+ year ;
    // }

    // var now  = new Date() ;
    // var tmp  = new Date(2016 ,1,07)
    // console.log(now.vnFormat() ) ;
    // console.log(tmp.vnFormat());

    // function changeByValue ( b)
    // {
    //     b = 2;
    //     return b ;
    // }
    // var a = 1;
    //  a = changeByValue(a) ;
    // console.log(a) ;

    // function changByRef(obj)
    // {
    //     obj.pro1  =- function()
    //     {

    //     } ;
    //     obj.newPro2 = {} ;
    //     obj.pro3 = 100;
    
    // }
    // var c = {} ;
    // c.pro1 = {} ;
    // c.hih = 100 ;
    // changByRef(c);
    // console.log(c) ;

//     var firstName ="Ha";

//   ( function( lastName)
//   {
//         console.log(lastName) ;
//   }("Hihii")) ;