
const obscureCC = (cc) => {

    const digits = 4;                       // last 4 digits of cc 
    const numOfDots = cc.length - digits;   // number of dots to obscure the rest of the cc numbers
    const dots = "●".repeat(numOfDots);     // dots to repeat

    if (cc.length < 12 || cc.length > 16) {
        // if cc is less than 12 or more than 16 digits, return invalid cc message 
        return "Invalid Credit Card";
    } else {
        // if cc is 12 or 16 digits, return the obscured cc number 
        // ●●●●●●●●●●●●1234
        return `${dots}` + cc.slice(-4);
    }

}

module.exports = obscureCC;