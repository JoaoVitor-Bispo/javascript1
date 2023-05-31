//Verificar o final de uma string

function confirmEnding(str, target) {

    if(str.includes(target)) {

        let strConfirm = [];

        for(let c = 0; c < str.length; c++) {
            if(c >= str.search(target)) {
                strConfirm.push(str[c]);
            };
        };

        console.log(strConfirm.join(''));
        console.log(target);
        
        if(strConfirm.join('') === target) {
            return true;
        }
        else {
            return false;
        };
    }
    else {
        return false;
    };
};

confirmEnding("Congratulation", "on");