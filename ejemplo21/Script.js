function isPalindrome(str) {
    
    // s = 0, u = 1, g = 2, u = 3, s = 4
    //str = "sugus";
    let reversed = "";
    

    //  i = -1 , i >=0 , i--
    for (let i = (str.length - 1); i >= 0; i--) {
        
        //reversed += "sugus"
        reversed += str[i];
    }

    return (str === reversed);
}

console.log(isPalindrome("racecar"));