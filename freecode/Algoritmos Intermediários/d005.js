function spinalCase(str) {
    const regEx = /[A-Z]/g;
    let newStr = '';
    let controller = 0;
    for(let c in str) {
        if(c > 0) {
            if(regEx.exec(str[c]) || str[c] == ' ') {
                newStr += str.slice(controller, c) + '-'
                controller = c
            };
        };
    }
    console.log(newStr)
    return str;
};
  
spinalCase('This Is Spinal Tap');