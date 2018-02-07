function balancedParentheses(string) {
    // if 0 is returned, this means parentheses are in fact balanced
    return !string.split("").reduce(function(previous, char) {
        if previous < 0) {return previous; }
        if (char === "(") { return ++previous; }
        if (char === ")") { return --previous; }
        return previous;
    }, 0);
}