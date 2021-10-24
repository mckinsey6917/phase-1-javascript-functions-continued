// Your code here

// function razzle() {
//     console.log("You've been razzled!");
// }
// razzle();

// function razzle(lawyer = "Billy", target= "'em") {
//     console.log (`${lawyer} razzle-dazzles ${target}!`);
// }
// razzle();
// razzle("Methuselah", "T'challah");

function saturdayFun(activity = "roller-skate"){
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun();

function mondayWork (object = "go to the office") {
    return (`This Monday, I will ${object}.`)
}

mondayWork()

function wrapAdjective(style = "*") {
    return function (adjective = "special") {
    return `You are ${style}${adjective}${style}!`
}
}