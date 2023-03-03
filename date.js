    
//The module is a JS Object {}
//to export the whole object and bind it to 1 function
// module.exports = getDate;

//the object has Properties, so we can use Properties to bind it to more than 1 function
//here we bind it to getDate function:
module.exports.getDate = getDate;

function getDate() {
//get date 
let todayDate = new Date();

//date format options - https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
let dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

//call the localedatestring function and pass 2 arguments: Locale + Options:
let day = todayDate.toLocaleDateString("en-GB" , dateOptions);

return day;
}

//this is to bind it to getDay function. 
//Just in a different way, by using an anonymous function
//also you dont have to use mdule.exports - use simply exports
exports.getDay = function () {
    //get date 
    let todayDate = new Date();
    
    //date format options - https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
    let dateOptions = {
        weekday: "long",
    };
    
    //call the localedatestring function and pass 2 arguments: Locale + Options:
    let day = todayDate.toLocaleDateString("en-GB" , dateOptions);
    
    return day;
    };





//get day number ( 0 sunday to 6 saturday)
//var dayNumber = todayDate.getDay();  


//git change test