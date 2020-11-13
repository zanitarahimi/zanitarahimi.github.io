document.getElementById('aboutli').addEventListener('click', treatAbout);
document.getElementById('projektetli').addEventListener('click', treatProjektet);
document.getElementById('contactli').addEventListener('click', treatContact);

function treatAbout() {
	document.getElementById('about').style.display = 'block';
	document.getElementById('projektet').style.display = 'none';
	document.getElementById('contact').style.display = 'none';
}
function treatProjektet() {
	document.getElementById('about').style.display = 'none';
	document.getElementById('projektet').style.display = 'block';
	document.getElementById('contact').style.display = 'none';
}
function treatContact() {
	document.getElementById('about').style.display = 'none';
	document.getElementById('projektet').style.display = 'none';
	document.getElementById('contact').style.display = 'block';
}

document.getElementById('lista').addEventListener('click',removePadding);

function removePadding(){
	document.getElementById('ballina').classList.remove('padding-top');
}