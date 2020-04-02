const single = 'single';
const double = "double";
const singleWithDouble = 'single "double"';
const doubleWithSingle = "double 'single'";
const backticksMultiple = `
    multiple
    string
`;
const backticksConcat = `${single} and ${double}`;


const err1 = single + ' and ' + double;
const err2 = `err`;
