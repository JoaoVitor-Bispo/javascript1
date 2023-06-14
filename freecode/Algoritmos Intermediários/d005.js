function spinalCase(str) {
    const regEx = /[A-Z]/g;
    let newStr;
    let controller = 0
    for(let c in str) {
        if(c > 0) {
            if(regEx.exec(str[c])) {
            };
        };
    };
    return str;
};
  
spinalCase('ThisIsSpinalTap');