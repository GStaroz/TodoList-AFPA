// Fonction principale, ajoute une ligne a la liste. Utilisée par beaucoup des autres fonctions.
function addli ()
{ // on crée les elements html qui iront dans la liste

  var todo = saisi.value;
  var div1 = document.createElement("div");
  span = document.createElement("span");
  spantxt = document.createTextNode(todo);
  div2 = document.createElement("div");
  btnX = document.createElement("button");
  btnE =document.createElement("button");

  // On garde le contenu du li dans un tablo
  tablostorage.push(todo);
  console.log(tablostorage);

  // on assigne les attributs au éléments
  div1.className = 'li col-xs-8 div1'
  div2.className = 'div2 btn-group btn-group-sm col-xs-4'
  btnX.className = 'btn btn-danger'
  span.className = 'col-xs-12 li'
  btnE.className = 'btn btn-success'
  span.id = 's' + id;
  id++;
  console.log(span.id);
  btnX.textContent = 'X'
  btnE.textContent = 'Edith'
  btnE.onclick = piaf;
  btnX.onclick = suppression;
  span.onclick = rayer;

  //on attache les elements les uns aux autres
  list.appendChild(div1);
  list.appendChild(div2);
  div1.appendChild(span);
  span.appendChild(spantxt);
  div2.appendChild(btnE);
  div2.appendChild(btnX);
  saisi.value =''
}
// Event pour barre de saisie
saisi.addEventListener('keypress', function (event)
{
  if (event.keyCode == 13) {
    if (saisi.value !== '') {
      addli();
    }else {
      alert('champ vide !');
    }
  }})

// Event pour bouton OK
  btnok.addEventListener('click', function () {
    if (saisi.value !== '') {
      addli();
    }else {
      alert('champ vide !');
    }})


// Fonction sauvegarde, utilisé sur boutton "save"
btnSave.onclick = stockage;
function stockage() {
  localStorage.setItem('infos', JSON.stringify(tablostorage));
  location.reload();
}

// Fonction reconstruisant la page en fonction du stockage local.
function destockage() {
  if (data[0] !== null) {
    for (var i = 0; i < data.length; i++) {
      saisi.value = data[i];
      addli();}}}


// Fonction liée au boutton supprimer, efface la ligne correspondante.
function suppression() {
  var parent = this.parentNode;
  var oncle = parent.previousSibling;
  var cousin = oncle.firstChild.id[1]
  console.log(cousin);
  tablostorage.splice(cousin, 1);
  console.log(tablostorage);
  oncle.remove();
  parent.remove();
  idreset();
}

// Fonction servant a rayer un élément lors du clic
function rayer ()
{this.classList.toggle("complete");}

// Complexe fonction liée au boutton Edit, permet l'edition de la ligne de texte
// et son enregistrement dans les données locales.
function piaf()
{ var germain = this.parentNode.previousSibling.firstChild
  var r2r = document.createElement('input')
  r2r.type = 'text'
  r2r.className = 'form-control'
  r2r.id = 'hidninput'
  r2r.value = germain.textContent;
  germain.parentNode.replaceChild(r2r, germain);
  var hdn = document.getElementById('hidninput')
  hdn.focus();
  hdn.select();
  r2r.addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
      if (r2r.value !== '' && r2r.value !== null) {
        r2r.parentNode.replaceChild(germain, r2r);
        germain.textContent = r2r.value;
        tablostorage[germain.id[1]] = germain.textContent;
  }}})
  r2r.addEventListener('blur', function () {
    if (r2r.value !== '' && r2r.value !== null)
    {r2r.parentNode.replaceChild(germain, r2r);
     germain.textContent = r2r.value;
     tablostorage[germain.id[1]] = germain.textContent;
  }else {r2r.parentNode.replaceChild(germain, r2r);
    }})
  ;}

// Fonction necessaire pour réordonner les lignes de la liste après une suppression.
function idreset() {
var spans= document.querySelectorAll('span.li')
for (var i = 0; i < spans.length; i++) {
  spans[i].id = 's' + i
  console.log(spans[i].id);
}}

// code pour _utliser le storage local. Pour l'instant dans le HTML
// destockage()
// Event du botton "save", dans le HTML pour l'instant.
