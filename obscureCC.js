const obscureCC = (cc) => {

    const digits = 4;                       // last 4 digits of cc 
    const numOfDots = cc.length - digits;   // number of dots to obscure the rest of the cc numbers
    const dots = "●".repeat(numOfDots);     // dots to repeat

    const inputCC = cc;
    const isNumeric = /^[0-9]+$/.test(inputCC);

    if ((!isNumeric) || (cc.length < 12 || cc.length > 16)) {
        return "Invalid Credit Card";
    }
    else {
        return `${dots}` + cc.slice(-4);
    }
}


module.exports = obscureCC;