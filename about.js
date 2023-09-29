console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('The form has been submitted successfully.')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let duckImage = document.getElementById('rubber-duck')
duckImage.addEventListener('mouseover', (event) => {
	alert('Give the user a compliment.')
})



