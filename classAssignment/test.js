let x  = [1,2,3,4]
console.log(x)
for (let i = 0; i < x.length; i++) {
    x.push(x.shift())
    console.log(i, x)
}
console.log(x)
console.log(x.reverse())