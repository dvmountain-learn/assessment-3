

let parkButton = document.getElementById('recommend-park')
let showPark = document.getElementById('show-park')

let parks = ['Anniston Sports Complex', 'Benny Ray Park', 'Centennial Memorial Park', 
            'Constantine Park', 'Gunter Park', 'John L. Dunson Park', 'Norwood Park',
            'Noble Street Park', 'Pelham Heights Park', 'Zinn Park'
        ]
function recommendPark() {
	const random = Math.floor(Math.random() * parks.length)
    showPark.textContent = parks[random]
}

parkButton.addEventListener('click', recommendPark)