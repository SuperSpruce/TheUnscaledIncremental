game = {
  n: new OmegaNum(10),  //null matter
  nT: new OmegaNum(10),  //total null matter made
  d1: new OmegaNum(0),  //1st dimensions
  d2: new OmegaNum(0),  //2nd dimensions
  d3: new OmegaNum(0),  //3rd dimensions
  dm: [0, new OmegaNum(1), new OmegaNum(1), new OmegaNum(1)],  //individual dimension multipliers (from matter effect)
  a: new OmegaNum(0),  //antimatter
  a1: new OmegaNum(0),  //1st antimatter dimensions
  a2: new OmegaNum(0),  //2nd antimatter dimensions
  a3: new OmegaNum(0),  //3rd antimatter dimensions
  ae: new OmegaNum(0),  //antimatter effect
  am: new OmegaNum(0),  //multiplier of antimatter dimensions
  m: new OmegaNum(0),  //matter (regular matter)
  m1: new OmegaNum(0),  //1st matter dimensions
  m2: new OmegaNum(0),  //2nd matter dimensions
  me: new OmegaNum(1),  //matter effect
  mm: new OmegaNum(0),  //multiplier of matter dimensions
  dp: new OmegaNum(0),  //discovery points
  de: new OmegaNum(0),  //effect of discovery points
  u: [false, false, false, false],  //upgrades
  ru: [new OmegaNum(0), new OmegaNum(0), 0, new OmegaNum(9)],  //repeatable upgrades
  ruC: [new OmegaNum(5000), new OmegaNum(1000), 0, new OmegaNum("eee10")],  //cost of repeatable upgrades
  au: [false, false, false],  //automation upgrades
  ta: [0, false, false],  //toggle automation
  ru0P: new OmegaNum(4),  //effect of the first repeatable upgrade
  ru2C: [new OmegaNum(1e10), new OmegaNum(1e20), new OmegaNum(1e30), new OmegaNum(1e40), new OmegaNum(1e55), new OmegaNum(1e80), new OmegaNum(1e150), new OmegaNum(OmegaNum.pow(2,1024)), new OmegaNum("e1000"), new OmegaNum("e6969")],  //cost of the third repeatable upgrade
  theme: 0,
  frames: 0,
  speedrunTime: 0
};




function changeTheme() {
  if(game.theme > 0) {
    game.theme = 0;
  }
  else {
    game.theme++;
  }
}




function makeD0(a) {
  game.n = game.n.add(a);
  game.nT = game.nT.add(a);
}
function makeD1(a) {
  game.d1 = game.d1.add(a);
}
function makeD2(a) {
  game.d2 = game.d2.add(a);
}
function makeA0(a) {
  game.a = game.a.add(a);
}
function makeA1(a) {
  game.a1 = game.a1.add(a);
}
function makeA2(a) {
  game.a2 = game.a2.add(a);
}
function makeM0(a) {
  game.m = game.m.add(a);
}
function makeM1(a) {
  game.m1 = game.m1.add(a);
}


function buyD1() {
  if(game.n.gte(10)) {
    game.n = game.n.minus(10);
    game.d1 = game.d1.add(1);
    if(game.u[2])
      game.dm[1] = game.dm[1].mul(OmegaNum.tetrate(game.n, game.me));
    else
      game.dm[1] = game.dm[1].mul(game.me);
    
    document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
    document.getElementById('Dd1').innerHTML = game.d1.round().toHyperE();
    document.getElementById('Ddm1').innerHTML = OmegaNum.mul(game.dm[1], OmegaNum.add(1,game.de)).toHyperE();
  }
}
function maxD1() {
  let a = OmegaNum.floor(game.n.div(10));
  game.n = game.n.minus(OmegaNum.mul(a,10));
  game.d1 = game.d1.add(a);
  if(game.u[2])
    game.dm[1] = game.dm[1].mul(OmegaNum.pow(OmegaNum.tetrate(a, game.me), a));
  else
    game.dm[1] = game.dm[1].mul(OmegaNum.pow(game.me, a));
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd1').innerHTML = game.d1.round().toHyperE();
  document.getElementById('Ddm1').innerHTML = OmegaNum.mul(game.dm[1], OmegaNum.add(1,game.de)).toHyperE();
}
function maxD1A(b) {
  let a = OmegaNum.floor(new OmegaNum(b.div(10)));
  game.n = game.n.minus(OmegaNum.mul(a,10));
  game.d1 = game.d1.add(a);
  if(game.u[2])
    game.dm[1] = game.dm[1].mul(OmegaNum.pow(OmegaNum.tetrate(a, game.me), a));
  else
    game.dm[1] = game.dm[1].mul(OmegaNum.pow(game.me, a));
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd1').innerHTML = game.d1.round().toHyperE();
  document.getElementById('Ddm1').innerHTML = OmegaNum.mul(game.dm[1], OmegaNum.add(1,game.de)).toHyperE();
}

function buyD2() {
  if(game.n.gte(1e10)) {
    game.n = game.n.minus(1e10);
    game.d2 = game.d2.add(1);
    if(game.u[2])
      game.dm[2] = game.dm[2].mul(OmegaNum.tetrate(game.n, game.me));
    else
      game.dm[2] = game.dm[2].mul(game.me);
    
    document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
    document.getElementById('Dd2').innerHTML = game.d2.round().toHyperE();
    document.getElementById('Ddm2').innerHTML = OmegaNum.mul(game.dm[2], OmegaNum.add(1,game.de)).toHyperE();
  }
}
function maxD2() {
  let a = OmegaNum.floor(game.n.div(1e10));
  game.n = game.n.minus(OmegaNum.mul(a,1e10));
  game.d2 = game.d2.add(a);
  if(game.u[2])
    game.dm[2] = game.dm[2].mul(OmegaNum.pow(OmegaNum.tetrate(a, game.me), a));
  else
    game.dm[2] = game.dm[2].mul(OmegaNum.pow(game.me, a));
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd2').innerHTML = game.d2.round().toHyperE();
  document.getElementById('Ddm2').innerHTML = OmegaNum.mul(game.dm[2], OmegaNum.add(1,game.de)).toHyperE();
}
function maxD2A(b) {
  let a = OmegaNum.floor(new OmegaNum(b.div(1e10)));
  game.n = game.n.minus(OmegaNum.mul(a,1e10));
  game.d2 = game.d2.add(a);
  if(game.u[2])
    game.dm[2] = game.dm[2].mul(OmegaNum.pow(OmegaNum.tetrate(a, game.me), a));
  else
    game.dm[2] = game.dm[2].mul(OmegaNum.pow(game.me, a));
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd2').innerHTML = game.d2.round().toHyperE();
  document.getElementById('Ddm2').innerHTML = OmegaNum.mul(game.dm[2], OmegaNum.add(1,game.de)).toHyperE();
}

function buyD3() {
  if(game.n.gte("ee10")) {
    game.n = game.n.minus("ee10");
    game.d3 = game.d3.add(1);
    if(game.u[2])
      game.dm[3] = game.dm[3].mul(OmegaNum.tetrate(game.n, game.me));
    else
      game.dm[3] = game.dm[3].mul(game.me);
    
    document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
    document.getElementById('Dd3').innerHTML = game.d3.round().toHyperE();
    document.getElementById('Ddm3').innerHTML = OmegaNum.mul(game.dm[3], OmegaNum.add(1,game.de)).toHyperE();
  }
}
function maxD3() {
  let a = OmegaNum.floor(game.n.div("ee10"));
  game.n = game.n.minus(OmegaNum.mul(a,"ee10"));
  game.d3 = game.d3.add(a);
  if(game.u[2])
    game.dm[3] = game.dm[3].mul(OmegaNum.pow(OmegaNum.tetrate(a, game.me), a));
  else
    game.dm[3] = game.dm[3].mul(OmegaNum.pow(game.me, a));
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd3').innerHTML = game.d3.round().toHyperE();
  document.getElementById('Ddm3').innerHTML = OmegaNum.mul(game.dm[3], OmegaNum.add(1,game.de)).toHyperE();
}
function maxD3A(b) {
  let a = OmegaNum.floor(new OmegaNum(b.div("ee10")));
  game.n = game.n.minus(OmegaNum.mul(a,"ee10"));
  game.d3 = game.d3.add(a);
  if(game.u[2])
    game.dm[3] = game.dm[3].mul(OmegaNum.pow(OmegaNum.tetrate(a, game.me), a));
  else
    game.dm[3] = game.dm[3].mul(OmegaNum.pow(game.me, a));
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd3').innerHTML = game.d3.round().toHyperE();
  document.getElementById('Ddm3').innerHTML = OmegaNum.mul(game.dm[3], OmegaNum.add(1,game.de)).toHyperE();
}

function Max() {
  let a = OmegaNum.floor(new OmegaNum(game.n));
  if(a.gt("ee10000")) {
    maxD1A(a);
    maxD2A(a);
    maxD3A(a);
    game.n = new OmegaNum(a);
  }
  else if(a.lt(1e10)) {
    maxD1A(a);
  }
  else if (a.lt("ee10")){
    a = a.div(2);
    maxD1A(a);
    maxD2A(a);
  }
  else {
    a = a.div(3);
    maxD1A(a);
    maxD2A(a);
    maxD3A(a);
  }
}


function buyAu0() {
  if(!game.au[0] && game.n.gte(OmegaNum.pow(2,1024))) {
    game.n = game.n.minus(OmegaNum.pow(2,1024));
    game.au[0] = true;
    document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
    document.getElementById('Dau0').innerHTML = game.au[0];
    document.getElementById('aup0').className = "aP1";
  }
}
function buyAu1() {
  if(!game.au[1] && game.a.gte(OmegaNum.pow(2,1024))) {
    game.a = game.a.minus(OmegaNum.pow(2,1024));
    game.au[1] = true;
    document.getElementById('Da').innerHTML = game.a.round().toHyperE();
    document.getElementById('Dau1').innerHTML = game.au[1];
    document.getElementById('aup1').className = "aP2";
  }
}

function toggleAu1() {
  if(game.au[1]) {
    game.ta[1] = !game.ta[1];
    document.getElementById('Dta1').innerHTML = game.ta[1];
    let a = game.ta[1];
    if(a) document.getElementById('auT1').className = "aT1";
    else document.getElementById('auT1').className = "aT0";
  }
}



function buyRu1() {
  if(game.dp.gte(game.ruC[1])) {
    game.dp = game.dp.minus(game.ruC[1]);
    game.de = game.dp.pow(OmegaNum.pow(game.ru0P,game.ru[0]));
    game.ruC[1] = game.ruC[1].add(1000).round();
    game.a = game.a.add(1).round();
    
    document.getElementById('Da').innerHTML = game.a.round().toHyperE();
    document.getElementById('Ddp').innerHTML = game.dp.round().toHyperE();
    document.getElementById('Dde').innerHTML = game.de.round().toHyperE();
    document.getElementById('DruC1').innerHTML = game.ruC[1].toHyperE();
    if(game.dp.lt(game.ruC[1]))
    document.getElementById("ba").className = "b0a";
  }
}
function buyA1() {
  if(game.a.gte(10)) {
    game.a = game.a.minus(10);
    game.a1 = game.a1.add(1);
    
    document.getElementById('Da').innerHTML = game.a.round().toHyperE();
    document.getElementById('Da1').innerHTML = game.a1.round().toHyperE();
  }
}
function maxA1() {
  let a = OmegaNum.floor(game.a.div(10));
  game.a = game.a.minus(OmegaNum.mul(a,10));
  game.a1 = game.a1.add(a);
  
  document.getElementById('Da').innerHTML = game.a.round().toHyperE();
  document.getElementById('Da1').innerHTML = game.a1.round().toHyperE();
}
function maxA1A(b) {
  let a = OmegaNum.floor(new OmegaNum(b.div(10)));
  game.a = game.a.minus(OmegaNum.mul(a,10));
  game.a1 = game.a1.add(a);
  
  document.getElementById('Da').innerHTML = game.a.round().toHyperE();
  document.getElementById('Da1').innerHTML = game.a1.round().toHyperE();
}

function buyA2() {
  if(game.a.gte(1e10)) {
    game.a = game.a.minus(1e10);
    game.a2 = game.a2.add(1);
    
    document.getElementById('Da').innerHTML = game.a.round().toHyperE();
    document.getElementById('Da2').innerHTML = game.a2.round().toHyperE();
  }
}
function maxA2() {
  let a = OmegaNum.floor(game.a.div(1e10));
  game.a = game.a.minus(OmegaNum.mul(a,1e10));
  game.a2 = game.a2.add(a);
  
  document.getElementById('Da').innerHTML = game.a.round().toHyperE();
  document.getElementById('Da2').innerHTML = game.a2.round().toHyperE();
}
function maxA2A(b) {
  let a = OmegaNum.floor(new OmegaNum(b.div(1e10)));
  game.a = game.a.minus(OmegaNum.mul(a,1e10));
  game.a2 = game.a2.add(a);
  
  document.getElementById('Da').innerHTML = game.a.round().toHyperE();
  document.getElementById('Da2').innerHTML = game.a2.round().toHyperE();
}

function buyA3() {
  if(game.a.gte("ee10")) {
    game.a = game.a.minus("ee10");
    game.a3 = game.a3.add(1);
    
    document.getElementById('Da').innerHTML = game.a.round().toHyperE();
    document.getElementById('Da3').innerHTML = game.a3.round().toHyperE();
  }
}
function maxA3() {
  let a = OmegaNum.floor(game.a.div("ee10"));
  game.a = game.a.minus(OmegaNum.mul(a,"ee10"));
  game.a3 = game.a3.add(a);
  
  document.getElementById('Da').innerHTML = game.a.round().toHyperE();
  document.getElementById('Da3').innerHTML = game.a3.round().toHyperE();
}
function maxA3A(b) {
  let a = OmegaNum.floor(new OmegaNum(b.div("ee10")));
  game.a = game.a.minus(OmegaNum.mul(a,"ee10"));
  game.a3 = game.a3.add(a);
  
  document.getElementById('Da').innerHTML = game.a.round().toHyperE();
  document.getElementById('Da3').innerHTML = game.a3.round().toHyperE();
}


function MaxA() {
  let a = OmegaNum.floor(new OmegaNum(game.a));
  if(a.gt("ee10000")) {
    maxA1A(a);
    maxA2A(a);
    maxA3A(a);
    game.a = new OmegaNum(a);
  }
  else if(a.lt(1e10)) {
    maxA1A(a);
  }
  else if (a.lt("ee10")){
    a = a.div(2);
    maxA1A(a);
    maxA2A(a);
  }
  else {
    a = a.div(3);
    maxA1A(a);
    maxA2A(a);
    maxA3A(a);
  }
}



function buyRu3() {
  if(game.dp.gte(game.ruC[3])) {
    game.dp = game.dp.minus(game.ruC[3]);
    game.de = game.dp.pow(OmegaNum.pow(game.ru0P,game.ru[0]));
    
    let a = new OmegaNum(game.ruC[3]);
    a = OmegaNum.mul(2,OmegaNum.slog(a,10));
    game.ruC[3] = OmegaNum.tetrate(10, a);
    
    game.m = game.m.add(1).round();
    game.me = OmegaNum.add(1, OmegaNum.pow(OmegaNum.log10(OmegaNum.add(game.m,1)), 6));
    
    document.getElementById('Dm').innerHTML = game.m.round().toHyperE();
    document.getElementById('Dme').innerHTML = game.me.toHyperE();
    document.getElementById('Ddp').innerHTML = game.dp.round().toHyperE();
    document.getElementById('Dde').innerHTML = OmegaNum.add(1,game.de).round().toHyperE();
    document.getElementById('DruC3').innerHTML = game.ruC[3].toHyperE();
    if(game.dp.lt(game.ruC[3]))
    document.getElementById("bm").className = "b0m";
  }
}
function buyM1() {
  if(game.m.gte(10)) {
    game.m = game.m.minus(10);
    game.m1 = game.m1.add(1);
    
    document.getElementById('Dm').innerHTML = game.m.round().toHyperE();
    document.getElementById('Dm1').innerHTML = game.m1.round().toHyperE();
  }
}
function maxM1() {
  let a = OmegaNum.floor(game.m.div(10));
  game.m = game.m.minus(OmegaNum.mul(a,10));
  game.m1 = game.m1.add(a);
  
  document.getElementById('Dm').innerHTML = game.m.round().toHyperE();
  document.getElementById('Dm1').innerHTML = game.m1.round().toHyperE();
}
function maxM1A(b) {
  let a = OmegaNum.floor(new OmegaNum(b.div(10)));
  game.m = game.m.minus(OmegaNum.mul(a,10));
  game.m1 = game.m1.add(a);
  
  document.getElementById('Dm').innerHTML = game.m.round().toHyperE();
  document.getElementById('Dm1').innerHTML = game.m1.round().toHyperE();
}

function buyM2() {
  if(game.m.gte(1e10)) {
    game.m = game.m.minus(1e10);
    game.m2 = game.m2.add(1);
    
    document.getElementById('Dm').innerHTML = game.m.round().toHyperE();
    document.getElementById('Dm2').innerHTML = game.m2.round().toHyperE();
  }
}
function maxM2() {
  let a = OmegaNum.floor(game.m.div(1e10));
  game.m = game.m.minus(OmegaNum.mul(a,1e10));
  game.m2 = game.m2.add(a);
  
  document.getElementById('Dm').innerHTML = game.m.round().toHyperE();
  document.getElementById('Dm2').innerHTML = game.m2.round().toHyperE();
}
function maxM2A(b) {
  let a = OmegaNum.floor(new OmegaNum(b.div(1e10)));
  game.m = game.m.minus(OmegaNum.mul(a,1e10));
  game.m2 = game.m2.add(a);
  
  document.getElementById('Dm').innerHTML = game.m.round().toHyperE();
  document.getElementById('Dm2').innerHTML = game.m2.round().toHyperE();
}

function MaxM() {
  let a = OmegaNum.floor(new OmegaNum(game.m));
  if(game.m.lt(1e10)) {
    maxM1A(a);
  }
  else {
    a = a.div(2);
    maxM1A(a);
    maxM2A(a);
  }
}


function buyAu2() {
  if(!game.au[2] && game.m.gte(OmegaNum.pow(2,1024))) {
    game.m = game.m.minus(OmegaNum.pow(2,1024));
    game.au[2] = true;
    document.getElementById('Dm').innerHTML = game.m.round().toHyperE();
    document.getElementById('Dau2').innerHTML = game.au[2];
    document.getElementById('aup2').className = "aP3";
  }
}

function toggleAu2() {
  if(game.au[2]) {
    game.ta[2] = !game.ta[2];
    document.getElementById('Dta2').innerHTML = game.ta[2];
    let a = game.ta[2];
    if(a) document.getElementById('auT2').className = "aT1";
    else document.getElementById('auT2').className = "aT0";
  }
}






function p1() { 
  if(game.n.gte(1000)) {
    if(!game.u[1]) {
      game.au[0] = false;
      document.getElementById("aup0").className = "aNA";
    }
    let a = game.n.logBase(10).floor().minus(2).round();
    if(game.u[0])
      a = OmegaNum.mul(a,OmegaNum.log10(OmegaNum.add(10, game.dp)));
    if(game.u[3]) 
      a = OmegaNum.tetrate(a, game.ae);
    else
      a = OmegaNum.mul(a, game.ae);
    
    game.dp = game.dp.add(a);
    game.de = game.dp.pow(OmegaNum.pow(game.ru0P,game.ru[0]));
    game.d3 = new OmegaNum(0);
    game.d2 = new OmegaNum(0);
    game.d1 = new OmegaNum(0);
    game.n = new OmegaNum(10);
    
    document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
    document.getElementById('Dd1').innerHTML = game.d1.round().toHyperE();
    document.getElementById('Dd2').innerHTML = game.d2.round().toHyperE();
    document.getElementById('Dd3').innerHTML = game.d3.round().toHyperE();
    document.getElementById('Ddp').innerHTML = game.dp.round().toHyperE();
    document.getElementById('Dde').innerHTML = OmegaNum.add(1,game.de).round().toHyperE();
    document.getElementById('Dau0').innerHTML = game.au[0];
    
    if(game.dp.gte(game.ruC[0])) {
    document.getElementById("du01").className = "du2";
    document.getElementById("du0M").className = "du2";
  }
  else {
    document.getElementById("du01").className = "du1";
    document.getElementById("du0M").className = "du1";
  }
  if(game.dp.gte(game.ru2C[Math.round(game.ru[2])]))
    document.getElementById("du02").className = "du2";
  else document.getElementById("du02").className = "du1";
    if(game.u[0])
    document.getElementById("du03").className = "du3";
  else if(game.dp.gte(1e100))
    document.getElementById("du03").className = "du2";
  else
    document.getElementById("du03").className = "du1";
  if(game.u[1])
    document.getElementById("du04").className = "du3";
  else if(game.dp.gte(1e200))
    document.getElementById("du04").className = "du2";
  else
    document.getElementById("du04").className = "du1";
  if(game.u[2])
    document.getElementById("du05").className = "du3";
  else if(game.dp.gte("10^^100"))
    document.getElementById("du05").className = "du2";
  else
    document.getElementById("du05").className = "du1";
  if(game.u[3])
    document.getElementById("du06").className = "du3";
  else if(game.dp.gte("10^^7625597484987"))
    document.getElementById("du06").className = "du2";
  else
    document.getElementById("du06").className = "du1";
    
    if(game.dp.gte(game.ruC[1]))
    document.getElementById("ba").className = "b1a";
  else
    document.getElementById("ba").className = "b0a";
  if(game.dp.gte(game.ruC[3]))
    document.getElementById("bm").className = "b1m";
  else
    document.getElementById("bm").className = "b0m";
  }
}


function buyRu0() {
  if(game.dp.gte(game.ruC[0])) {
    game.dp = game.dp.minus(game.ruC[0]);
    game.ru[0] = game.ru[0].add(1);
    game.ruC[0] = game.ruC[0].mul(20);
    game.de = game.dp.pow(OmegaNum.pow(game.ru0P,game.ru[0]));
    
    document.getElementById('Ddp').innerHTML = game.dp.round().toHyperE();
    document.getElementById('Dde').innerHTML = OmegaNum.add(1,game.de).round().toHyperE();
    document.getElementById('Dru0').innerHTML = game.ru[0].toHyperE();
    document.getElementById('Dru0C').innerHTML = game.ruC[0].toHyperE();
    
    if(game.dp.gte(game.ruC[0])) {
    document.getElementById("du01").className = "du2";
    document.getElementById("du0M").className = "du2";
  }
  else {
    document.getElementById("du01").className = "du1";
    document.getElementById("du0M").className = "du1";
  }
  if(game.dp.gte(game.ru2C[Math.round(game.ru[2])]))
    document.getElementById("du02").className = "du2";
  else document.getElementById("du02").className = "du1";
    if(game.u[0])
    document.getElementById("du03").className = "du3";
  else if(game.dp.gte(1e100))
    document.getElementById("du03").className = "du2";
  else
    document.getElementById("du03").className = "du1";
  if(game.u[1])
    document.getElementById("du04").className = "du3";
  else if(game.dp.gte(1e200))
    document.getElementById("du04").className = "du2";
  else
    document.getElementById("du04").className = "du1";
    
    if(game.dp.gte(game.ruC[1]))
    document.getElementById("ba").className = "b1a";
  else
    document.getElementById("ba").className = "b0a";
  if(game.dp.gte(game.ruC[3]))
    document.getElementById("bm").className = "b1m";
  else
    document.getElementById("bm").className = "b0m";
  }
}
function buyRu0M() {
  let a = OmegaNum.div(OmegaNum.div(game.dp,game.ruC[0]), 1.0526316);
  a = a.logBase(20).ceil();
  
  if(a.gt(4)) {
    game.ruC[0] = game.ruC[0].mul(OmegaNum.pow(20, a));
    let b = game.ruC[0].div(OmegaNum.pow(20,4));
    let c = OmegaNum.mul(b, OmegaNum.div(OmegaNum.minus(1, OmegaNum.pow(20,4)), -19)).round();
    game.dp = game.dp.minus(c);
    game.ru[0] = game.ru[0].add(a);
    game.de = game.dp.pow(OmegaNum.pow(game.ru0P,game.ru[0]));
    
    document.getElementById('Ddp').innerHTML = game.dp.round().toHyperE();
    document.getElementById('Dde').innerHTML = OmegaNum.add(1,game.de).round().toHyperE();
    document.getElementById('Dru0').innerHTML = game.ru[0].toHyperE();
    document.getElementById('Dru0C').innerHTML = game.ruC[0].toHyperE();
  }
  else if(a.gt(0)) {
    for(let i = new OmegaNum(0); i.lt(a); i = i.add(1.1)) {
      buyRu0();
    }
  }
  
  if(game.dp.gte(game.ruC[0])) {
    document.getElementById("du01").className = "du2";
    document.getElementById("du0M").className = "du2";
  }
  else {
    document.getElementById("du01").className = "du1";
    document.getElementById("du0M").className = "du1";
  }
  if(game.dp.gte(game.ru2C[Math.round(game.ru[2])]))
    document.getElementById("du02").className = "du2";
  else document.getElementById("du02").className = "du1";
    if(game.u[0])
    document.getElementById("du03").className = "du3";
  else if(game.dp.gte(1e100))
    document.getElementById("du03").className = "du2";
  else
    document.getElementById("du03").className = "du1";
  if(game.u[1])
    document.getElementById("du04").className = "du3";
  else if(game.dp.gte(1e200))
    document.getElementById("du04").className = "du2";
  else
    document.getElementById("du04").className = "du1";
  
  if(game.dp.gte(game.ruC[1]))
    document.getElementById("ba").className = "b1a";
  else
    document.getElementById("ba").className = "b0a";
  if(game.dp.gte(game.ruC[3]))
    document.getElementById("bm").className = "b1m";
  else
    document.getElementById("bm").className = "b0m";
}


function buyRu2() {
  if(game.ru[2] < 8.5 && game.dp.gte(game.ru2C[game.ru[2]])) {
    game.dp = game.dp.minus(game.ru2C[game.ru[2]]);
    game.ru[2]++;
    Math.round(game.ru[2]);
    game.ru0P = game.ru0P.add(2);
    game.de = game.dp.pow(OmegaNum.pow(game.ru0P,game.ru[0]));
    
    document.getElementById('Ddp').innerHTML = game.dp.round().toHyperE();
    document.getElementById('Dde').innerHTML = OmegaNum.add(1,game.de).round().toHyperE();
    document.getElementById('Dru0P').innerHTML = game.ru0P.round().toHyperE();
    document.getElementById('Dru2C').innerHTML = game.ru2C[game.ru[2]].toHyperE();
    if(game.ru[2] > 8.5) 
      document.getElementById('Dru2M').innerHTML = "Buy Max";
    else document.getElementById('Dru2M').innerHTML = "Buy";
  }
  else if(game.ru[2] > 8.5 && game.dp.gte(game.ru2C[game.ru[2]])) {
    game.ru[3] = game.ru[3].add(OmegaNum.div(game.dp, "e6969"));
    game.dp = new OmegaNum("e6969");
    game.dp = OmegaNum.mul(Math.random(), game.dp);
    game.ru0P = OmegaNum.add(OmegaNum.mul(game.ru[3], 2), 4);
    game.de = game.dp.pow(OmegaNum.pow(game.ru0P,game.ru[0]));
    
    document.getElementById('Ddp').innerHTML = game.dp.round().toHyperE();
    document.getElementById('Dde').innerHTML = OmegaNum.add(1,game.de).round().toHyperE();
    document.getElementById('Dru0P').innerHTML = game.ru0P.round().toHyperE();
    document.getElementById('Dru2C').innerHTML = game.ru2C[game.ru[2]].toHyperE();
  }
  if(game.dp.gte(game.ruC[0])) {
    document.getElementById("du01").className = "du2";
    document.getElementById("du0M").className = "du2";
  }
  else {
    document.getElementById("du01").className = "du1";
    document.getElementById("du0M").className = "du1";
  }
  if(game.dp.gte(game.ru2C[Math.round(game.ru[2])]))
    document.getElementById("du02").className = "du2";
  else document.getElementById("du02").className = "du1";
    if(game.u[0])
    document.getElementById("du03").className = "du3";
  else if(game.dp.gte(1e100))
    document.getElementById("du03").className = "du2";
  else
    document.getElementById("du03").className = "du1";
  if(game.u[1])
    document.getElementById("du04").className = "du3";
  else if(game.dp.gte(1e200))
    document.getElementById("du04").className = "du2";
  else
    document.getElementById("du04").className = "du1";
  
  if(game.dp.gte(game.ruC[1]))
    document.getElementById("ba").className = "b1a";
  else
    document.getElementById("ba").className = "b0a";
  if(game.dp.gte(game.ruC[3]))
    document.getElementById("bm").className = "b1m";
  else
    document.getElementById("bm").className = "b0m";
}


function buyU0() {
  if(!game.u[0] && game.dp.gte(1e100)) {
    game.dp = game.dp.minus(1e100);
    game.de = game.dp.pow(OmegaNum.pow(game.ru0P,game.ru[0]));
    game.u[0] = true;
    document.getElementById('Ddp').innerHTML = game.dp.round().toHyperE();
    document.getElementById('Dde').innerHTML = OmegaNum.add(1,game.de).round().toHyperE();
    document.getElementById('Du0').innerHTML = game.u[0];
    document.getElementById("du03").className = "du3";
    if(game.dp.gte(game.ruC[0])) {
    document.getElementById("du01").className = "du2";
    document.getElementById("du0M").className = "du2";
  }
  else {
    document.getElementById("du01").className = "du1";
    document.getElementById("du0M").className = "du1";
  }
  if(game.dp.gte(game.ru2C[Math.round(game.ru[2])]))
    document.getElementById("du02").className = "du2";
  else document.getElementById("du02").className = "du1";
  }
}

function buyU1() {
  if(!game.u[1] && game.dp.gte(1e200)) {
    game.dp = game.dp.minus(1e200);
    game.de = game.dp.pow(OmegaNum.pow(game.ru0P,game.ru[0]));
    game.u[1] = true;
    document.getElementById('Ddp').innerHTML = game.dp.round().toHyperE();
    document.getElementById('Dde').innerHTML = OmegaNum.add(1,game.de).round().toHyperE();
    document.getElementById('Du1').innerHTML = game.u[1];
    document.getElementById("du04").className = "du3";
    if(game.dp.gte(game.ruC[0])) {
    document.getElementById("du01").className = "du2";
    document.getElementById("du0M").className = "du2";
  }
  else {
    document.getElementById("du01").className = "du1";
    document.getElementById("du0M").className = "du1";
  }
  if(game.dp.gte(game.ru2C[Math.round(game.ru[2])]))
    document.getElementById("du02").className = "du2";
  else document.getElementById("du02").className = "du1";
  }
}

function buyU2() {
  if(!game.u[2] && game.dp.gte("10^^100")) {
    game.u[2] = true;
    document.getElementById('Du2').innerHTML = game.u[2];
    document.getElementById('Dme0').innerHTML = "(null matter)^^";
    document.getElementById("du05").className = "du3";
  }
}

function buyU3() {
  if(!game.u[3] && game.dp.gte("10^^7625597484987")) {
    game.u[3] = true;
    document.getElementById('Du3').innerHTML = game.u[3];
    document.getElementById('Dah').innerHTML = "tetrating";
    document.getElementById("du06").className = "du3";
  }
}




function runEndSequence() {
  game.speedrunTime = Math.round(game.frames);
  save();
  let h = game.speedrunTime % 90000;
  let m = game.speedrunTime % 1500;
  let s = game.speedrunTime % 25;
  let cs = (game.speedrunTime * 4) % 100;
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s + "." + cs;
  
}




setInterval(function() {
  if(game.frames % 15 < 5)
    document.getElementById("hr").className = "hr1";
  else
    document.getElementById("hr").className = "hr2";
}, 200);







setInterval(function() {
  if(game.au[0]) {
    Max();
  }
  if(game.ta[1]) {
    MaxA();
  }
  if(game.ta[2]) {
    MaxM();
  }
  
  makeD0(game.d1.div(25).mul(OmegaNum.mul(game.dm[1], OmegaNum.add(1,game.de))));
  makeD1(game.d2.mul(1e8).mul(OmegaNum.mul(game.dm[2], OmegaNum.add(1,game.de))));
  makeD2(game.d3.mul("ee10").mul(OmegaNum.mul(game.dm[3], OmegaNum.add(1,game.de))));
  
  game.am = OmegaNum.pow(10000, OmegaNum.minus(OmegaNum.slog(game.n, 10), 3));
  makeA0(game.a1.mul(game.am).div(25));
  makeA1(game.a2.mul(game.am).mul(1e8));
  makeA2(game.a3.mul(game.am).mul("ee10"));
  
  game.mm = OmegaNum.minus(OmegaNum.pow(1e7,OmegaNum.pow(1e5,OmegaNum.minus(OmegaNum.slog(game.a,10),3.2))),1);
  makeM0(game.m1.mul(game.mm).div(25));
  makeM1(game.m2.mul(game.mm).mul(1e8));
  
  if(game.u[3]) {
    game.ae = OmegaNum.div(OmegaNum.log10(game.a), 3000);
  }
  else
    game.ae = OmegaNum.add(1, OmegaNum.pow(OmegaNum.log10(OmegaNum.add(game.a,1)), 3));
  
  game.me = OmegaNum.add(1, OmegaNum.pow(OmegaNum.log10(OmegaNum.add(game.m,1)), 4));
  
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd1').innerHTML = game.d1.round().toHyperE();
  document.getElementById('Dd2').innerHTML = game.d2.round().toHyperE();
  if(game.n.logBase(10).floor().minus(2).gt(0) && game.u[3])
    document.getElementById('DdpP').innerHTML = OmegaNum.mul(OmegaNum.log10(OmegaNum.add(10, game.dp)), OmegaNum.tetrate(game.n.logBase(10).floor().minus(2), game.ae)).round().toHyperE();
  else if(game.n.logBase(10).floor().minus(2).gt(0) && game.u[0]) 
    document.getElementById('DdpP').innerHTML = OmegaNum.mul(OmegaNum.mul(game.ae,OmegaNum.log10(OmegaNum.add(10, game.dp))), game.n.logBase(10).floor().minus(2)).round().toHyperE();
  else if(game.n.logBase(10).floor().minus(2).gt(0))
    document.getElementById('DdpP').innerHTML = OmegaNum.mul(game.ae, game.n.logBase(10).floor().minus(2)).round().toHyperE();
  else 
    document.getElementById('DdpP').innerHTML = 0;
  document.getElementById('Da').innerHTML = game.a.round().toHyperE();
  document.getElementById('Da1').innerHTML = game.a1.round().toHyperE();
  document.getElementById('Da2').innerHTML = game.a2.round().toHyperE();
  document.getElementById('Dam').innerHTML = game.am.toHyperE();
  document.getElementById('Dae').innerHTML = game.ae.toHyperE();
  document.getElementById('Dm').innerHTML = game.m.round().toHyperE();
  document.getElementById('Dm1').innerHTML = game.m1.round().toHyperE();
  document.getElementById('Dmm').innerHTML = game.mm.toHyperE();
  document.getElementById('Dme').innerHTML = game.me.toHyperE();
  
  if(game.n.gte(1.79768e308) && !game.au[0])
    document.getElementById("aup0").className = "aA1";
  if(game.a.gte(1.79768e308) && !game.au[1])
    document.getElementById("aup1").className = "aA2";
  if(game.m.gte(1.79768e308) && !game.au[2])
    document.getElementById("aup2").className = "aA3";
  
  game.frames++;
  if(game.n.gt("10^^1e16"))
    runEndSequence();
}, 40);

setInterval(function() {
  if(game.nT.gte(1000)) {
    document.getElementById('disB').style.display = 'inline-block';
  }
  if(game.nT.gt("1e2000")) {
    document.getElementById('dimB2').style.display = 'inline-block';
  }
  else
    document.getElementById('dimB2').style.display = 'none';
  if(game.nT.gte("eee10")) {
    document.getElementById('dimB3').style.display = 'inline-block';
  }
  
  if(game.nT.gt("10^^6")) {
    document.getElementById('prestigeTab1.2').style.display = 'inline-block';
  }
  else
    document.getElementById('prestigeTab1.2').style.display = 'none';
  /*if(game.nT.gt("10^^308")) {
  document.getElementById('prestigeTab1.3').style.display = 'inline-block';
  }
    else
      document.getElementById('prestigeTab1.3').style.display = 'none';*/
  
  let a = Math.round(game.frames);
  let h = Math.floor(a/90000);
  let m = Math.floor(a/1500) % 60;
  let s = Math.floor(a/25) % 60;
  let sm = "";
  let ss = "";
  if(m < 10)
    sm += "0";
  if(s < 10)
    ss += "0";
  sm += m;
  ss += s;
  document.getElementById("timePlayed").innerHTML = h + ":" + sm + ":" + ss;
}, 1000);



function tab(tab) {
	// hide all your tabs, then show the one the user selected.
	document.getElementById("dimTab").style.display = "none";
	document.getElementById("prestigeTab1.1").style.display = "none";
  document.getElementById("dimTab2").style.display = "none";
  document.getElementById("dimTab3").style.display = "none";
	document.getElementById("optionsTab").style.display = "none";
	document.getElementById("changelogTab").style.display = "none";
	document.getElementById(tab).style.display = "inline-block";
}


setInterval(function() {
  save();
}, 6969);

function updateEverything() {
  game.ru2C = [new OmegaNum(1e10), new OmegaNum(1e20), new OmegaNum(1e30), new OmegaNum(1e40), new OmegaNum(1e55), new OmegaNum(1e80), new OmegaNum(1e150), new OmegaNum(OmegaNum.pow(2,1024)), new OmegaNum("e1000"), new OmegaNum("e6969")];
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd1').innerHTML = game.d1.round().toHyperE();
  document.getElementById('Dd2').innerHTML = game.d2.round().toHyperE();
  document.getElementById('Dd3').innerHTML = game.d3.round().toHyperE();
  if(game.n.logBase(10).floor().minus(2).gt(0) && game.u[0]) 
    document.getElementById('DdpP').innerHTML = OmegaNum.mul(OmegaNum.mul(game.ae,OmegaNum.log10(OmegaNum.add(10, game.dp))), game.n.logBase(10).floor().minus(2)).round().toHyperE();
  else if(game.n.logBase(10).floor().minus(2).gt(0))
    document.getElementById('DdpP').innerHTML = OmegaNum.mul(game.ae, game.n.logBase(10).floor().minus(2)).round().toHyperE();
  else 
    document.getElementById('DdpP').innerHTML = 0;
  document.getElementById('Ddp').innerHTML = game.dp.round().toHyperE();
  document.getElementById('Dde').innerHTML = OmegaNum.add(1,game.de).round().toHyperE();
  document.getElementById('Du0').innerHTML = game.u[0];
  document.getElementById('Du1').innerHTML = game.u[1];
  document.getElementById('Du2').innerHTML = game.u[2];
  document.getElementById('Du3').innerHTML = game.u[3];
  document.getElementById('Dau0').innerHTML = game.au[0];
  document.getElementById('Dau1').innerHTML = game.au[1];
  document.getElementById('Dau2').innerHTML = game.au[2];
  document.getElementById('Dta1').innerHTML = game.ta[1];
  document.getElementById('Dta2').innerHTML = game.ta[2];
  document.getElementById('Dru0').innerHTML = game.ru[0].toHyperE();
  document.getElementById('Dru0C').innerHTML = game.ruC[0].toHyperE();
  document.getElementById('Dru0P').innerHTML = game.ru0P.round().toHyperE();
  document.getElementById('Dru2C').innerHTML = game.ru2C[game.ru[2]].toHyperE();
  if(game.ru[2] > 8.5) 
      document.getElementById('Dru2M').innerHTML = "Buy Max";
  else document.getElementById('Dru2M').innerHTML = "Buy";
  document.getElementById('Da').innerHTML = game.a.round().toHyperE();
  document.getElementById('DruC1').innerHTML = game.ruC[1].toHyperE();
  document.getElementById('Da1').innerHTML = game.a1.round().toHyperE();
  document.getElementById('Da2').innerHTML = game.a2.round().toHyperE();
  document.getElementById('Da3').innerHTML = game.a3.round().toHyperE();
  document.getElementById('Dae').innerHTML = game.ae.toHyperE();
  document.getElementById('Dam').innerHTML = game.am.toHyperE();
  document.getElementById('Dm').innerHTML = game.m.round().toHyperE();
  document.getElementById('Dm1').innerHTML = game.m1.round().toHyperE();
  document.getElementById('Dm2').innerHTML = game.m2.round().toHyperE();
  document.getElementById('Dmm').innerHTML = game.mm.toHyperE();
  document.getElementById('Dme').innerHTML = game.me.toHyperE();
  document.getElementById('DruC3').innerHTML = game.ruC[3].toHyperE();
  document.getElementById('Ddm1').innerHTML = OmegaNum.mul(game.dm[1], OmegaNum.add(1,game.de)).toHyperE();
  document.getElementById('Ddm2').innerHTML = OmegaNum.mul(game.dm[2], OmegaNum.add(1,game.de)).toHyperE();
  document.getElementById('Ddm3').innerHTML = OmegaNum.mul(game.dm[3], OmegaNum.add(1,game.de)).toHyperE();
  document.getElementById('Dme').innerHTML = game.me.toHyperE();
  
  if(game.ru[2] > 8.5) 
      document.getElementById('Dru2M').innerHTML = "Buy Max";
  else
    document.getElementById('Dru2M').innerHTML = "Buy";
  if(game.u[2])
    document.getElementById('Dme0').innerHTML = "(null matter)^^";
  else
    document.getElementById('Dme0').innerHTML = "";
  if(game.u[3])
    document.getElementById('Dah').innerHTML = "tetrating";
  else
    document.getElementById('Dah').innerHTML = "multiplying";
  
  if(game.nT.gte(1000)) {
    document.getElementById('disB').style.display = 'inline-block';
  }
  else
    document.getElementById('disB').style.display = 'none';
  if(game.nT.gte("eee10")) {
    document.getElementById('dimB3').style.display = 'inline-block';
  }
  else
    document.getElementById('dimB3').style.display = 'none';
  if(game.nT.gt("1e2000")) {
    document.getElementById('dimB2').style.display = 'inline-block';
  }
  else
    document.getElementById('dimB2').style.display = 'none';
  
  if(game.nT.gt("10^^6")) {
    document.getElementById('prestigeTab1.2').style.display = 'inline-block';
  }
  else
    document.getElementById('prestigeTab1.2').style.display = 'none';
  /*if(game.nT.gt("10^^308")) {
  document.getElementById('prestigeTab1.3').style.display = 'inline-block';
  }
    else
      document.getElementById('prestigeTab1.3').style.display = 'none';
  
  document.getElementById("game").style.display = "block";*/
  
  if(game.au[0])
    document.getElementById("aup0").className = "aP1";
  else if(game.n.gte(1.79768e308))
    document.getElementById("aup0").className = "aA1";
  else
    document.getElementById("aup0").className = "aNA";
  if(game.au[1])
    document.getElementById("aup1").className = "aP2";
  else if(game.a.gte(1.79768e308))
    document.getElementById("aup1").className = "aA2";
  else
    document.getElementById("aup1").className = "aNA"; 
  if(game.au[2])
    document.getElementById("aup2").className = "aP3";
  else if(game.m.gte(1.79768e308))
    document.getElementById("aup2").className = "aA3";
  else
    document.getElementById("aup2").className = "aNA";
  
  if(game.ta[1]) document.getElementById('auT1').className = "aT1";
    else document.getElementById('auT1').className = "aT0";
  if(game.ta[2]) document.getElementById('auT2').className = "aT1";
    else document.getElementById('auT2').className = "aT0";
  
  if(game.dp.gte(game.ruC[0])) {
    document.getElementById("du01").className = "du2";
    document.getElementById("du0M").className = "du2";
  }
  else {
    document.getElementById("du01").className = "du1";
    document.getElementById("du0M").className = "du1";
  }
  if(game.dp.gte(game.ru2C[Math.round(game.ru[2])]))
    document.getElementById("du02").className = "du2";
  else document.getElementById("du02").className = "du1";
  
  if(game.u[0])
    document.getElementById("du03").className = "du3";
  else if(game.dp.gte(1e100))
    document.getElementById("du03").className = "du2";
  else
    document.getElementById("du03").className = "du1";
  if(game.u[1])
    document.getElementById("du04").className = "du3";
  else if(game.dp.gte(1e200))
    document.getElementById("du04").className = "du2";
  else
    document.getElementById("du04").className = "du1";
  if(game.u[2])
    document.getElementById("du05").className = "du3";
  else if(game.dp.gte("10^^100"))
    document.getElementById("du05").className = "du2";
  else
    document.getElementById("du05").className = "du1";
  if(game.u[3])
    document.getElementById("du06").className = "du3";
  else if(game.dp.gte("10^^7625597484987"))
    document.getElementById("du06").className = "du2";
  else
    document.getElementById("du06").className = "du1";
  
  if(game.dp.gte(game.ruC[1]))
    document.getElementById("ba").className = "b1a";
  else
    document.getElementById("ba").className = "b0a";
  if(game.dp.gte(game.ruC[3]))
    document.getElementById("bm").className = "b1m";
  else
    document.getElementById("bm").className = "b0m";
  
  if(game.frames % 15 < 5)
    document.getElementById("hr").className = "hr1";
  else
    document.getElementById("hr").className = "hr2";
  
  let a = Math.round(game.frames);
  let h = Math.floor(a/90000);
  let m = Math.floor(a/1500) % 60;
  let s = Math.floor(a/25) % 60;
  let sm = "";
  let ss = "";
  if(m < 10)
    sm += "0";
  if(s < 10)
    ss += "0";
  sm += m;
  ss += s;
  document.getElementById("timePlayed").innerHTML = h + ":" + sm + ":" + ss;
}


function hardReset() {
  game.au[0] = false;
  game.au[1] = false;
  game.au[2] = false;
  game.ta[1] = false;
  game.ta[2] = false;
  game.ru0P = new OmegaNum(4);
  game.ru[0] = new OmegaNum(0);
  game.ru[1] = new OmegaNum(0);
  game.ru[2] = 0;
  game.ru[3] = new OmegaNum(9);
  game.ruC[0] = new OmegaNum(5000);
  game.ruC[1] = new OmegaNum(1000);
  game.ru2C = [new OmegaNum(1e10), new OmegaNum(1e20), new OmegaNum(1e30), new OmegaNum(1e40), new OmegaNum(1e55), new OmegaNum(1e80), new OmegaNum(1e150), new OmegaNum(OmegaNum.pow(2,1024)), new OmegaNum("e1000"), new OmegaNum("e6969")];
  game.ruC[3] = new OmegaNum("eee10");
  game.u[0] = false;
  game.u[1] = false;
  game.u[2] = false;
  game.u[3] = false;
  game.mm = new OmegaNum(0);
  game.m2 = new OmegaNum(0);
  game.m1 = new OmegaNum(0);
  game.me = new OmegaNum(1);
  game.m = new OmegaNum(0);
  game.am = new OmegaNum(0);
  game.ae = new OmegaNum(0);
  game.a3 = new OmegaNum(0);
  game.a2 = new OmegaNum(0);
  game.a1 = new OmegaNum(0);
  game.a = new OmegaNum(0);
  game.dp = new OmegaNum(0);
  game.de = new OmegaNum(0);
  game.dm = [0, new OmegaNum(1), new OmegaNum(1), new OmegaNum(1)];
  game.d3 = new OmegaNum(0);
  game.d2 = new OmegaNum(0);
  game.d1 = new OmegaNum(0);
  game.n = new OmegaNum(10);
  game.nT = new OmegaNum(10);
  game.theme = 0;
  game.frames = 0;
  
  updateEverything();
}
load();
updateEverything();
tab('dimTab');
scrollNextMessage();
