// ============================================
//   LA BOTICA DEL PECADO — botica.js
// ============================================

// ======= DATA =======
const medicamentos = [
  {id:1,icon:"🍊",name:"Tintura de Naranja",dept:"Vitamínicos",desc:"Ginebra botánica, Grand Marnier, limón fresco y soda de naranja sanguina. Vitamina C líquida.",price:"$26.000",priceN:26000,dosage:"Tomar 1 copa antes de la cena. Repetir si es necesario.",tags:["Gin","Cítrico","Vitamínico"],isNew:false},
  {id:2,icon:"🌿",name:"Jarabe de Menta Negra",dept:"Digestivos",desc:"Mezcal artesanal, licor de hierbas, lima, jengibre y bitters de angostura. Para lo que no tiene cura.",price:"$32.000",priceN:32000,dosage:"Administrar en casos de tristeza moderada o aburrimiento.",tags:["Mezcal","Herbal","Digestivo"],isNew:true},
  {id:3,icon:"🍓",name:"Poción Carmesí",dept:"Tónicos",desc:"Ron añejo, frutos rojos colombianos, maracuyá, miel de abeja y un secreto que no revelaremos.",price:"$28.000",priceN:28000,dosage:"Dosis única nocturna. Puede causar alegría repentina.",tags:["Ron","Tropical","Dulce"],isNew:false},
  {id:4,icon:"💊",name:"La Píldora del Olvido",dept:"Especiales",desc:"Tequila blanco, curaçao azul, jugo de butterfly pea flower y limón. Cambia de color ante tus ojos.",price:"$34.000",priceN:34000,dosage:"Solo para quienes realmente necesitan olvidar. Con moderación.",tags:["Tequila","Especial","Mágico"],isNew:true},
  {id:5,icon:"🫁",name:"Bálsamo Pulmonar",dept:"Respiratorios",desc:"Whisky bourbon, miel de montaña, limón, jengibre y un chorrito de whisky ahumado. El remedio del Dr. Pecado.",price:"$30.000",priceN:30000,dosage:"Administrar con una manta y buena compañía.",tags:["Whisky","Cálido","Miel"],isNew:false},
  {id:6,icon:"🌺",name:"Agua de Rosas",dept:"Sin Alcohol",desc:"Agua de rosas destilada, lulo colombiano, agua de azahar, pepino y soda mineral. Elegante y etéreo.",price:"$16.000",priceN:16000,dosage:"Apto para todos los pacientes. Sin contraindicaciones.",tags:["Sin Alcohol","Floral","Local"],isNew:false},
  {id:7,icon:"🍋",name:"Suero Cítrico",dept:"Vitamínicos",desc:"Pisco peruano, limón tahití, azúcar de caña, clara de huevo y sal rosada. El antídoto perfecto.",price:"$27.000",priceN:27000,dosage:"Agitar vigorosamente antes de consumir. Literalmente.",tags:["Pisco","Ácido","Clásico"],isNew:false},
  {id:8,icon:"🧪",name:"La Fórmula Secreta",dept:"Especiales",desc:"No podemos revelar los ingredientes. Solo decimos que contiene 7 destilados y 3 macerados del Valle del Cauca.",price:"$38.000",priceN:38000,dosage:"Recetada solo a pacientes de confianza. Pregunte al Dr. Pecado.",tags:["Secreto","Premium","Artesanal"],isNew:true},
  {id:9,icon:"🫐",name:"Elixir de Arándanos",dept:"Tónicos",desc:"Gin premium, arándanos frescos, lavanda, limón y tónica artesanal. Antioxidante natural.",price:"$29.000",priceN:29000,dosage:"Dos copas equivalen a su dosis diaria de antioxidantes.",tags:["Gin","Floral","Antioxidante"],isNew:false},
  {id:10,icon:"🥥",name:"Leche Calmante",dept:"Sin Alcohol",desc:"Leche de coco artesanal, agua de panela, canela, vainilla y hielo machacado. Para calmar el alma.",price:"$15.000",priceN:15000,dosage:"Administrar en momentos de estrés o ansiedad laboral.",tags:["Sin Alcohol","Cremoso","Tropical"],isNew:false},
  {id:11,icon:"🌶",name:"Gotas del Infierno",dept:"Especiales",desc:"Sotol mexicano, habanero infusionado, tamarindo, lima y sal de gusano. Solo para valientes.",price:"$33.000",priceN:33000,dosage:"ADVERTENCIA: Puede causar sudoración excesiva y conversaciones interesantes.",tags:["Sotol","Picante","Extremo"],isNew:false},
  {id:12,icon:"🍇",name:"Jarabe de Uvas Negras",dept:"Digestivos",desc:"Vino tinto colombiano macerado con especias, cognac, naranja y canela. La tradición de la botica.",price:"$24.000",priceN:24000,dosage:"Ideal después de comidas copiosas o decepciones amorosas.",tags:["Vino","Especiado","Digestivo"],isNew:false},
];

const gallerySlides = [
  {dept:"DEPT. I",title:"La Barra Principal",tipo:"barra"},
  {dept:"DEPT. II",title:"El Laboratorio de Fórmulas",tipo:"lab"},
  {dept:"DEPT. III",title:"La Sala de Espera",tipo:"sala"},
  {dept:"DEPT. IV",title:"El Gabinete de Curiosidades",tipo:"gabinete"},
  {dept:"DEPT. V",title:"La Bodega Clandestina",tipo:"bodega"},
];

// Diagnosis questions + potion recommender
const diagnosisQuestions = [
  {
    q:"¿Cómo describe su condición esta noche, estimado paciente?",
    opts:[
      {icon:"😴",label:"Agotamiento crónico — necesito energía",val:"energia"},
      {icon:"💔",label:"Decepción romántica — necesito olvidar",val:"olvidar"},
      {icon:"🎉",label:"Euforia espontánea — quiero celebrar",val:"celebrar"},
      {icon:"🧘",label:"Ansiedad existencial — necesito calmarme",val:"calmar"},
    ]
  },
  {
    q:"¿Cuál es su tolerancia al riesgo farmacéutico?",
    opts:[
      {icon:"🌿",label:"Prefiero algo suave y medicinal",val:"suave"},
      {icon:"⚡",label:"Algo con carácter y personalidad",val:"fuerte"},
      {icon:"🌺",label:"Elegante y sofisticado, por favor",val:"elegante"},
      {icon:"🔥",label:"Lo más extremo que tenga el Dr. Pecado",val:"extremo"},
    ]
  },
  {
    q:"¿Qué ingrediente le genera mayor confianza terapéutica?",
    opts:[
      {icon:"🌿",label:"Hierbas y botánicos",val:"botanico"},
      {icon:"🍋",label:"Frutas y cítricos",val:"citrico"},
      {icon:"🥃",label:"Destilados oscuros y añejos",val:"oscuro"},
      {icon:"🫧",label:"Algo refrescante y efervescente",val:"fresco"},
    ]
  },
];

function getDiagnosisResult(answers){
  const [a1,a2,a3]=answers;
  if(a1==='energia'&&a3==='citrico') return medicamentos[6];   // Suero Cítrico
  if(a1==='olvidar') return medicamentos[3];                   // Píldora del Olvido
  if(a1==='celebrar'&&a2==='fuerte') return medicamentos[7];  // Fórmula Secreta
  if(a1==='celebrar'&&a3==='botanico') return medicamentos[8]; // Elixir de Arándanos
  if(a1==='calmar'&&a3==='fresco') return medicamentos[5];     // Agua de Rosas
  if(a1==='calmar') return medicamentos[4];                    // Bálsamo Pulmonar
  if(a2==='extremo') return medicamentos[10];                  // Gotas del Infierno
  if(a2==='elegante'&&a3==='botanico') return medicamentos[1]; // Jarabe Menta Negra
  if(a3==='oscuro') return medicamentos[11];                   // Jarabe de Uvas
  if(a3==='citrico') return medicamentos[0];                   // Tintura de Naranja
  if(a1==='energia') return medicamentos[2];                   // Poción Carmesí
  return medicamentos[Math.floor(Math.random()*medicamentos.length)];
}

// ======= STATE =======
let diagAnswers = [], diagStep = 0;
let cabIdx = 0, cabAutoIv = null;
let bookingState = {med:null, date:null, time:null, pay:null};
let deliveryCart = {}, domPay = null;
let currentRecStep = 1;

const PAY_LABELS = {
  cash:'💵 Efectivo al llegar',
  nequi:'📱 Nequi — 314 567 8901',
  daviplata:'🔴 Daviplata — 314 567 8901',
  transfer:'🏦 Transferencia / PSE',
};

// ======= INIT =======
document.addEventListener('DOMContentLoaded',()=>{
  initLoader();
  initCursor();
  initDustParticles();
  initReveal();
  initNavbar();
  renderMenu();
  renderDeptTabs();
  renderGallery();
  initDeliveryProducts();
  initBookingForm();
  initDateInput();
  animateCounters();
});

// ======= LOADER =======
function initLoader(){
  const loader=document.getElementById('rxLoader');
  const stamp=document.getElementById('rxStamp');
  const btn=document.getElementById('rxEnterBtn');
  // Animate stamp text
  const messages=['SELLANDO<br/>RECETA...','APROBADO<br/>POR EL DR.<br/>PECADO'];
  let i=0;
  const iv=setInterval(()=>{
    i=(i+1)%messages.length;
    if(stamp)stamp.innerHTML=messages[i];
  },800);
  // Show enter button after 2s
  setTimeout(()=>{
    clearInterval(iv);
    if(stamp)stamp.innerHTML='APROBADO<br/>DR. PECADO<br/>2024';
    if(stamp)stamp.style.color='var(--red-stamp)';
  },2000);
  // Auto-enter after 5s
  setTimeout(()=>{ if(!loader.classList.contains('hidden')) enterBotica(); },5000);
  loader.addEventListener('click',()=>{ if(btn&&btn.style.display!=='none') return; enterBotica(); });
}

function enterBotica(){
  document.getElementById('rxLoader').classList.add('hidden');
  document.getElementById('navBotica').classList.add('visible');
  playChime();
}

// ======= CURSOR =======
function initCursor(){
  const cur=document.getElementById('cursorDrop');
  document.addEventListener('mousemove',e=>{
    cur.style.left=e.clientX+'px';
    cur.style.top=e.clientY+'px';
  });
}

// ======= DUST =======
function initDustParticles(){
  const cont=document.getElementById('dustParticles');if(!cont)return;
  for(let i=0;i<18;i++){
    const d=document.createElement('div');d.className='dust';
    const s=Math.random()*4+1;
    d.style.cssText=`width:${s}px;height:${s}px;left:${Math.random()*100}%;animation-duration:${Math.random()*20+15}s;animation-delay:${Math.random()*10}s`;
    cont.appendChild(d);
  }
}

// ======= REVEAL =======
function initReveal(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
  },{threshold:0.1});
  document.querySelectorAll('.rx-reveal').forEach(el=>obs.observe(el));
}

// ======= NAVBAR =======
function initNavbar(){
  window.addEventListener('scroll',()=>{
    document.getElementById('navBotica')?.classList.toggle('scrolled',window.scrollY>80);
  });
  document.getElementById('nbHam')?.addEventListener('click',()=>{
    document.getElementById('nbMobile').classList.toggle('open');
  });
}
function closeMobile(){document.getElementById('nbMobile').classList.remove('open');}

// ======= COUNTERS =======
function animateCounters(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(!e.isIntersecting)return;
      const el=e.target,target=parseInt(el.dataset.target);
      let cur=0;const step=Math.ceil(target/60);
      const iv=setInterval(()=>{cur=Math.min(cur+step,target);el.textContent=cur.toLocaleString('es-CO');if(cur>=target)clearInterval(iv);},30);
      obs.unobserve(el);
    });
  },{threshold:0.3});
  document.querySelectorAll('[data-target]').forEach(el=>obs.observe(el));
}

// ======= MENU =======
function renderMenu(filter='Todos'){
  const grid=document.getElementById('rxEntries');if(!grid)return;
  const filtered=filter==='Todos'?medicamentos:medicamentos.filter(m=>m.dept===filter);
  grid.innerHTML=filtered.map((m,i)=>`
    <div class="rx-entry ${m.isNew?'rx-featured':''} rx-reveal" style="transition-delay:${i*0.05}s">
      ${m.isNew?'<div class="re-badge">NUEVO</div>':''}
      <div class="re-num">℞ ${String(m.id).padStart(2,'0')}</div>
      <span class="re-icon">${m.icon}</span>
      <div class="re-dept">${m.dept}</div>
      <h3>${m.name}</h3>
      <p>${m.desc}</p>
      <div class="re-dosage">💊 ${m.dosage}</div>
      <div class="re-foot">
        <span class="re-price">${m.price}</span>
        <div class="re-tags">${m.tags.map(t=>`<span class="re-tag">${t}</span>`).join('')}</div>
      </div>
    </div>`).join('');
  setTimeout(()=>initReveal(),80);
}

function renderDeptTabs(){
  const cats=['Todos',...new Set(medicamentos.map(m=>m.dept))];
  const cont=document.getElementById('deptTabs');if(!cont)return;
  cont.innerHTML=cats.map((c,i)=>`
    <button class="dept-tab ${c==='Todos'?'active':''}" onclick="filterMenu('${c}',this)">DEPT.${i} — ${c}</button>`).join('');
}

function filterMenu(cat,btn){
  document.querySelectorAll('.dept-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu(cat);
  playClick();
}

// ======= DIAGNOSIS =======
function openDiagnostico(){
  diagAnswers=[];diagStep=0;
  document.getElementById('diagnosticoModal').classList.add('open');
  renderDiagStep();
}
function closeDiagnostico(){
  document.getElementById('diagnosticoModal').classList.remove('open');
  diagAnswers=[];diagStep=0;
}

function renderDiagStep(){
  const body=document.getElementById('dxBody');if(!body)return;
  if(diagStep<3){
    const q=diagnosisQuestions[diagStep];
    body.innerHTML=`
      <div class="dx-q-step">Pregunta ${diagStep+1} de 3</div>
      <div class="dx-q">${q.q}</div>
      <div class="dx-opts">
        ${q.opts.map(opt=>`
          <button class="dx-opt" onclick="answerDiag('${opt.val}')">
            <span class="dx-opt-icon">${opt.icon}</span>
            ${opt.label}
          </button>`).join('')}
      </div>`;
  } else {
    const med=getDiagnosisResult(diagAnswers);
    body.innerHTML=`
      <div class="dx-result">
        <div class="dxr-stamp">RECETADO<br/>POR EL DR.<br/>PECADO</div>
        <div class="dxr-label">EL DR. PECADO RECETA</div>
        <div class="dxr-title">${med.icon} ${med.name}</div>
        <div class="dxr-name">${med.dept} · ${med.price}</div>
        <div class="dxr-desc">${med.desc}</div>
        <div class="dxr-dosage">℞ ${med.dosage}</div>
        <div class="dxr-btns">
          <button class="btn-botica" onclick="closeDiagnostico();document.getElementById('receta').scrollIntoView({behavior:'smooth'})">
            ℞ Hacer Reserva
          </button>
          <button class="btn-ghost-botica" onclick="diagAnswers=[];diagStep=0;renderDiagStep()">
            Consultar de nuevo
          </button>
        </div>
      </div>`;
    playChime();
  }
}

function answerDiag(val){
  diagAnswers.push(val);diagStep++;
  playClick();
  renderDiagStep();
}

// ======= GALLERY =======
function renderGallery(){
  const cont=document.getElementById('cabinetGallery');
  const dots=document.getElementById('cabDots');
  if(!cont||!dots)return;
  cont.innerHTML=gallerySlides.map((g,i)=>`
    <div class="cab-slide">
      ${buildGalSVG(g)}
      <div class="cab-caption">
        <span class="cab-cap-dept">${g.dept}</span>
        <div class="cab-cap-title">${g.titulo}</div>
      </div>
    </div>`).join('');
  dots.innerHTML=gallerySlides.map((_,i)=>
    `<button class="cab-d ${i===0?'active':''}" onclick="goGal(${i})"></button>`).join('');
  startGalAuto();
}

function buildGalSVG(g){
  const svgs={
    barra:`<svg viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="480" fill="#f5f0e0"/>
      <rect x="0" y="280" width="1200" height="200" fill="#ede8d5"/>
      <rect x="0" y="275" width="1200" height="8" fill="#2d5a27" opacity="0.5"/>
      <!-- Shelves with bottles -->
      ${[120,200].map(y=>`<rect x="60" y="${y}" width="1080" height="10" rx="3" fill="#8b6914" opacity="0.6"/>`).join('')}
      ${Array.from({length:14},(_,i)=>{
        const x=80+i*82;
        const col=['#8b1a1a','#2d5a27','#1a3a8b','#6b3a0f','#4a1a6b','#8b6b0f','#0f4a6b'][i%7];
        return `<rect x="${x}" y="${125-i%3*15}" width="${28+i%2*8}" height="${65+i%3*15}" rx="${4+i%2*4}" fill="${col}" opacity="0.75" stroke="#3a2010" stroke-width="0.5"/>
                <rect x="${x+2}" y="${128-i%3*15}" width="${24+i%2*8}" height="12" rx="2" fill="rgba(255,255,255,0.12)"/>
                <rect x="${x+4}" y="${152-i%3*15}" width="${20+i%2*8}" height="${20}" rx="2" fill="#f5f0e0" opacity="0.6"/>`;
      }).join('')}
      <!-- Bar counter -->
      <rect x="60" y="285" width="1080" height="60" rx="6" fill="#6b4a14" stroke="#3a2010" stroke-width="1"/>
      <rect x="60" y="283" width="1080" height="10" rx="3" fill="#8b6914"/>
      <!-- Big RX sign -->
      <text x="1100" y="260" font-family="Playfair Display, serif" font-size="80" fill="#2d5a27" opacity="0.08" font-weight="900" font-style="italic">℞</text>
      <!-- Pendant lights -->
      ${[200,500,800,1080].map(x=>`
        <line x1="${x}" y1="0" x2="${x}" y2="30" stroke="#3a2010" stroke-width="1.5" opacity="0.4"/>
        <ellipse cx="${x}" cy="36" rx="22" ry="10" fill="#c8a030" opacity="0.6"/>
        <ellipse cx="${x}" cy="100" rx="80" ry="24" fill="#c8a030" opacity="0.04"/>
      `).join('')}
    </svg>`,
    lab:`<svg viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="480" fill="#f0ece0"/>
      <!-- Lab tiles -->
      ${Array.from({length:18},(_,i)=>Array.from({length:8},(_,j)=>`<rect x="${i*68}" y="${j*62}" width="67" height="61" fill="${(i+j)%2===0?'rgba(255,255,255,0.5)':'rgba(220,215,200,0.3)'}" stroke="rgba(58,42,16,0.05)" stroke-width="0.5"/>`).join('')).join('')}
      <!-- Lab bench -->
      <rect x="100" y="220" width="1000" height="200" rx="4" fill="#d4c8a0" stroke="#8b6914" stroke-width="1"/>
      <rect x="100" y="218" width="1000" height="10" rx="2" fill="#c8a030" opacity="0.6"/>
      <!-- Beakers and flasks -->
      ${[160,280,420,560,700,840,980,1100].map((x,i)=>{
        const col=['#8b1a1a','#2d5a27','#1a3a8b','#6b3a0f','#4a1a6b','#8b6b0f','#0f4a6b','#8b1a1a'][i];
        const h=80+i%3*30;
        return `
          <path d="M${x-16} ${230} L${x-22} ${230+h} Q${x-22} ${248+h} ${x} ${248+h} Q${x+22} ${248+h} ${x+22} ${230+h} L${x+16} ${230}Z" fill="${col}" opacity="0.6" stroke="#3a2010" stroke-width="0.8"/>
          <rect x="${x-8}" y="${210}" width="16" height="22" rx="2" fill="#3a2010" opacity="0.4"/>
          <circle cx="${x-4}" cy="${250+i%3*10}" r="3" fill="rgba(255,255,255,0.4)"><animate attributeName="cy" values="${255+i%3*10};${230+i%3*10};${255+i%3*10}" dur="${2+i*0.4}s" repeatCount="indefinite"/></circle>
        `;
      }).join('')}
      <!-- Big apothecary sign -->
      <rect x="440" y="60" width="320" height="120" fill="none" stroke="#2d5a27" stroke-width="2" opacity="0.4"/>
      <text x="600" y="110" text-anchor="middle" font-family="Playfair Display, serif" font-size="28" fill="#2d5a27" opacity="0.5" font-style="italic">La Botica</text>
      <text x="600" y="138" text-anchor="middle" font-family="Playfair Display, serif" font-size="18" fill="#8b1a1a" opacity="0.5">del Pecado ℞</text>
    </svg>`,
    sala:`<svg viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="480" fill="#ede8d5"/>
      <!-- Wainscoting wall -->
      ${Array.from({length:7},(_,i)=>`<rect x="${i*172}" y="0" width="170" height="280" fill="${i%2===0?'#e8e0c8':'#ede8d5'}" opacity="0.8"/>`).join('')}
      ${Array.from({length:6},(_,i)=>`<rect x="${i*172+12}" y="20" width="146" height="240" rx="2" fill="none" stroke="#c8b870" stroke-width="0.6" opacity="0.5"/>`).join('')}
      <!-- Chairs -->
      ${[100,350,600,850,1100].map((x,i)=>`
        <rect x="${x-40}" y="280" width="80" height="60" rx="8" fill="#8b6914" opacity="0.7"/>
        <rect x="${x-35}" y="268" width="70" height="20" rx="6" fill="#6b4a0f" opacity="0.8"/>
        <rect x="${x-40}" y="280" width="18" height="60" rx="6" fill="#6b4a0f" opacity="0.6"/>
        <rect x="${x+22}" y="280" width="18" height="60" rx="6" fill="#6b4a0f" opacity="0.6"/>
        <rect x="${x-25}" y="336" width="50" height="8" rx="3" fill="#3a2010" opacity="0.4"/>
      `).join('')}
      <!-- Apothecary bottles on shelf -->
      <rect x="60" y="150" width="1080" height="8" rx="3" fill="#8b6914" opacity="0.5"/>
      ${Array.from({length:16},(_,i)=>`
        <rect x="${80+i*68}" y="${90-i%3*12}" width="${20+i%2*8}" height="${55+i%3*12}" rx="${3+i%2*3}" fill="${['#8b1a1a','#2d5a27','#1a3a8b','#6b3a0f'][i%4]}" opacity="0.65"/>
      `).join('')}
    </svg>`,
    gabinete:`<svg viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="480" fill="#f5f0e0"/>
      <!-- Display cases -->
      ${[60,440,820].map((x,i)=>`
        <rect x="${x}" y="80" width="330" height="320" rx="4" fill="rgba(255,255,255,0.6)" stroke="#c8b870" stroke-width="1.5" opacity="0.8"/>
        <rect x="${x+8}" y="88" width="314" height="304" rx="2" fill="none" stroke="#c8b870" stroke-width="0.5" opacity="0.5"/>
        <!-- Items in case -->
        ${Array.from({length:6},(_,j)=>`
          <text x="${x+50+j%3*100}" y="${150+Math.floor(j/3)*130}" font-size="${24+j%2*10}" opacity="0.5" fill="#2d5a27">
            ${['⚗️','🧪','💊','🌿','🫙','⚕'][j]}
          </text>`).join('')}
        <text x="${x+165}" y="${420}" text-anchor="middle" font-family="Playfair Display, serif" font-size="10" fill="#3a2010" opacity="0.4" font-style="italic">Colección ${['I','II','III'][i]}</text>
      `).join('')}
      <!-- Big ℞ watermark -->
      <text x="600" y="280" text-anchor="middle" font-family="Playfair Display, serif" font-size="300" fill="#2d5a27" opacity="0.03" font-style="italic">℞</text>
    </svg>`,
    bodega:`<svg viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="480" fill="#1a1208"/>
      <rect x="0" y="0" width="1200" height="480" fill="url(#brickPat)"/>
      <!-- Brick pattern -->
      <defs>
        <pattern id="brickPat" width="80" height="40" patternUnits="userSpaceOnUse">
          <rect width="79" height="19" rx="1" fill="#2a1a0a" stroke="#3a2810" stroke-width="0.5"/>
          <rect y="20" x="40" width="79" height="19" rx="1" fill="#2a1a0a" stroke="#3a2810" stroke-width="0.5"/>
        </pattern>
      </defs>
      <!-- Wine racks -->
      ${Array.from({length:5},(_,i)=>Array.from({length:4},(_,j)=>`
        <ellipse cx="${100+i*220}" cy="${140+j*60}" rx="28" ry="14" fill="${j%2===0?'#8b1a1a':'#2d5a27'}" opacity="0.7" stroke="#3a2010" stroke-width="0.8"/>
        <ellipse cx="${100+i*220}" cy="${140+j*60}" rx="16" ry="6" fill="#1a0808" opacity="0.5"/>
      `).join('')).join('')}
      <!-- Hanging bottles -->
      ${[200,500,800,1100].map((x,i)=>`
        <line x1="${x}" y1="0" x2="${x}" y2="40" stroke="#6b4a14" stroke-width="2" opacity="0.6"/>
        <rect x="${x-10}" y="35" width="20" height="55" rx="8" fill="${['#8b1a1a','#2d5a27','#1a3a8b','#6b3a0f'][i]}" opacity="0.8" stroke="#3a2010" stroke-width="0.8"/>
      `).join('')}
      <!-- Candle lights -->
      ${[150,400,650,900,1100].map(x=>`
        <ellipse cx="${x}" cy="460" rx="50" ry="14" fill="#c8a030" opacity="0.08"/>
        <rect x="${x-3}" y="380" width="6" height="60" rx="3" fill="#d4c090" opacity="0.6"/>
        <ellipse cx="${x}" cy="375" rx="4" ry="8" fill="#ff9a2a" opacity="0.7"/>
      `).join('')}
    </svg>`,
  };
  return svgs[g.tipo]||svgs.barra;
}

function goGal(i){
  cabIdx=i;
  const gal=document.getElementById('cabinetGallery');
  if(gal)gal.style.transform=`translateX(-${i*100}%)`;
  document.querySelectorAll('.cab-d').forEach((d,j)=>d.classList.toggle('active',j===i));
}
function cabPrev(){stopGalAuto();goGal((cabIdx-1+gallerySlides.length)%gallerySlides.length);startGalAuto();}
function cabNext(){stopGalAuto();goGal((cabIdx+1)%gallerySlides.length);startGalAuto();}
function startGalAuto(){cabAutoIv=setInterval(()=>goGal((cabIdx+1)%gallerySlides.length),5000);}
function stopGalAuto(){clearInterval(cabAutoIv);}

// ======= DELIVERY =======
function initDeliveryProducts(){
  const cont=document.getElementById('domCatalog');if(!cont)return;
  cont.innerHTML=medicamentos.slice(0,10).map(m=>`
    <div class="dom-prod" id="dmp_${m.id}">
      <div class="dp-top"><span class="dp-icon">${m.icon}</span><span class="dp-name">${m.name}</span></div>
      <div class="dp-price">${m.price}</div>
      <div class="dp-qty">
        <button class="dp-btn" onclick="chgQty(${m.id},-1)">−</button>
        <span class="dp-num" id="dqty_${m.id}">0</span>
        <button class="dp-btn" onclick="chgQty(${m.id},+1)">+</button>
      </div>
    </div>`).join('');
}

function chgQty(id,delta){
  const med=medicamentos.find(m=>m.id===id);if(!med)return;
  const cur=(deliveryCart[id]||{qty:0}).qty;
  const next=Math.max(0,cur+delta);
  if(next>0)deliveryCart[id]={...med,qty:next};
  else delete deliveryCart[id];
  const el=document.getElementById('dqty_'+id);
  if(el)el.textContent=next;
  const card=document.getElementById('dmp_'+id);
  if(card)card.classList.toggle('has-qty',next>0);
  updateCart();
}

function updateCart(){
  const items=Object.values(deliveryCart).filter(i=>i.qty>0);
  const itemsCont=document.getElementById('drItems');
  const totals=document.getElementById('drTotals');
  if(!items.length){
    if(itemsCont)itemsCont.innerHTML='<p class="rx-hint">— Ningún medicamento seleccionado —</p>';
    if(totals)totals.style.display='none';
    return;
  }
  let sub=0;
  if(itemsCont)itemsCont.innerHTML=items.map(i=>{
    const lt=i.priceN*i.qty;sub+=lt;
    return `<div class="dr-item"><span>${i.icon} ${i.name} ×${i.qty}</span><strong>$${lt.toLocaleString('es-CO')}</strong></div>`;
  }).join('');
  const dom=sub>=80000?0:5000;
  if(document.getElementById('drtSub'))document.getElementById('drtSub').textContent='$'+sub.toLocaleString('es-CO');
  if(document.getElementById('drtDom'))document.getElementById('drtDom').textContent=dom===0?'¡GRATIS!':'$'+dom.toLocaleString('es-CO');
  if(document.getElementById('drtTotal'))document.getElementById('drtTotal').textContent='$'+(sub+dom).toLocaleString('es-CO');
  if(totals)totals.style.display='flex';
}

function selectDomPay(method){
  domPay=method;
  const panel=document.getElementById('rxpCopyPanel');
  const label=document.getElementById('rxpcLabel');
  if(method==='nequi'||method==='daviplata'){
    if(panel)panel.style.display='flex';
    if(label)label.textContent=method==='nequi'?'Número Nequi:':'Número Daviplata:';
  } else {
    if(panel)panel.style.display='none';
  }
  const msgs={cash:'℞ Paga en efectivo al recibir tu pedido.',nequi:'℞ Transfiere antes de que despachemos. Trae comprobante.',daviplata:'℞ Transfiere antes de que despachemos. Trae comprobante.',transfer:'℞ Te enviamos los datos bancarios por WhatsApp.'};
  const msgEl=document.getElementById('rxpMsg');if(msgEl)msgEl.textContent=msgs[method]||'';
  playClick();
}

function copyDomNum(){
  const btn=document.querySelector('#rxpCopyPanel .rxpc-copy');
  navigator.clipboard.writeText('3145678901').then(()=>{
    if(btn){btn.textContent='✓ Copiado';btn.classList.add('copied');setTimeout(()=>{btn.textContent='⎗ Copiar';btn.classList.remove('copied');},2000);}
    showBoticaToast('Número copiado al portapapeles');
  }).catch(()=>showBoticaToast('Número: 314 567 8901'));
}

function confirmDomicilio(){
  const name=document.getElementById('domName')?.value.trim();
  const phone=document.getElementById('domPhone')?.value.trim();
  const addr=document.getElementById('domAddr')?.value.trim();
  const items=Object.values(deliveryCart).filter(i=>i.qty>0);
  if(!items.length){showBoticaToast('℞ Selecciona al menos un medicamento');return;}
  if(!name||!phone||!addr){showBoticaToast('℞ Completa nombre, teléfono y dirección');return;}
  if(!domPay){showBoticaToast('℞ Selecciona el método de pago');return;}

  const sub=items.reduce((s,i)=>s+i.priceN*i.qty,0);
  const dom=sub>=80000?0:5000;
  document.getElementById('domModalText').innerHTML=`
    <strong>${name}</strong>, su pedido ha sido despachado desde La Botica.<br/><br/>
    ${items.map(i=>`${i.icon} <strong>${i.name}</strong> ×${i.qty} — $${(i.priceN*i.qty).toLocaleString('es-CO')}`).join('<br/>')}<br/><br/>
    📍 <strong>Dirección:</strong> ${addr}<br/>
    💳 <strong>Pago:</strong> ${PAY_LABELS[domPay]}<br/>
    💰 <strong>Total:</strong> $${(sub+dom).toLocaleString('es-CO')} ${dom===0?'(domicilio gratis 🎉)':''}<br/><br/>
    <em>Le contactaremos al ${phone} cuando el mensajero esté en camino. ~30-50 min.</em>
  `;
  document.getElementById('domModal').classList.add('open');
  playChime();
}

function closeDomModal(){
  document.getElementById('domModal').classList.remove('open');
  deliveryCart={};domPay=null;
  medicamentos.slice(0,10).forEach(m=>{
    const el=document.getElementById('dqty_'+m.id);if(el)el.textContent='0';
    const card=document.getElementById('dmp_'+m.id);if(card)card.classList.remove('has-qty');
  });
  ['domName','domPhone','domAddr','domBarrio','domNote'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.querySelectorAll('[name="domPay"]').forEach(r=>r.checked=false);
  const panel=document.getElementById('rxpCopyPanel');if(panel)panel.style.display='none';
  const msg=document.getElementById('rxpMsg');if(msg)msg.textContent='';
  updateCart();
}

// ======= BOOKING (reservation) =======
function initBookingForm(){
  const mp=document.getElementById('medPick');if(!mp)return;
  mp.innerHTML=medicamentos.map(m=>`
    <div class="med-card" id="mc_${m.id}" onclick="pickMed(${m.id})">
      <h4>${m.icon} ${m.name}</h4>
      <div class="mc-price">${m.price}</div>
      <p>${m.dept}</p>
    </div>`).join('');
  // Set today's date on the header
  const d=new Date();
  const el=document.getElementById('rpDate');
  if(el)el.textContent=d.toLocaleDateString('es-CO',{day:'2-digit',month:'2-digit',year:'numeric'});
}

function pickMed(id){
  bookingState.med=medicamentos.find(m=>m.id===id);
  document.querySelectorAll('.med-card').forEach(c=>c.classList.remove('sel'));
  document.getElementById('mc_'+id)?.classList.add('sel');
  document.getElementById('rt-med').textContent=bookingState.med.name;
  document.getElementById('rt-price').textContent=bookingState.med.price;
  playClick();
  goStep(2);
}

function initDateInput(){
  const input=document.getElementById('resDate');if(!input)return;
  input.min=new Date().toISOString().split('T')[0];
  input.addEventListener('change',()=>{
    bookingState.date=input.value;
    bookingState.time=null;
    const d=new Date(input.value+'T12:00:00');
    document.getElementById('rt-date').textContent=d.toLocaleDateString('es-CO',{weekday:'short',day:'numeric',month:'short'});
    renderSlots(input.value);
  });
  document.getElementById('resOcasion')?.addEventListener('change',function(){
    if(this.value)showBoticaToast('℞ '+this.value+' registrado en su expediente');
  });
}

function renderSlots(dateStr){
  const cont=document.getElementById('resSlots');if(!cont)return;
  const d=new Date(dateStr+'T12:00:00'),day=d.getDay();
  const open=18,close=day===0?24:day>=5?27:25;
  const occupied=['19:00','20:30','22:00'];
  const slots=[];
  for(let h=open;h<close;h++){
    slots.push(pad(h%24)+':00');
    if(h+0.5<close)slots.push(pad(h%24)+':30');
  }
  cont.innerHTML=slots.map(s=>`
    <button class="res-slot ${occupied.includes(s)?'taken':''}" onclick="pickSlot('${s}',this)">${s}</button>`).join('');
}

function pickSlot(t,el){
  document.querySelectorAll('.res-slot').forEach(b=>b.classList.remove('sel'));
  el.classList.add('sel');
  bookingState.time=t;
  document.getElementById('rt-time').textContent=t;
  playClick();
  goStep(3);
}

function goStep(n){
  currentRecStep=n;
  document.querySelectorAll('.rp-step').forEach((s,i)=>s.classList.toggle('active',i===n-1));
}

// Reservation payment
function selectResPay(method){
  bookingState.pay=method;
  const panel=document.getElementById('rxprCopyPanel');
  const label=document.getElementById('rxprLabel');
  if(method==='nequi'||method==='daviplata'){
    if(panel)panel.style.display='flex';
    if(label)label.textContent=method==='nequi'?'Número Nequi:':'Número Daviplata:';
  } else {
    if(panel)panel.style.display='none';
  }
  const msgs={cash:'℞ Paga al llegar al establecimiento.',nequi:'℞ Transfiere antes de tu visita.',daviplata:'℞ Transfiere antes de tu visita.',transfer:'℞ Te enviamos los datos bancarios.'};
  const msgEl=document.getElementById('rxprMsg');if(msgEl)msgEl.textContent=msgs[method]||'';
  document.getElementById('rt-pay').textContent=PAY_LABELS[method];
  playClick();
}

function copyResNum(){
  const btn=document.querySelector('#rxprCopyPanel .rxpc-copy');
  navigator.clipboard.writeText('3145678901').then(()=>{
    if(btn){btn.textContent='✓ Copiado';btn.classList.add('copied');setTimeout(()=>{btn.textContent='⎗ Copiar';btn.classList.remove('copied');},2000);}
    showBoticaToast('Número copiado');
  }).catch(()=>showBoticaToast('Número: 314 567 8901'));
}

function sealReceta(){
  const name=document.getElementById('resName')?.value.trim();
  const phone=document.getElementById('resPhone')?.value.trim();
  if(!bookingState.med){showBoticaToast('℞ Selecciona un medicamento');return;}
  if(!bookingState.date||!bookingState.time){showBoticaToast('℞ Selecciona fecha y hora');return;}
  if(!name||!phone){showBoticaToast('℞ Completa nombre y teléfono');return;}
  if(!bookingState.pay){showBoticaToast('℞ Selecciona el método de pago');return;}

  const d=new Date(bookingState.date+'T12:00:00');
  const dateStr=d.toLocaleDateString('es-CO',{weekday:'long',day:'numeric',month:'long'});
  document.getElementById('recetaModalText').innerHTML=`
    Su receta ha sido sellada, <em>${name}</em>.<br/><br/>
    ℞ <strong>Medicamento:</strong> ${bookingState.med.name}<br/>
    ℞ <strong>Precio:</strong> ${bookingState.med.price}<br/>
    ℞ <strong>Fecha:</strong> ${dateStr} a las ${bookingState.time}<br/>
    ℞ <strong>Pago:</strong> ${PAY_LABELS[bookingState.pay]}<br/><br/>
    <em>El Dr. Pecado le confirmará al ${phone}. Presente esta receta en la botica.</em>
  `;
  document.getElementById('recetaModal').classList.add('open');
  playChime();
}

function closeRecetaModal(){
  document.getElementById('recetaModal').classList.remove('open');
  bookingState={med:null,date:null,time:null,pay:null};
  document.querySelectorAll('.med-card,.res-slot').forEach(c=>c.classList.remove('sel'));
  document.querySelectorAll('[name="resPay"]').forEach(r=>r.checked=false);
  ['resName','resPhone','resEmail','resNote','resDate'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.getElementById('resOcasion').value='';
  document.getElementById('resSlots').innerHTML='<p class="rx-hint">Selecciona una fecha</p>';
  const cp=document.getElementById('rxprCopyPanel');if(cp)cp.style.display='none';
  const msg=document.getElementById('rxprMsg');if(msg)msg.textContent='';
  ['rt-med','rt-price','rt-date','rt-time','rt-pay'].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent='—';});
  goStep(1);
}

// ======= TOAST =======
function showBoticaToast(msg){
  const t=document.createElement('div');
  t.style.cssText=`position:fixed;bottom:24px;right:24px;background:#fff;border:2px solid #2d5a27;border-left:4px solid #8b1a1a;color:#1a1208;font-family:'Special Elite','Courier New',monospace;font-size:0.75rem;letter-spacing:0.08em;padding:12px 18px;z-index:9999;box-shadow:3px 3px 0 rgba(26,18,8,0.15);max-width:300px;line-height:1.5`;
  t.textContent=msg;document.body.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity 0.4s';},2300);
  setTimeout(()=>t.remove(),2800);
}

// ======= AUDIO =======
let audioCtx=null;
function getCtx(){if(!audioCtx){try{audioCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){return null;}}return audioCtx;}
function playClick(){
  const ctx=getCtx();if(!ctx)return;
  const o=ctx.createOscillator(),g=ctx.createGain();
  o.connect(g);g.connect(ctx.destination);
  o.type='sine';o.frequency.value=660;
  g.gain.setValueAtTime(0.04,ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.08);
  o.start();o.stop(ctx.currentTime+0.1);
}
function playChime(){
  const ctx=getCtx();if(!ctx)return;
  [523,659,784,1047].forEach((f,i)=>{
    const o=ctx.createOscillator(),g=ctx.createGain();
    o.connect(g);g.connect(ctx.destination);
    o.type='sine';o.frequency.value=f;
    g.gain.setValueAtTime(0.05,ctx.currentTime+i*0.12);
    g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+i*0.12+0.5);
    o.start(ctx.currentTime+i*0.12);o.stop(ctx.currentTime+i*0.12+0.6);
  });
}

function pad(n){return String(Math.floor(n)).padStart(2,'0');}
