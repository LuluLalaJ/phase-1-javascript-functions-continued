// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

const wrapAdjective = function(wrapper = "*") {
    return function(innerParam = 'special') {
        return `You are ${wrapper}${innerParam}${wrapper}!`
    }
}