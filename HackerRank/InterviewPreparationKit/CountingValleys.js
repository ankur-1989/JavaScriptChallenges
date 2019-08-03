function countingValleys(n, s) {

    let valleys = 0;
    let altitude = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === 'U') {
            altitude += 1;
            if (altitude === 0) {
                valleys += 1;
            }
        } else {
            altitude -= 1;
        }
    }
    return valleys;
}