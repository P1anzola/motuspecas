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

const money = v => v.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
const wa = msg => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

let cart = JSON.parse(localStorage.getItem("motus_cart_v3") || "[]");

function saveCart(){ localStorage.setItem("motus_cart_v3", JSON.stringify(cart)); }

function productImage(p){
  return p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';">` : "";
}

function card(p){
  return `<article class="product">
    <div class="product-img">${productImage(p)}${p.featured ? '<span class="product-tag">DESTAQUE</span>' : ''}</div>
    <div class="product-body">
      <div class="product-meta"><span class="meta-chip">${p.brand || "MOTUS"}</span><span class="meta-chip">${p.category}</span></div>
      <h3>${p.name}</h3>
      <div class="code">CÓDIGO: <strong>${p.code}</strong></div>
      <div class="application">${p.application}</div>
      <div class="price">${money(p.price)}</div>
      <button class="btn gold add" type="button" onclick="addToCart('${p.code}')">Adicionar ao pedido</button>
    </div>
  </article>`;
}

function render(list=products){
  document.querySelector("#products").innerHTML = list.length ? list.map(card).join("") :
    `<div class="empty"><strong>Nenhuma peça encontrada.</strong><br>Revise o código, descrição ou filtros.</div>`;
  document.querySelector("#featured").innerHTML = products.filter(p=>p.featured).slice(0,4).map(card).join("");
  document.querySelector("#resultsInfo").textContent = `${list.length} produto${list.length===1?"":"s"}`;
}

function updateHeroStats(){
  document.querySelector("#productCount").textContent = products.length;
  document.querySelector("#brandCount").textContent = new Set(products.map(p=>p.brand).filter(Boolean)).size;
}

function populateFilters(){
  const categories=[...new Set(products.map(p=>p.category).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"pt-BR"));
  const brands=[...new Set(products.map(p=>p.brand).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"pt-BR"));
  document.querySelector("#category").innerHTML='<option value="">Todas as categorias</option>'+categories.map(c=>`<option value="${c}">${c}</option>`).join("");
  document.querySelector("#brand").innerHTML='<option value="">Todas as marcas</option>'+brands.map(b=>`<option value="${b}">${b}</option>`).join("");
}

function currentFilteredProducts(){
  const q=document.querySelector("#search").value.trim().toLowerCase();
  const category=document.querySelector("#category").value;
  const brand=document.querySelector("#brand").value;
  return products.filter(p=>{
    const hay=`${p.name} ${p.application} ${p.code} ${p.brand}`.toLowerCase();
    return (!q || hay.includes(q)) && (!category || p.category===category) && (!brand || p.brand===brand);
  });
}

function renderFilterChips(){
  const chips=[];
  const q=document.querySelector("#search").value.trim();
  const category=document.querySelector("#category").value;
  const brand=document.querySelector("#brand").value;
  if(q) chips.push(`Busca: ${q}`);
  if(category) chips.push(`Categoria: ${category}`);
  if(brand) chips.push(`Marca: ${brand}`);
  document.querySelector("#activeFilters").innerHTML=chips.map(x=>`<span class="filter-chip">${x}</span>`).join("");
}

function applyFilters(){ render(currentFilteredProducts()); renderFilterChips(); }

function addToCart(code){
  const p=products.find(x=>x.code===code); if(!p) return;
  const found=cart.find(x=>x.code===code);
  if(found) found.qty++; else cart.push({...p,qty:1});
  saveCart(); renderCart(); openDrawer();
}

function changeQty(code,delta){
  const item=cart.find(x=>x.code===code); if(!item) return;
  item.qty+=delta;
  if(item.qty<=0) removeItem(code); else saveCart();
  renderCart();
}

function removeItem(code){
  cart=cart.filter(x=>x.code!==code);
  saveCart();
  renderCart();
}

function clearCart(){
  cart=[]; saveCart(); renderCart();
}

function cartQty(){ return cart.reduce((sum,p)=>sum+p.qty,0); }
function cartTotal(){ return cart.reduce((sum,p)=>sum+p.price*p.qty,0); }

function cartRow(p){
  return `<div class="cart-row">
    <div class="cart-thumb">${productImage(p)}</div>
    <div>
      <div class="cart-title">${p.name}</div>
      <div class="cart-code">Cód. ${p.code} • ${p.brand || "MOTUS"}</div>
      <div class="qty-box"><button type="button" onclick="changeQty('${p.code}',-1)">−</button><span>${p.qty}</span><button type="button" onclick="changeQty('${p.code}',1)">+</button></div>
      <button class="remove-item" type="button" onclick="removeItem('${p.code}')">Remover este item</button>
    </div>
    <div class="row-price">${money(p.price*p.qty)}</div>
  </div>`;
}

function drawerItem(p){
  return `<div class="drawer-item">
    <div class="drawer-thumb">${productImage(p)}</div>
    <div>
      <strong>${p.name}</strong>
      <small>Qtd. ${p.qty} • Cód. ${p.code}</small>
      <div class="drawer-actions"><span>${money(p.price*p.qty)}</span><button type="button" onclick="removeItem('${p.code}')">Remover</button></div>
    </div>
    <div class="qty-box"><button type="button" onclick="changeQty('${p.code}',-1)">−</button><span>${p.qty}</span><button type="button" onclick="changeQty('${p.code}',1)">+</button></div>
  </div>`;
}

function renderCart(){
  const qty=cartQty(), total=cartTotal();
  document.querySelector("#cartCount").textContent=qty;
  document.querySelector("#summaryQty").textContent=qty;
  document.querySelector("#total").textContent=money(total);
  document.querySelector("#drawerTotal").textContent=money(total);
  const main=document.querySelector("#cartItems"), drawer=document.querySelector("#drawerItems");
  if(!cart.length){
    main.innerHTML='<div class="cart-empty">Seu pedido está vazio.<br>Escolha uma peça no catálogo para começar.</div>';
    drawer.innerHTML='<div class="cart-empty">Nenhum item selecionado.</div>';
  }else{
    main.innerHTML=cart.map(cartRow).join("");
    drawer.innerHTML=cart.map(drawerItem).join("");
  }
}

function openDrawer(){
  const drawer=document.querySelector("#cartDrawer");
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden","false");
  document.querySelector("#drawerBackdrop").hidden=false;
  document.body.style.overflow="hidden";
}

function closeDrawer(){
  const drawer=document.querySelector("#cartDrawer");
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden","true");
  document.querySelector("#drawerBackdrop").hidden=true;
  document.body.style.overflow="";
}

function checkoutWhatsApp(){
  if(!cart.length){ alert("Seu pedido está vazio."); return; }
  const lines=cart.map(p=>`${p.qty}x ${p.name} (cód. ${p.code}) — ${money(p.price*p.qty)}`).join("\n");
  const total=money(cartTotal());
  window.open(wa(`Olá, MOTUS PEÇAS! Quero solicitar este pedido:\n\n${lines}\n\nTotal: ${total}\n\nAguardo confirmação de disponibilidade, frete e pagamento.`),"_blank","noopener");
}

document.querySelector("#search").addEventListener("input",applyFilters);
document.querySelector("#category").addEventListener("change",applyFilters);
document.querySelector("#brand").addEventListener("change",applyFilters);

document.querySelector("#clearFilters").addEventListener("click",()=>{
  document.querySelector("#search").value="";
  document.querySelector("#category").value="";
  document.querySelector("#brand").value="";
  applyFilters();
});

document.querySelector("#checkout").addEventListener("click",checkoutWhatsApp);
document.querySelector("#drawerCheckout").addEventListener("click",checkoutWhatsApp);
document.querySelector("#clearCart").addEventListener("click",clearCart);

document.querySelector("#cartTrigger").addEventListener("click",openDrawer);
document.querySelector("#drawerClose").addEventListener("click",closeDrawer);
document.querySelector("#drawerBackdrop").addEventListener("click",closeDrawer);
document.querySelector("#drawerViewCart").addEventListener("click",closeDrawer);

document.querySelector("#homeLogo").addEventListener("click",()=>{
  setTimeout(()=>window.scrollTo({top:0,behavior:"smooth"}),0);
});

document.querySelector("#heroWhats").href=wa("Olá, MOTUS PEÇAS! Gostaria de informações sobre peças.");
document.querySelector("#contactWhats").href=wa("Olá, MOTUS PEÇAS! Preciso de ajuda para encontrar uma peça.");

populateFilters();
updateHeroStats();
render();
renderCart();
