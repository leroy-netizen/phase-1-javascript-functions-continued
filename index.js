//saturdayFun/
function saturdayFun(toDo = "roller-skate") {
  return `This Saturday, I want to ${toDo}!`;
}

saturdayFun("bathe my dog!");

// mondayWork/
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

// wrapAdjective/

function wrapAdjective(style = "||") {
  return function (innerParam = "special") {
    return `You are ${style}${innerParam}${style}!`;
  };
}
