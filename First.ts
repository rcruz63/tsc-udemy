var a = 'Hello Raul!!';
var b = 5;
var c = false;

var someArray: string[] = [];

b = someArray.push(a);
b = someArray.push(b as any);

console.log(b)