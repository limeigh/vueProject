const KEY = 'goods'

export function getItem(){
	 return JSON.parse(localStorage.getItem(KEY) || '[]')
}

export function setItem(obj){
	var arr=JSON.parse(localStorage.getItem(KEY) || '[]')
	arr.push(obj)
	localStorage.setItem(KEY,JSON.stringify(arr))
}