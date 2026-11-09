const btnAdicionar=document.getElementById("btnAdicionar");
const listaCursos=document.getElementById("listaCursos");

btnAdicionar.addEventListener("click",()=>{
const titulo=document.getElementById("titulo").value.trim();
const descricao=document.getElementById("descricao").value.trim();
const imagem=document.getElementById("imagem").value.trim();

if(!titulo||!descricao||!imagem){
alert("Preencha todos os campos!");
return;
}

const item=document.createElement("div");
item.className="item";

const tituloItem=document.createElement("div");
tituloItem.className="titulo-item";
tituloItem.innerHTML=`<span>${titulo}</span><span>+</span>`;

const detalhes=document.createElement("div");
detalhes.className="detalhes";

detalhes.innerHTML=`<p>${descricao}</p><img src="${imagem}" alt="${titulo}">`;

tituloItem.onclick=()=>{
const aberto=detalhes.style.display==="block";
detalhes.style.display=aberto?"none":"block";
tituloItem.lastElementChild.textContent=aberto?"+":"−";
};

item.appendChild(tituloItem);
item.appendChild(detalhes);
listaCursos.prepend(item);

document.getElementById("titulo").value="";
document.getElementById("descricao").value="";
document.getElementById("imagem").value="";
});
