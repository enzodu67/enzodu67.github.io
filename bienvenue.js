var bienvenue = document.getElementById('bienvenue');
var prenom = "";
if (localStorage.getItem('prenom')) {
	prenom = localStorage.getItem('prenom');
} else {
	prenom = window.prompt("Quel est votre prénom ? ");
	localStorage.setItem('prenom', prenom);
}
bienvenue.innerHTML = "Bienvenue, " + prenom + " !";