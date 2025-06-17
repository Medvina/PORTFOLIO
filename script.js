// Fonction appelée directement depuis l'attribut "onsubmit" dans le HTML
function validerFormulaire() {
  let prenom =document.getElementById("prenom").value.trim();
  let nom = document.getElementById("nom").value.trim();
  let projet =document.getElementById("projet").value.trim();
  let message = document.getElementById("message").value.trim();
  let email = document.getElementById("email").value.trim();
  if (!prenom || !nom || !projet || !message) {
    alert("Veuillez remplir tous les champs du formulaire.");
    return false;
  }

  alert("Merci " + prenom + " " + nom + ", votre message a bien été envoyé !");
  return true;
}


let projets = document.getElementsByClassName("projet-item");

for (i = 0; i < projets.length; i++) {
  projets[i].onmouseover = function () {
    this.style.transform = "scale(1.05)";
    this.style.transition = "transform 0.3s ease-in-out";
    this.style.boxShadow = "0 0 15px rgba(0,0,0,0.2)";
  };

  projets[i].onmouseout = function () {
    this.style.transform = "scale(1)";
    this.style.boxShadow = "none";
  };
}