const WHATSAPP = "5527999802989";

const products = [
  {code:"MSC41011",name:"AMORT MOTO NXR 125-150-160 BROS 15- XRE 190 17-20",application:"NXR 125 • NXR 150 • NXR 160 • BROS 15+ • XRE 190 17-20",category:"Suspensão",brand:"COFAP",price:360,image:"assets/MSC41011.jpg",featured:true},
  {code:"CR22540M",name:"AMORT MOTO TITAN 2004-150 MOD ORIG",application:"Titan 150 2004-",category:"Suspensão",brand:"COFAP",price:170,image:"assets/CR22540M.jpg",featured:true},
  {code:"CFAR02CR",name:"ARO RODA TO-TITAN TDS DIANT -18X160-",application:"Titan",category:"Suspensão",brand:"CROMOFORTE",price:90,image:"assets/CFAR02CR.jpg",featured:true},
  {code:"CFAR01CR",name:"ARO RODA TO-TITAN TDS TRAS -18X185-",application:"Titan",category:"Suspensão",brand:"CROMOFORTE",price:90,image:"assets/CFAR01CR.jpg",featured:true},
  {code:"ERX6BS",name:"BATERIA MOTO 6 AMP TITAN-FAN-BROS 150 XRE300 ERBS",application:"Titan • Fan • Bros 150 • XRE 300",category:"Elétrica",brand:"ERBS",price:135,image:"assets/ERX6BS.jpg",featured:true},
  {code:"5502",name:"BUCHA COROA MOTO TITAN 150 -CALCO- -NATURAL-",application:"Titan 150",category:"Transmissão",brand:"CONTROL SEALS",price:18,image:"assets/5502.jpg"},
  {code:"1102673",name:"CABO ACEL MOTO FAN 2009- 125",application:"Fan 125 2009-",category:"Cabos",brand:"KCABOS",price:18,image:"assets/1102673.jpg"},
  {code:"9020830149",name:"CABO ACEL MOTO NXR-150 BROS 03-08 ES-KS-ESD",application:"Bros 150 03-08",category:"Cabos",brand:"CONTROLFLEX",price:18,image:"assets/9020830149.jpg"},
  {code:"1104245",name:"CABO ACEL MOTO NXR-160 BROS -A-",application:"Bros 160",category:"Cabos",brand:"KCABOS",price:18,image:"assets/1104245.jpg"},
  {code:"121351",name:"CABO ACEL MOTO TITAN 04- 150",application:"Titan 150 04-",category:"Cabos",brand:"IRON",price:18,image:"assets/121351.jpg"},
  {code:"790811060383",name:"CABO ACEL MOTO TITAN 09- 150",application:"Titan 150 09-",category:"Cabos",brand:"SOTHIS",price:18,image:"assets/790811060383.jpg"},
  {code:"1104472",name:"CABO ACEL MOTO TITAN 16- 160 FAN ESD SAHARA NOV -A",application:"Titan 160 • Fan 160",category:"Cabos",brand:"KCABOS",price:18,image:"assets/1104472.jpg"},
  {code:"9020830253",name:"CABO ACEL MOTO TITAN-FAN 14- 150 -A-",application:"Titan 150 • Fan 150 14-",category:"Cabos",brand:"CONTROLFLEX",price:18,image:"assets/9020830253.jpg"},
  {code:"1210526",name:"CABO ACEL MOTO XTZ CROSSER 150 -DUPLO-",application:"XTZ Crosser 150",category:"Cabos",brand:"KCABOS",price:18,image:"assets/1210526.jpg"},
  {code:"1212007",name:"CABO ACEL MOTO YBR-125 FACTOR 2009-",application:"YBR 125 • Factor",category:"Cabos",brand:"KCABOS",price:18,image:"assets/1212007.jpg"},
  {code:"1102679",name:"CABO EMB MOTO FAN 125 2009-",application:"Fan 125 2009-",category:"Cabos",brand:"KCABOS",price:18,image:"assets/1102679.jpg"},
  {code:"790811060412",name:"CABO EMB MOTO TITAN 09-150 MIX",application:"Titan 150 Mix",category:"Cabos",brand:"SOTHIS",price:18,image:"assets/790811060412.jpg"},
  {code:"902082090",name:"CABO EMB MOTO TITAN-FAN 150 2014-",application:"Titan 150 • Fan 150 14-",category:"Cabos",brand:"MAGNETRON",price:18,image:"assets/902082090.jpg"},
  {code:"1210527",name:"CABO EMB MOTO XTZ 150 CROSSER 14-",application:"XTZ Crosser 150 14-",category:"Cabos",brand:"KCABOS",price:18,image:"assets/1210527.jpg"},
  {code:"9020830156",name:"CABO EMB MOTO YBR-125 03-08 ED-EK FACTOR 09-",application:"YBR 125 • Factor",category:"Cabos",brand:"CONTROLFLEX",price:18,image:"assets/9020830156.jpg"},
  {code:"1100690",name:"CABO FREIO MOTO TITAN 2004- 150 KS-ES",application:"Titan 150 04-",category:"Cabos",brand:"KCABOS",price:18,image:"assets/1100690.jpg"},
  {code:"790811060432",name:"CABO FREIO MOTO TITAN 2009- 150 KS-ES",application:"Titan 150 09-",category:"Cabos",brand:"SOTHIS",price:18,image:"assets/790811060432.jpg"},
  {code:"1102689",name:"CABO VELOC MOTO FAN 125 2009-",application:"Fan 125 2009-",category:"Cabos",brand:"KCABOS",price:18,image:"assets/1102689.jpg"},
  {code:"1100684",name:"CABO VELOC MOTO NXR-150 BROS ESD 06- BROS ES 13-15",application:"Bros 150",category:"Cabos",brand:"KCABOS",price:18,image:"assets/1100684.jpg"},
  {code:"36300BC0CG04",name:"CABO VELOC MOTO TITAN 2000 - KS-NXR-125-150 09-",application:"Titan 2000 • NXR 125/150",category:"Cabos",brand:"SMARTFOX",price:18,image:"assets/36300BC0CG04.jpg"},
  {code:"122975",name:"CABO VELOC MOTO TITAN 2004- 150 FAN 150 ES",application:"Titan 150 • Fan 150",category:"Cabos",brand:"IRON",price:18,image:"assets/122975.jpg"},
  {code:"36300BC1CG",name:"CABO VELOC MOTO TITAN 2009- 150",application:"Titan 150 09-",category:"Cabos",brand:"SMARTFOX",price:18,image:"assets/36300BC1CG.jpg"},
  {code:"1101017",name:"CORRENTE COMANDO TITAN 2004- 150",application:"Titan 150 04-",category:"Motor",brand:"WW3",price:30,image:"assets/1101017.jpg",featured:true},
  {code:"2051430",name:"FILTRO AR MOTO TITAN 00- FAN 125 04-08",application:"Titan • Fan 125",category:"Filtros",brand:"FILTRAN",price:25,image:"assets/2051430.jpg"},
  {code:"ARM4471B",name:"FILTRO AR MOTO TITAN 04- 150 MOD ORIG (REDONDO)",application:"Titan 150",category:"Filtros",brand:"TECFIL",price:14,image:"assets/ARM4471B.jpg"},
  {code:"ARM4461B",name:"FILTRO AR MOTO TITAN 09- 150-POP-FAN 125-BROS (QUADRADO)",application:"Titan 150 • Pop • Fan 125 • Bros",category:"Filtros",brand:"TECFIL",price:10,image:"assets/ARM4461B.jpg"},
  {code:"2051438",name:"FILTRO AR MOTO TITAN 150 14- FAN 125 14- TITAN 160",application:"Titan 150 • Fan 125 • Titan 160",category:"Filtros",brand:"FILTRAN",price:15,image:"assets/2051438.jpg"},
  {code:"S410210202003",name:"FILTRO COMB MOTO PEQUENO",application:"Aplicação conforme modelo",category:"Filtros",brand:"VEDAMOTORS",price:5,image:"assets/S410210202003.jpg"},
  {code:"5835",name:"GUIDON MOTO TITAN 160 CROMADO 1.5MM C-PESO",application:"Titan 160",category:"Guidão",brand:"AURORENSE",price:45,image:"assets/5835.jpg",featured:true},
  {code:"CFGU97HCL",name:"GUIDON MOTO TITAN 2004- 150 ES-KS PAREDE 1.70MM",application:"Titan 150 2004-",category:"Guidão",brand:"CROMOFORTE",price:28,image:"assets/CFGU97HCL.jpg"},
  {code:"41300BF0CG08",name:"KIT TRANSMISSAO TITAN 2004- 150",application:"Titan 150 2004-",category:"Transmissão",brand:"SMARTFOX",price:55,image:"assets/41300BF0CG08.jpg",featured:true},
  {code:"71827",name:"KIT TRANSMISSAO TITAN 2004- 150",application:"Titan 150 2004-",category:"Transmissão",brand:"RIFFEL",price:80,image:"assets/71827.jpg"},
  {code:"91177",name:"KIT TRANSMISSAO TITAN 2015- 160",application:"Titan 160 2015-",category:"Transmissão",brand:"RIFFEL",price:80,image:"assets/91177.jpg"},
  {code:"41300BF0CG15",name:"KIT TRANSMISSAO TITAN 2015- 160",application:"Titan 160 2015-",category:"Transmissão",brand:"SMARTFOX",price:65,image:"assets/41300BF0CG15.jpg",featured:true},
  {code:"N1882",name:"PAST FREIO MOTO TITAN-FAN 160 2018- DIANT",application:"Titan 160 • Fan 160",category:"Freio",brand:"COBREQ",price:25,image:"assets/N1882.jpg",featured:true},
  {code:"44110DF0CG01",name:"PAST FREIO MOTO TITAN-FAN 160 2018- DIANT",application:"Titan 160 • Fan 160",category:"Freio",brand:"SMARTFOX",price:18,image:"assets/44110DF0CG01.jpg"},
  {code:"0302CP",name:"PATIM FREIO MOTO D-T TITAN 2000- BIZ 98-",application:"Titan 2000 • Biz 98-",category:"Freio",brand:"COBREQ",price:25,image:"assets/0302CP.jpg"},
  {code:"DFH00127",name:"PATIM FREIO MOTO D-T TITAN 2000- BIZ 98-",application:"Titan 2000 • Biz 98-",category:"Freio",brand:"DIAFRAG",price:25,image:"assets/DFH00127.jpg"},
  {code:"DURA1127",name:"PATIM FREIO MOTO D-T TITAN 2000- BIZ 98-",application:"Titan 2000 • Biz 98-",category:"Freio",brand:"DURABREAK",price:18,image:"assets/DURA1127.jpg"},
  {code:"0320CP",name:"PATIM FREIO MOTO T XL-125-BIZ-BROS",application:"XL 125 • Biz • Bros",category:"Freio",brand:"COBREQ",price:25,image:"assets/0320CP.jpg"},
  {code:"1657",name:"PISCA SETA TITAN 2000- D-D T-E C-COXIM",application:"Titan 2000-",category:"Elétrica",brand:"GVS",price:15,image:"assets/1657.jpg"},
  {code:"1658",name:"PISCA SETA TITAN 2000- D-D T-D C-COXIM",application:"Titan 2000-",category:"Elétrica",brand:"GVS",price:15,image:"assets/1658.jpg"},
  {code:"4054",name:"RETROV MOTO TITAN 2000- MOD ORIG-",application:"Titan 2000-",category:"Acessórios",brand:"RENASCENCA",price:25,image:"assets/4054.jpg"},
  {code:"4298",name:"RETROV MOTO TITAN 2014- MOD ORIG-",application:"Titan 2014-",category:"Acessórios",brand:"RENASCENCA",price:28,image:"assets/4298.jpg"},
  {code:"6301Z",name:"ROLAM MOTO 6301 Z R DIANT CG-XL",application:"CG • XL",category:"Rolamentos",brand:"NACHI",price:10,image:"assets/6301Z.jpg"},
  {code:"CW63012RS",name:"ROLAM MOTO 6301 Z R DIANT CG-XL",application:"CG • XL",category:"Rolamentos",brand:"CAWU",price:10,image:"assets/CW63012RS.jpg"},
  {code:"CW63022RS",name:"ROLAM MOTO 6302 ZZ RT CG-XL125 LE",application:"CG • XL 125",category:"Rolamentos",brand:"CAWU",price:10,image:"assets/CW63022RS.jpg"},
  {code:"1101906",name:"TORNEIRA GASOLINA TITAN 2004- 150 GP",application:"Titan 150 2004-",category:"Combustível",brand:"GP",price:20,image:"assets/1101906.jpg"},
  {code:"100398",name:"TUBO INTERNO MOTO TITAN 150-160",application:"Titan 150 • Titan 160",category:"Suspensão",brand:"FNA",price:60,image:"assets/100398.jpg",featured:true},
  {code:"DP7EA9",name:"VELA MOTO TITAN 00- XR-CBX 00- NGK",application:"Titan • XR • CBX",category:"Motor",brand:"NGK",price:21,image:"assets/DP7EA9.jpg",featured:true},
  {code:"CPR8EA9",name:"VELA MOTO TITAN 2004- 150",application:"Titan 150 2004-",category:"Motor",brand:"NGK",price:30,image:"assets/CPR8EA9.jpg"}
];

const money = v => v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const wa = msg => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
let cart=[];

function card(p) {
 const media = p.image
   ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.parentElement.innerHTML='<span>MP</span>'">`
   : '<span>MP</span>';
 return `<article class="product">
   <div class="product-img">${media}</div>
   <div class="product-body">
    <h3>${p.name}</h3>
    <div class="code">CÓDIGO: ${p.code}</div>
    <div class="code">MARCA: ${p.brand}</div>
    <div class="code">${p.application}</div>
    <div class="price">${money(p.price)}</div>
    <button class="btn gold add" onclick="addToCart('${p.code}')">Adicionar ao pedido</button>
   </div>
 </article>`;
}
function render(list=products) {
 document.querySelector("#products").innerHTML=list.map(card).join("") || '<p>Nenhum produto encontrado.</p>';
 document.querySelector("#featured").innerHTML=products.filter(p=>p.featured).map(card).join("");
}
function addToCart(code) {
 const p=products.find(x=>x.code===code);
 const found=cart.find(x=>x.code===code);
 if(found) found.qty++; else cart.push({...p,qty:1});
 renderCart();
}
function renderCart() {
 document.querySelector("#cartCount").textContent=cart.reduce((s,p)=>s+p.qty,0);
 const box=document.querySelector("#cartItems");
 if(!cart.length){box.innerHTML='<p class="muted">Seu carrinho está vazio.</p>';document.querySelector("#total").textContent=money(0);return;}
 box.innerHTML=cart.map(p=>`<div class="cart-row"><span><strong>${p.qty}x</strong> ${p.name}<br><small>${p.code}</small></span><strong>${money(p.price*p.qty)}</strong></div>`).join("");
 document.querySelector("#total").textContent=money(cart.reduce((s,p)=>s+p.price*p.qty,0));
}
function populateCategories() {
 const select=document.querySelector('#category');
 const cats=[...new Set(products.map(p=>p.category))].sort((a,b)=>a.localeCompare(b,'pt-BR'));
 select.innerHTML='<option value="">Todas as categorias</option>'+cats.map(c=>`<option>${c}</option>`).join('');
}
document.querySelector("#search").addEventListener("input",e=>{
 const q=e.target.value.toLowerCase();
 const c=document.querySelector("#category").value;
 render(products.filter(p=>(!q || `${p.name} ${p.application} ${p.code} ${p.brand}`.toLowerCase().includes(q)) && (!c || p.category===c)));
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
populateCategories();
render();
