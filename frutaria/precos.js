	// Array de frutas
	var banana = {
		'cod': 12, 'desc': 'Banana', 'preco': 3.50, 'estoque': 45, 'foto': 'banana.png'
	}

	var laranja = {
		'cod': 15, 'desc': 'Laranja', 'preco': 5.00, 'estoque': 23, 'foto': 'laranja.png'
	}
	
	var uva = {
		'cod': 17, 'desc': 'Uva', 'preco': 8.00, 'estoque': 56, 'foto': 'uva.png'
	}
	
	var manga = {
			'cod': 18, 'desc': 'Manga', 'preco': 8.00, 'estoque': 67, 'foto': 'manga.png'
		}

	var pera = {
			'cod': 19, 'desc': 'Pera', 'preco': 12.00, 'estoque': 25, 'foto': 'pera.png'
		}

	var melancia = {
	'cod': 20, 'desc': 'Melancia', 'preco': 14.00, 'estoque': 89, 'foto': 'melancia.png'}

	var frutas = [banana, laranja, uva, manga]
	frutas.push(pera)
	frutas.push(melancia)

function valor_fruta () {
	
	//setas
	var fruta = document.getElementById('fruit_entry').value
	var res = document.getElementById('res')
	var prod = document.getElementById('tabela')
	var alert = document.getElementById('alert')


	
	//condicoes
	switch(fruta){
		case 'banana':
		// prod.innerText = 'Bananas custam $3,00'
		prod.innerHTML = `<div class='produtos'><img src='${frutas[0].foto}'><div id='desc'><ul><li>Cód. do produto: ${frutas[0].cod}</li><li>Descrição: ${frutas[0].desc}</li><li>Preço: R$${frutas[0].preco}</li><li>Estoque: ${frutas[0].estoque} UND</li></ul></div></div>`
		break;

		case 'laranja':
		prod.innerHTML = `<div class='produtos'><img src='${frutas[1].foto}'><div id='desc'><ul><li>Cód. do produto: ${frutas[1].cod}</li><li>Descrição: ${frutas[1].desc}</li><li>Preço: R$${frutas[1].preco}</li><li>Estoque: ${frutas[1].estoque} UND</li></ul></div></div>`
		break;

		case 'manga':
		prod.innerHTML = `<div class='produtos'><img src='${frutas[2].foto}'><div id='desc'><ul><li>Cód. do produto: ${frutas[2].cod}</li><li>Descrição: ${frutas[2].desc}</li><li>Preço: R$${frutas[2].preco}</li><li>Estoque: ${frutas[2].estoque} UND</li></ul></div></div>`
		res.innerHTML = 'Mangas custam $8,00 cada'
		break;
		
		case 'uva':
		prod.innerHTML = `<div class='produtos'><img src='${frutas[3].foto}'><div id='desc'><ul><li>Cód. do produto: ${frutas[3].cod}</li><li>Descrição: ${frutas[3].desc}</li><li>Preço: R$${frutas[3].preco}</li><li>Estoque: ${frutas[3].estoque} UND</li></ul></div></div>`
		res.innerHTML = 'Uvas custam $8,00'
		break;
		
		case 'pera':
			prod.innerHTML += `<div class='produtos'><img src='${frutas[4].foto}'><div id='desc'><ul><li>Cód. do produto: ${frutas[4].cod}</li><li>Descrição: ${frutas[4].desc}</li><li>Preço: R$${frutas[4].preco}</li><li>Estoque: ${frutas[4].estoque} UND</li></ul></div></div>`
			
				break;

		case 'melancia':
			prod.innerHTML += `<div class='produtos'><img src='${frutas[5].foto}'><div id='desc'><ul><li>Cód. do produto: ${frutas[5].cod}</li><li>Descrição: ${frutas[5].desc}</li><li>Preço: R$${frutas[5].preco}</li><li>Estoque: ${frutas[5].estoque} UND</li></ul></div></div>`
			break;



		default:
		alert.innerHTML = `<strong>${fruta}</strong> não encontrado.`
	}
}

function ao_iniciar(){
	var prod = document.getElementById('tabela')

	prod.innerHTML += `<div class='produtos'><img src='${frutas[4].foto}'><div id='desc'><ul><li>Cód. do produto: ${frutas[4].cod}</li><li>Descrição: ${frutas[4].desc}</li><li>Preço: R$${frutas[4].preco}</li><li>Estoque: ${frutas[4].estoque} UND</li></ul></div></div>`

	prod.innerHTML += `<div class='produtos'><img src='${frutas[5].foto}'><div id='desc'><ul><li>Cód. do produto: ${frutas[5].cod}</li><li>Descrição: ${frutas[5].desc}</li><li>Preço: R$${frutas[5].preco}</li><li>Estoque: ${frutas[5].estoque} UND</li></ul></div></div>`

	console.log(frutas)
}
