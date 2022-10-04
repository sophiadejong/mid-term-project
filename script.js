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
	  
	  if(key){
		formObj[key] = e.value;
	  } 
	  
	});
	
	console.log(formObj);
  }


  const toggle = document.getElementById('toggleDark');
  const body = document.querySelector('body');
  
  toggle.addEventListener('click', function(){
	  this.classList.toggle('bi-moon');
	  if(this.classList.toggle('bi-brightness-high-fill')){
		  body.style.background = 'pink';
		  body.style.color = 'black';
		  body.style.transition = '2s';
	  }else{
		  body.style.background = 'darkgrey';
		  body.style.color = 'white';
		  body.style.transition = '2s';
		//   h1.style.color = 'white';
	  }
  });



