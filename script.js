let lastScrollpos = window.pageYOffset;
let menuButtonCheck = document.querySelector(".menu-btn");
window.onscroll = function () {
	let currentScrollPos = window.pageYOffset;
	if (lastScrollpos > currentScrollPos) {
		document.getElementById("top-nav").style.top = "0";
		lastScrollpos = currentScrollPos;
		menuButtonCheck.checked = false;
	}
}

const getData = async () => {
	const allData = await fetch('https://jsonplaceholder.typicode.com/posts')
	const data = await allData.json();
	console.log(data[4].title)
	document.querySelector('#project-simplify').innerHTML = `${data[4].title}`
	document.querySelector('#desciption').innerHTML = `${data[4].body}`
}

getData()


function getFormValue(ev) {
	// DISABLE DEFAULT FORM SUBMIT ACTION
	ev.preventDefault();

	// PICK THE FORM REFERENCE
	const form = document.getElementById('form1');

	// GET ALL ELMENTS LIKE INPUT AND SELECT, YOU CAN ADD MANY MORE
	const allInputs = form.querySelectorAll('input,select');

	let formObj = {};

	// GET THE VALUES OF EACH FIELD
	allInputs.forEach(e => {

		// ALL KEY DEPENDS ON THE NAME IN THE ELEMENT
		const key = e.getAttribute('name');

		if (key) {
			formObj[key] = e.value;
		}

	});

	console.log(formObj);
}

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const heading = document.getElementById('simplify-heading')
const heading2 = document.getElementById('simplify-heading2')
const bgSimplify1 = document.getElementById('bg-simplify1')
const bgSimplify2 = document.getElementById('bg-simplify2')
const bgSimplify3 = document.getElementById('bg-simplify3')
const otherProjects = document.getElementById('other-projects')
const topNav = document.getElementById('top-nav')
let isBlack = false;

toggle.addEventListener('click', function () {
	console.log(this.classList.toggle('bi-brightness-high-fill'));
	if (isBlack) {
		body.style.background = '#f2f4fc';
		body.style.color = '#6b708d';
		body.style.transition = '2s';
		heading.style.color = '#292e47';
		heading2.style.color = '#6b708d';
		bgSimplify1.style.background = 'white';
		bgSimplify2.style.background = 'white';
		bgSimplify3.style.background = 'white';
		otherProjects.style.color = '#292e47';
		topNav.style.background = '#f2f4fc';
	} else {
		body.style.background = '#565656';
		body.style.color = 'white';
		body.style.transition = '2s';
		heading.style.color = 'white';
		heading2.style.color = '#ffc600';
		bgSimplify1.style.background = '#292e47';
		bgSimplify2.style.background = '#292e47';
		bgSimplify3.style.background = '#292e47';
		otherProjects.style.color = 'white';
		topNav.style.background = '#565656';
	}
	isBlack = !isBlack;
});

