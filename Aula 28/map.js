const vetor = [1000, 40, 340, 501, 500, 1093, 245, 21];
const map = vetor.map(num => {
	if(num > 500)
	{
		num = num - (num * 15/100)
		return num
	}
	else 
		return num
}
) 
console.log(vetor)
console.log(map)