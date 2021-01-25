const body = document.querySelector(".names");
const numberSelected = document.querySelector(".numberSelected")
const totalRateElem = document.querySelector(".totalRate")
let totalRate = 0;

body.addEventListener("click", function(evt) {
  
	if ("LI" === evt.target.nodeName) {

		const clickedOnName = evt.target;

		// add the selected class if it's not there 
		// OR
		// remove the selected class if it's there...
		clickedOnName.classList.toggle("selected");

		//  check how many names are selected... and put it on  the screen
		numberSelected.innerHTML = document.querySelectorAll(".names > li.selected").length;

		const currentRate = Number(clickedOnName.dataset.rate);

		if (clickedOnName.classList.contains("selected")){
			totalRate += currentRate;
		} else {
			totalRate -= currentRate;
		}

		if (clickedOnName.dataset.favourite_food) {
			alert(clickedOnName.dataset.favourite_food)
		} else {
			clickedOnName.dataset.favourite_food = prompt("What's you favorite food?")
		}


		totalRateElem.innerHTML = totalRate;

	}  
  
});