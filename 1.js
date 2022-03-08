let func = (num = 0) => (num = num + 7);
console.log(func());

let be = (params) => params * 2;

// console.log((params) => params * 2);
console.log(be(22));

be = (str) => str[0].toUpperCase() + str.slice(1);
console.log(be('asdgdsfs'));

be = (str) => str.at(-1);
// OR
// be = (str) => str[(str.length - 1)]
console.log(be('gdsfhgdhdk'));
