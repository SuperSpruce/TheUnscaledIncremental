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
  ae: new OmegaNum(0),  //antimatter effect
  am: new OmegaNum(0),  //multiplier of antimatter dimensions
  m: new OmegaNum(0),  //matter (regular matter)
  me: new OmegaNum(1),  //matter effect
  //mm: new OmegaNum(0),  //multiplier of matter dimensions
  dp: new OmegaNum(0),  //discovery points
  de: new OmegaNum(0),  //effect of discovery points
  u: [false, false],  //upgrades
  ru: [new OmegaNum(0), new OmegaNum(0), 0, new OmegaNum(9)],  //repeatable upgrades
  ruC: [new OmegaNum(5000), new OmegaNum(1000), 0, new OmegaNum("eee25")],  //cost of repeatable upgrades
  au: [false, false],  //automation upgrades
  ta: [0, false],  //toggle automation
  ru0P: new OmegaNum(4),  //effect of the first repeatable upgrade
  ru2C: [new OmegaNum(1e10), new OmegaNum(1e20), new OmegaNum(1e30), new OmegaNum(1e40), new OmegaNum(1e55), new OmegaNum(1e80), new OmegaNum(1e150), new OmegaNum(OmegaNum.pow(2,1024)), new OmegaNum("e1000"), new OmegaNum("e6969")]  //cost of the third repeatable upgrade
};



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


function buyD1() {
  if(game.n.gte(10)) {
    game.n = game.n.minus(10);
    game.d1 = game.d1.add(1);
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
  game.dm[1] = game.dm[1].mul(OmegaNum.pow(game.me, a));
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd1').innerHTML = game.d1.round().toHyperE();
  document.getElementById('Ddm1').innerHTML = OmegaNum.mul(game.dm[1], OmegaNum.add(1,game.de)).toHyperE();
}
function maxD1A(b) {
  let a = OmegaNum.floor(new OmegaNum(b.div(10)));
  game.n = game.n.minus(OmegaNum.mul(a,10));
  game.d1 = game.d1.add(a);
  game.dm[1] = game.dm[1].mul(OmegaNum.pow(game.me, a));
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd1').innerHTML = game.d1.round().toHyperE();
  document.getElementById('Ddm1').innerHTML = OmegaNum.mul(game.dm[1], OmegaNum.add(1,game.de)).toHyperE();
}

function buyD2() {
  if(game.n.gte(1e10)) {
    game.n = game.n.minus(1e10);
    game.d2 = game.d2.add(1);
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
  game.dm[2] = game.dm[2].mul(OmegaNum.pow(game.me, a));
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd2').innerHTML = game.d2.round().toHyperE();
  document.getElementById('Ddm2').innerHTML = OmegaNum.mul(game.dm[2], OmegaNum.add(1,game.de)).toHyperE();
}
function maxD2A(b) {
  let a = OmegaNum.floor(new OmegaNum(b.div(1e10)));
  game.n = game.n.minus(OmegaNum.mul(a,1e10));
  game.d2 = game.d2.add(a);
  game.dm[2] = game.dm[2].mul(OmegaNum.pow(game.me, a));
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd2').innerHTML = game.d2.round().toHyperE();
  document.getElementById('Ddm2').innerHTML = OmegaNum.mul(game.dm[2], OmegaNum.add(1,game.de)).toHyperE();
}

function buyD3() {
  if(game.n.gte("ee10")) {
    game.n = game.n.minus("ee10");
    game.d3 = game.d3.add(1);
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
  game.dm[3] = game.dm[3].mul(OmegaNum.pow(game.me, a));
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd3').innerHTML = game.d3.round().toHyperE();
  document.getElementById('Ddm3').innerHTML = OmegaNum.mul(game.dm[3], OmegaNum.add(1,game.de)).toHyperE();
}
function maxD3A(b) {
  let a = OmegaNum.floor(new OmegaNum(b.div("ee10")));
  game.n = game.n.minus(OmegaNum.mul(a,"ee10"));
  game.d3 = game.d3.add(a);
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
  }
}
function buyAu1() {
  if(!game.au[1] && game.a.gte(OmegaNum.pow(2,1024))) {
    game.a = game.a.minus(OmegaNum.pow(2,1024));
    game.au[1] = true;
    document.getElementById('Da').innerHTML = game.a.round().toHyperE();
    document.getElementById('Dau1').innerHTML = game.au[1];
  }
}

function toggleAu1() {
  if(game.au[1]) {
    game.ta[1] = !game.ta[1];
    document.getElementById('Dta1').innerHTML = game.ta[1];
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

function MaxA() {
  let a = OmegaNum.floor(new OmegaNum(game.a));
  if(a.lt(1e10)) {
    maxA1A(a);
  }
  else {
    a = a.div(2);
    maxA1A(a);
    maxA2A(a);
  }
}



function buyRu3() {
  if(game.dp.gte(game.ruC[3])) {
    game.dp = game.dp.minus(game.ruC[3]);
    game.de = game.dp.pow(OmegaNum.pow(game.ru0P,game.ru[0]));
    game.ruC[3] = OmegaNum.pow(10,game.ruC[3]);
    game.m = game.m.add(1).round();
    game.me = OmegaNum.add(1, OmegaNum.pow(OmegaNum.div(game.m, 10), 5));
    
    document.getElementById('Dm').innerHTML = game.m.round().toHyperE();
    document.getElementById('Dme').innerHTML = game.me.toHyperE();
    document.getElementById('Ddp').innerHTML = game.dp.round().toHyperE();
    document.getElementById('Dde').innerHTML = OmegaNum.add(1,game.de).round().toHyperE();
    document.getElementById('DruC3').innerHTML = game.ruC[3].toHyperE();
  }
}






function p1() { 
  if(game.n.gte(1000)) {
    if(!game.u[1])
      game.au[0] = false;
    let a = OmegaNum.mul(game.ae, game.n.logBase(10).floor().minus(2)).round();
    if(game.u[0])
      game.dp = game.dp.add(OmegaNum.mul(a,OmegaNum.log10(OmegaNum.add(10, game.dp))));
    else
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
      document.getElementById('Dru2M').innerHTML = "Buys Max";
  }
  else if(game.ru[2] > 8.5 && game.dp.gte(game.ru2C[game.ru[2]])) {
    game.ru[3] = game.ru[3].add(OmegaNum.div(game.dp, "e6969"));
    game.dp = new OmegaNum("e6969");
    game.de = game.dp.pow(OmegaNum.pow(game.ru0P,game.ru[0]));
    game.ru0P = OmegaNum.add(OmegaNum.mul(game.ru[3], 2), 4);
    
    document.getElementById('Ddp').innerHTML = game.dp.round().toHyperE();
    document.getElementById('Dde').innerHTML = OmegaNum.add(1,game.de).round().toHyperE();
    document.getElementById('Dru0P').innerHTML = game.ru0P.round().toHyperE();
    document.getElementById('Dru2C').innerHTML = game.ru2C[game.ru[2]].toHyperE();
  }
}


function buyU0() {
  if(!game.u[0] && game.dp.gte(1e100)) {
    game.dp = game.dp.minus(1e100);
    game.de = game.dp.pow(OmegaNum.pow(game.ru0P,game.ru[0]));
    game.u[0] = true;
    document.getElementById('Ddp').innerHTML = game.dp.round().toHyperE();
    document.getElementById('Dde').innerHTML = OmegaNum.add(1,game.de).round().toHyperE();
    document.getElementById('Du0').innerHTML = game.u[0];
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
  }
}






setInterval(function() {
  if(game.au[0]) {
    Max();
  }
  if(game.ta[1]) {
    MaxA();
  }
  
  makeD0(game.d1.div(25).mul(OmegaNum.mul(game.dm[1], OmegaNum.add(1,game.de))));
  makeD1(game.d2.mul(1e8).mul(OmegaNum.mul(game.dm[2], OmegaNum.add(1,game.de))));
  makeD2(game.d3.mul("ee10").mul(OmegaNum.mul(game.dm[3], OmegaNum.add(1,game.de))));
  
  game.am = OmegaNum.pow(10000, OmegaNum.minus(OmegaNum.slog(game.n, 10), 3));
  makeA0(game.a1.mul(game.am).div(25));
  makeA1(game.a2.mul(game.am).mul(1e8));
  
  //game.mm = 
  
  game.ae = OmegaNum.add(1, OmegaNum.pow(OmegaNum.log10(OmegaNum.add(game.a,1)), 3));
  game.me = OmegaNum.add(1, OmegaNum.pow(OmegaNum.div(game.m, 10), 5));
  
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd1').innerHTML = game.d1.round().toHyperE();
  document.getElementById('Dd2').innerHTML = game.d2.round().toHyperE();
  //document.getElementById('Dd3').innerHTML = game.d3.round().toHyperE();
  if(game.n.logBase(10).floor().minus(2).gt(0) && game.u[0]) 
    document.getElementById('DdpP').innerHTML = OmegaNum.mul(OmegaNum.mul(game.ae,OmegaNum.log10(OmegaNum.add(10, game.dp))), game.n.logBase(10).floor().minus(2)).round().toHyperE();
  else if(game.n.logBase(10).floor().minus(2).gt(0))
    document.getElementById('DdpP').innerHTML = OmegaNum.mul(game.ae, game.n.logBase(10).floor().minus(2)).round().toHyperE();
  else 
    document.getElementById('DdpP').innerHTML = 0;
  document.getElementById('Da').innerHTML = game.a.round().toHyperE();
  document.getElementById('Da1').innerHTML = game.a1.round().toHyperE();
  document.getElementById('Dam').innerHTML = game.am.toHyperE();
  document.getElementById('Dae').innerHTML = game.ae.toHyperE();
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
  if(game.nT.gte("eee100")) {
    document.getElementById('dimB3').style.display = 'inline-block';
  }
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
  document.getElementById('Dau0').innerHTML = game.au[0];
  document.getElementById('Dau1').innerHTML = game.au[1];
  document.getElementById('Dta1').innerHTML = game.ta[1];
  document.getElementById('Dru0').innerHTML = game.ru[0].toHyperE();
  document.getElementById('Dru0C').innerHTML = game.ruC[0].toHyperE();
  document.getElementById('Dru0P').innerHTML = game.ru0P.round().toHyperE();
  document.getElementById('Dru2C').innerHTML = game.ru2C[game.ru[2]].toHyperE();
  if(game.ru[2] > 8.5) 
      document.getElementById('Dru2M').innerHTML = "Buys Max";
  document.getElementById('Da').innerHTML = game.a.round().toHyperE();
  document.getElementById('DruC1').innerHTML = game.ruC[1].toHyperE();
  document.getElementById('Da1').innerHTML = game.a1.round().toHyperE();
  document.getElementById('Da2').innerHTML = game.a2.round().toHyperE();
  document.getElementById('Dae').innerHTML = game.ae.toHyperE();
  document.getElementById('Dam').innerHTML = game.am.toHyperE();
  document.getElementById('Dm').innerHTML = game.m.round().toHyperE();
  document.getElementById('DruC3').innerHTML = game.ruC[3].toHyperE();
  document.getElementById('Ddm1').innerHTML = OmegaNum.mul(game.dm[1], OmegaNum.add(1,game.de)).toHyperE();
  document.getElementById('Ddm2').innerHTML = OmegaNum.mul(game.dm[2], OmegaNum.add(1,game.de)).toHyperE();
  document.getElementById('Ddm3').innerHTML = OmegaNum.mul(game.dm[3], OmegaNum.add(1,game.de)).toHyperE();
  document.getElementById('Dme').innerHTML = game.me.toHyperE();
  
  if(game.nT.gte(1000)) {
    document.getElementById('disB').style.display = 'inline-block';
  }
  else
    document.getElementById('disB').style.display = 'none';
  if(game.nT.gte("eee100")) {
    document.getElementById('dimB3').style.display = 'inline-block';
  }
  else
    document.getElementById('dimB3').style.display = 'none';
  if(game.nT.gt("1e2000")) {
    document.getElementById('dimB2').style.display = 'inline-block';
  }
  else
    document.getElementById('dimB2').style.display = 'none';
}


function hardReset() {
  game.au[0] = false;
  game.au[1] = false;
  game.ta[1] = false;
  game.ru0P = new OmegaNum(4);
  game.ru[0] = new OmegaNum(0);
  game.ru[1] = new OmegaNum(0);
  game.ru[2] = 0;
  game.ru[3] = new OmegaNum(9);
  game.ruC[0] = new OmegaNum(5000);
  game.ruC[1] = new OmegaNum(1000);
  game.ru2C = [new OmegaNum(1e10), new OmegaNum(1e20), new OmegaNum(1e30), new OmegaNum(1e40), new OmegaNum(1e55), new OmegaNum(1e80), new OmegaNum(1e150), new OmegaNum(OmegaNum.pow(2,1024)), new OmegaNum("e1000"), new OmegaNum("e6969")];
  game.ruC[3] = new OmegaNum("eee25");
  game.u[0] = false;
  game.u[1] = false;
  game.me = new OmegaNum(1);
  game.m = new OmegaNum(0);
  game.am = new OmegaNum(0);
  game.ae = new OmegaNum(0);
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
  
  updateEverything();
}
load();
updateEverything();
tab('dimTab');
