const text = "abcdefghijklmnopqrstuvwxyz";
console.log(text.length);
console.log(text.charAt(0));
console.log(text.charCodeAt(0));
console.log(text.at(-1));
console.log(text.slice(0,5));
console.log(text.substring(0,5));
console.log(text.substr(6));
console.log(text.concat("ghjghjhgdjhghjg"));
console.log(text.trimStart());
console.log(text.trimEnd());
console.log(text.padStart(50,"*"));
console.log(text.padEnd(50,"*"));
console.log(text.repeat(2));
console.log(text.replace("a","m"));
console.log(text.split(""));
console.log(text.toLocaleUpperCase());
