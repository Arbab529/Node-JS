
const add = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};
const mul = (a, b) => {
    return a * b;
};

// module.exports.addoper = add;
// module.exports.suboper = sub;
// module.exports.muloper = mul;

// Object Destructuring
const name = "Arbab Anjum";
module.exports = { add, sub, mul, name };