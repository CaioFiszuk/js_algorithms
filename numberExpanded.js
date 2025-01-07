function numberExpanded(number){
    return String(number).split("").join(" + ");
}

console.log(numberExpanded(268)); // 2 + 6 + 8