const vetor = [1, 2, 33, 44, 55, 12, 34, 21];
const map = vetor.map(num => {
	if(num%2 == 0)
	{
		num = num * 4
		return num
	}
	else 
	{
		num = num * 3
		return num
	}
}
)

function ignore(ar)
{
	if (ar < 100)
	{
		return ar
	}
}

let nc = map.filter(ignore)

console.log(vetor)
console.log(map)
console.log(nc)