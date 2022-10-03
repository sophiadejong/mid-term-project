let lastScrollpos = window.pageYOffset;
let menuButtonCheck = document.querySelector(".menu-btn");
window.onscroll = function() {
	let currentScrollPos = window.pageYOffset;
	if (lastScrollpos > currentScrollPos) {
		document.getElementById("top-nav").style.top = "0";
	lastScrollpos = currentScrollPos;
	menuButtonCheck.checked = false;
}}

const getData = async () => {
	const allData = await fetch ('https://jsonplaceholder.typicode.com/posts') 
	const data = await allData.json();
	console.log(data[4].title)
	document.querySelector('#project-simplify').innerHTML = `${data[4].title}`	
	document.querySelector('#desciption').innerHTML = `${data[4].body}`	
}

getData()



