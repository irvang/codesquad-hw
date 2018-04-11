addClass("#animal", 'active');

//To test any of the two solutions, change its name to show, and the other to show2 (or whatever)

//====SOLUTION 2 - BETTER - easier to scale
//IIFE invoked and its return stored in variable show
let show = (function () {

	//Create an array to store ids
	let allIds = [];

	//Select all divs. It they have an id, store id in allIds
	document.querySelectorAll('div').forEach( item => {
		if (item.id) allIds.push(item.id);
	});

	return function (idToShow) {

		/* Iterate over allIds, if an id does not match the string we pass 
		(if item !== idToShow), remove the class; if it does match (else), 
		add .active to that element */
		allIds.forEach(item => {
			if (item !== idToShow) {
				removeClass('#' + item, 'active');
			} else {
				addClass('#' + idToShow, 'active');
			}
		});
	}
})();

//====SOLUTION 1 - not easily scalable
function show1(idToShow) {
	if (idToShow === 'animal') {
		addClass(`#${idToShow}`, 'active');
		removeClass('#vegetable', 'active');
		removeClass('#mineral', 'acitve');
	} else if (idToShow === 'vegetable') {
		addClass(`#vegetable`, 'active');
		removeClass('#animal', 'active');
		removeClass('#mineral', 'active');
	} else if (idToShow === 'mineral') {
		addClass(`#mineral`, 'active');
		removeClass('#animal', 'active');
		removeClass('#vegetable', 'active');
	}
}