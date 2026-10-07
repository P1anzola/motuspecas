const WHATSAPP = "5500000000000"; // TROQUE pelo número da MOTUS, com DDI, sem + ou espaços.

const products = [
 {code:"214655",name:"Arranque Moto Titan 2004-150",application:"Titan 150",category:"Elétrica",price:78.93,featured:true},
 {code:"218878",name:"Relé Partida Titan 150/160",application:"Titan 150/160 • Biz 125 • Fan • XRE 190",category:"Elétrica",price:25.49,featured:true},
 {code:"229512",name:"Porta Escova Moto Titan/Bros/Fan 150-160",application:"Titan • Bros • Fan 150/160",category:"Elétrica",price:7.18,featured:true},
 {code:"229888",name:"Tubo Interno Moto Titan 150-160",application:"Titan 150/160",category:"Suspensão",price:38.93,featured:true},
 {code:"265928",name:"Pastilha de Freio Moto Bros 160/Twister/XRE190",application:"Bros 160 • Twister • XRE 190",category:"Freio",price:6.75},
 {code:"267299",name:"Kit Transmissão Titan 2015-160",application:"Titan 2015-160",category:"Transmissão",price:41.74},
 {code:"234636",name:"Porta Escova Moto Titan/Bros/Fan 150",application:"Titan • Bros • Fan 150",category:"Elétrica",price:11.35}
];

const money = v => v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const wa = msg => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
let cart=[];

function card(p){
 return `<article class="product">
   <div class="product-img">MP</div>
   <div class="product-body">
    <h3>${p.name}</h3>
    <div class="code">CÓDIGO: ${p.code}</div>
    <div class="code">${p.application}</div>
    <div class="price">${money(p.price)}</div>
    <button class="btn gold add" onclick="addToCart('${p.code}')">Adicionar ao pedido</button>
   </div>
 </article>`;
}
function render(list=products){
 document.querySelector("#products").innerHTML=list.map(card).join("") || '<p>Nenhum produto encontrado.</p>';
 document.querySelector("#featured").innerHTML=products.filter(p=>p.featured).map(card).join("");
}
function addToCart(code){
 const p=products.find(x=>x.code===code);
 const found=cart.find(x=>x.code===code);
 if(found) found.qty++; else cart.push({...p,qty:1});
 renderCart();
}
function renderCart(){
 document.querySelector("#cartCount").textContent=cart.reduce((s,p)=>s+p.qty,0);
 const box=document.querySelector("#cartItems");
 if(!cart.length){box.innerHTML='<p class="muted">Seu carrinho está vazio.</p>';document.querySelector("#total").textContent=money(0);return;}
 box.innerHTML=cart.map(p=>`<div class="cart-row"><span><strong>${p.qty}x</strong> ${p.name}<br><small>${p.code}</small></span><strong>${money(p.price*p.qty)}</strong></div>`).join("");
 document.querySelector("#total").textContent=money(cart.reduce((s,p)=>s+p.price*p.qty,0));
}
document.querySelector("#search").addEventListener("input",e=>{
 const q=e.target.value.toLowerCase();
 const c=document.querySelector("#category").value;
 render(products.filter(p=>(!q || `${p.name} ${p.application} ${p.code}`.toLowerCase().includes(q)) && (!c || p.category===c)));
});
document.querySelector("#category").addEventListener("change",()=>document.querySelector("#search").dispatchEvent(new Event("input")));
document.querySelector("#checkout").addEventListener("click",()=>{
 if(!cart.length)return alert("Adicione pelo menos uma peça ao pedido.");
 const lines=cart.map(p=>`${p.qty}x ${p.name} (cód. ${p.code}) - ${money(p.price*p.qty)}`).join("\n");
 const total=money(cart.reduce((s,p)=>s+p.price*p.qty,0));
 window.open(wa(`Olá, MOTUS PEÇAS! Quero fazer este pedido:\n\n${lines}\n\nTotal: ${total}`),"_blank");
});
document.querySelector("#heroWhats").href=wa("Olá, MOTUS PEÇAS! Gostaria de informações sobre peças.");
document.querySelector("#contactWhats").href=wa("Olá, MOTUS PEÇAS! Preciso de ajuda para encontrar uma peça.");
render();
