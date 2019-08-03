function sockMerchant(n, ar) {
    let pair = 0;
 ar.sort((a,b) => a-b)
    let i = 0, j = 0;
    while (i < ar.length) {
        j = i + 1;
        if (ar[i] === ar[j]) {
              i += 2;
            pair += 1;
        } else {
                i += 1;
            }     
    }
    return pair; 
}
