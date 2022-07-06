/**
 * count gifts.
 * @param  {string} letter a letter with a list of gifts.
 * @returns {object} an object with the gifts and quantity.
 */
const carta = 'bici   coche balón  _playstation bici coche peluche'

export default function listGifts(letter) {
  const borrado = '_'
 	let result = letter.trim().split(/\s+/).filter(item => !item.includes(borrado)).reduce((acc, gift) => {
		acc[gift] = (acc[gift] || 0) +1
		return acc;
	}, {});
 	return result;
}


const regalos = listGifts(carta)

console.log(regalos)