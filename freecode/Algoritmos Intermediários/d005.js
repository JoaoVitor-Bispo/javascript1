function spinalCase(str) {
    const regEx = /[A-Z]/g;
    for(let c in str) {
        if(c > 0) {
            if(regEx.exec(str[c])) {
                console.log(str[c - 1])
            };
        };
    };
    // console.log(str);
    return str;
};
  
spinalCase('This Is Spinal Tap');