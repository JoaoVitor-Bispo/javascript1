function convertToRoman(num) {
    const romans = {
        M: 1000,
        CM: 900,
        D: 500,
        CD:	400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let convert = '';
    for(let c in romans) {
        console.log(romans[c] % num);
        if(num >= romans[c]) {
            convert += c;
        };
    };
    // console.log(convert);
    return num;
};
   
convertToRoman(48);