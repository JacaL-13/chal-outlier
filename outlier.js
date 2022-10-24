function outlier(array) {
	let evensArray = array.filter((num) => num % 2 === 0)
	let oddsArray = array.filter((num) => num % 2 !== 0)
	return evensArray.length < oddsArray.length ? +evensArray.join('') : +oddsArray.join('')
}

let test1 = [2, 4, 0, 100, 4, 11, 2602, 36]
let test2 = [160, 3, 1719, 19, 11, 13, -21]

console.log(outlier(test1))
console.log(outlier(test2))