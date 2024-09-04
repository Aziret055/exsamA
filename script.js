// function isPalindrome(str) {
// 	let isPalindrome = ''
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		isPalindrome += str[i].toLowerCase()
// 	}
// 	let strOne = str.toLowerCase().trim()
// 	let isPalindromeOne = isPalindrome.toLowerCase().trim()

// 	if (strOne == isPalindromeOne) {
// 		return true
// 	}
// 	return false
// }
// console.log(isPalindrome('popopopopop'))

// let obj = {
// 	id: 1,
// 	name: 'popopop'
// }
// function deepClone(object) {
// 	let clone = { ...object }
// 	return clone
// }
// console.log(deepClone(obj))

// function margtSortedArray(arr1, arr2) {
// 	const res = arr1.concat(arr2)
// 	return res.sort((a, b) => a - b)
// }
// console.log(margtSortedArray([1, 3, 5], [2, 4, 6]))

// function compressString(str) {
// 	let compressed = ''
// 	let count = 1
// 	for (let i = 1; i < str.length; i++) {
// 		if (str[i] === str[i - 1]) {
// 			count++
// 		} else {
// 			compressed += str[i - 1] + count
// 			count = 1
// 		}
// 	}
// 	compressed += str[str.length - 1] + count
// 	return compressed
// }

// console.log(compressString('aaabbc'))

// let user = {
// 	name: 'Alice',
// 	age: 25
// }
// function testUser(user) {
// 	return (user.age += user.name.length)
// }

// console.log(testUser(user))
