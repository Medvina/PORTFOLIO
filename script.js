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
