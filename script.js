const WHATSAPP = "5527999802989"; // WhatsApp da MOTUS, com DDI, sem + ou espaços.

const products = [
  {code:"MSC41011",name:"AMORT MOTO NXR 125-150-160 BROS 15-XRE 190 17-20",application:"NXR 125 • NXR 150 • NXR 160 • BROS 15+ • XRE 190 17-20",category:"Suspensão",price:360,featured:true},
  {code:"CR22540M",name:"AMORT MOTO TITAN 2004-150 MOD ORIGINAL",application:"TITAN 150 2004-",category:"Suspensão",price:170,featured:true},
  {code:"CFAR02CR",name:"ARO RODA TO-TITAN TDS DIANT -18X160-",application:"Titan",category:"Suspensão",price:90},
  {code:"CFAR01CR",name:"ARO RODA TO-TITAN TDS TRAS -18X185-",application:"Titan",category:"Suspensão",price:90},
  {code:"ERX6BS",name:"BATERIA MOTO 6 AMP TITAN-FAN-BROS 150 XRE300 ERBS",application:"Titan • Fan • Bros 150 • XRE 300",category:"Elétrica",price:135,featured:true},
  {code:"5502",name:"BUCHA COROA MOTO TITAN 150 -CALCO- -NATURAL-",application:"Titan 150",category:"Transmissão",price:18},
  {code:"1102673",name:"CABO ACEL MOTO FAN 2009- 125",application:"Fan 125 2009-",category:"Cabos",price:18},
  {code:"9020830149",name:"CABO ACEL MOTO NXR-150 BROS 03-08 ES-KS-ESD",application:"Bros 150 03-08",category:"Cabos",price:18},
  {code:"1104245",name:"CABO ACEL MOTO NXR-160 BROS -A-",application:"Bros 160",category:"Cabos",price:18},
  {code:"121351",name:"CABO ACEL MOTO TITAN 04- 150",application:"Titan 150 04-",category:"Cabos",price:18},
  {code:"790811060383",name:"CABO ACEL MOTO TITAN 09- 150",application:"Titan 150 09-",category:"Cabos",price:18},
  {code:"1104472",name:"CABO ACEL MOTO TITAN 16- 160 FAN ESD SAHARA NOV -A",application:"Titan 160 • Fan 160",category:"Cabos",price:18},
  {code:"9020830253",name:"CABO ACEL MOTO TITAN-FAN 14- 150 -A-",application:"Titan 150 • Fan 150 14-",category:"Cabos",price:18},
  {code:"1210526",name:"CABO ACEL MOTO XTZ CROOSSER 150 -DUPLO-",application:"XTZ Crosser 150",category:"Cabos",price:18},
  {code:"1212007",name:"CABO ACEL MOTO YBR-125 FACTOR 2009-",application:"YBR 125 • Factor",category:"Cabos",price:18},
  {code:"1102679",name:"CABO EMB MOTO FAN 125 2009-",application:"Fan 125 2009-",category:"Cabos",price:18},
  {code:"790811060412",name:"CABO EMB MOTO TITAN 09-150 MIX",application:"Titan 150 Mix",category:"Cabos",price:18},
  {code:"902082090",name:"CABO EMB MOTO TITAN-FAN 150 2014-",application:"Titan 150 • Fan 150 14-",category:"Cabos",price:18},
  {code:"1210527",name:"CABO EMB MOTO XTZ 150 CROSSER 14-",application:"XTZ Crosser 150 14-",category:"Cabos",price:18},
  {code:"9020830156",name:"CABO EMB MOTO YBR-125 03-08 ED-EK FACTOR 09-",application:"YBR 125 • Factor",category:"Cabos",price:18},
  {code:"1100690",name:"CABO FREIO MOTO TITAN 2004- 150 KS-ES",application:"Titan 150 04-",category:"Cabos",price:18},
  {code:"790811060432",name:"CABO FREIO MOTO TITAN 2009- 150 KS-ES",application:"Titan 150 09-",category:"Cabos",price:18},
  {code:"1102689",name:"CABO VELOC MOTO FAN 125 2009-",application:"Fan 125 2009-",category:"Cabos",price:18},
  {code:"1100684",name:"CABO VELOC MOTO NXR-150 BROS ESD 06- BROS ES 13-15",application:"Bros 150",category:"Cabos",price:18},
  {code:"36300BC0CG04",name:"CABO VELOC MOTO TITAN 2000 - KS-NXR-125-150 09-",application:"Titan 2000 • NXR 125/150",category:"Cabos",price:18},
  {code:"122975",name:"CABO VELOC MOTO TITAN 2004- 150 FAN 150 ES",application:"Titan 150 • Fan 150",category:"Cabos",price:18},
  {code:"36300BC1CG",name:"CABO VELOC MOTO TITAN 2009- 150",application:"Titan 150 09-",category:"Cabos",price:18},
  {code:"1101017",name:"CORRENTE COMANDO TITAN 2004- 150",application:"Titan 150 04-",category:"Motor",price:30,featured:true},
  {code:"2051430",name:"FILTRO AR MOTO TITAN 00- FAN 125 04-08",application:"Titan • Fan 125",category:"Filtros",price:25},
  {code:"ARM4471B",name:"FILTRO AR MOTO TITAN 04- 150 MOD ORIG (REDONDO)",application:"Titan 150",category:"Filtros",price:14},
  {code:"ARM4461B",name:"FILTRO AR MOTO TITAN 09- 150-POP-FAN 125-BROS (QUADRADO)",application:"Titan 150 • Pop • Fan 125 • Bros",category:"Filtros",price:10},
  {code:"2051438",name:"FILTRO AR MOTO TITAN 150 14- FAN 125 14- TITAN 160",application:"Titan 150 • Fan 125 • Titan 160",category:"Filtros",price:15},
  {code:"S410210200204",name:"FILTRO COMB MOTO PEQUENO",application:"Aplicação conforme modelo",category:"Filtros",price:5},
  {code:"5835",name:"GUIDON MOTO TITAN 160 CROMADO 1.5MM C-PESO",application:"Titan 160",category:"Guidão",price:45,featured:true},
  {code:"CFGU97HCL",name:"GUIDON MOTO TITAN 2004- 150 ES-KS PAREDE 1.70MM",application:"Titan 150 2004-",category:"Guidão",price:28},
  {code:"41300BF0CG08",name:"KIT TRANSMISSAO TITAN 2004- 150",application:"Titan 150 2004-",category:"Transmissão",price:55,featured:true},
  {code:"71827",name:"KIT TRANSMISSAO TITAN 2004- 150",application:"Titan 150 2004-",category:"Transmissão",price:80},
  {code:"91177",name:"KIT TRANSMISSAO TITAN 2015- 160",application:"Titan 160 2015-",category:"Transmissão",price:80},
  {code:"41300BF0CG15",name:"KIT TRANSMISSAO TITAN 2015- 160",application:"Titan 160 2015-",category:"Transmissão",price:65},
  {code:"N1882",name:"PAST FREIO MOTO TITAN-FAN 160 2018- DIANT",application:"Titan 160 • Fan 160",category:"Freio",price:25,featured:true},
  {code:"44110DF0CG01",name:"PAST FREIO MOTO TITAN-FAN 160 2018- DIANT",application:"Titan 160 • Fan 160",category:"Freio",price:18},
  {code:"0302CP",name:"PATIM FREIO MOTO D-T TITAN 2000- BIZ 98-",application:"Titan 2000 • Biz 98-",category:"Freio",price:25},
  {code:"DFH00127",name:"PATIM FREIO MOTO D-T TITAN 2000- BIZ 98-",application:"Titan 2000 • Biz 98-",category:"Freio",price:25},
  {code:"DURA1127",name:"PATIM FREIO MOTO D-T TITAN 2000- BIZ 98-",application:"Titan 2000 • Biz 98-",category:"Freio",price:18},
  {code:"0320CP",name:"PATIM FREIO MOTO T XL-125-BIZ-BROS",application:"XL 125 • Biz • Bros",category:"Freio",price:25},
  {code:"1657",name:"PISCA SETA TITAN 2000- D-D T-E C-COXIM",application:"Titan 2000-",category:"Elétrica",price:15},
  {code:"1658",name:"PISCA SETA TITAN 2000- D-D T-D C-COXIM",application:"Titan 2000-",category:"Elétrica",price:15},
  {code:"4054",name:"RETROV MOTO TITAN 2000- MOD ORIG-",application:"Titan 2000-",category:"Acessórios",price:25},
  {code:"4298",name:"RETROV MOTO TITAN 2014- MOD ORIG-",application:"Titan 2014-",category:"Acessórios",price:28},
  {code:"6301Z",name:"ROLAM MOTO 6301 Z R DIANT CG-XL",application:"CG • XL",category:"Rolamentos",price:10},
  {code:"CW63012RS",name:"ROLAM MOTO 6301 Z R DIANT CG-XL",application:"CG • XL",category:"Rolamentos",price:10},
  {code:"CW63022RS",name:"ROLAM MOTO 6302 ZZ RT CG-XL125 LE",application:"CG • XL 125",category:"Rolamentos",price:10},
  {code:"1101906",name:"TORNEIRA GASOLINA TITAN 2004- 150 GP",application:"Titan 150 2004-",category:"Combustível",price:20},
  {code:"100398",name:"TUBO INTERNO MOTO TITAN 150-160",application:"Titan 150 • Titan 160",category:"Suspensão",price:60,featured:true},
  {code:"DP7EA9",name:"VELA MOTO TITAN 00- XR-CBX 00- NGK",application:"Titan • XR • CBX",category:"Motor",price:21},
  {code:"CPR8EA9",name:"VELA MOTO TITAN 2004- 150",application:"Titan 150 2004-",category:"Motor",price:30}
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
