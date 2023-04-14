// code your solution here

function saturdayFun(n="roller-skate"){
    return `This Saturday, I want to ${n}!`
}

function mondayWork(x="go to the office"){
 return `This Monday, I will ${x}.`
}


function wrapAdjective(c){

    return function(type="special"){
        return `You are ${c}${type}${c}!`
    }

}