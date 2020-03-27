game = {
  n: new OmegaNum(10),
  nT: new OmegaNum(10),
  d1: new OmegaNum(0),
  d2: new OmegaNum(0),
  d3: new OmegaNum(0),
  a: new OmegaNum(0),
  a1: new OmegaNum(0),
  a2: new OmegaNum(0),
  ae: new OmegaNum(0),
  am: new OmegaNum(0),
  dp: new OmegaNum(0),
  de: new OmegaNum(0),
  u: [false],
  ru: [new OmegaNum(0), new OmegaNum(0)],
  ruC: [new OmegaNum(5000), new OmegaNum(1000)],
  au: [false]
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
    
    document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
    document.getElementById('Dd1').innerHTML = game.d1.round().toHyperE();
  }
}
function maxD1() {
  let a = OmegaNum.floor(game.n.div(10));
  game.n = game.n.minus(OmegaNum.mul(a,10));
  game.d1 = game.d1.add(a);
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd1').innerHTML = game.d1.round().toHyperE();
}
function maxD1A(b) {
  let a = OmegaNum.floor(new OmegaNum(b.div(10)));
  game.n = game.n.minus(OmegaNum.mul(a,10));
  game.d1 = game.d1.add(a);
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd1').innerHTML = game.d1.round().toHyperE();
}

function buyD2() {
  if(game.n.gte(1e10)) {
    game.n = game.n.minus(1e10);
    game.d2 = game.d2.add(1);
    
    document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
    document.getElementById('Dd2').innerHTML = game.d2.round().toHyperE();
  }
}
function maxD2() {
  let a = OmegaNum.floor(game.n.div(1e10));
  game.n = game.n.minus(OmegaNum.mul(a,1e10));
  game.d2 = game.d2.add(a);
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd2').innerHTML = game.d2.round().toHyperE();
}
function maxD2A(b) {
  let a = OmegaNum.floor(new OmegaNum(b.div(1e10)));
  game.n = game.n.minus(OmegaNum.mul(a,1e10));
  game.d2 = game.d2.add(a);
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd2').innerHTML = game.d2.round().toHyperE();
}

function buyD3() {
  if(game.n.gte("ee10")) {
    game.n = game.n.minus("ee10");
    game.d3 = game.d3.add(1);
    
    document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
    document.getElementById('Dd3').innerHTML = game.d3.round().toHyperE();
  }
}
function maxD3() {
  let a = OmegaNum.floor(game.n.div("ee10"));
  game.n = game.n.minus(OmegaNum.mul(a,"ee10"));
  game.d3 = game.d3.add(a);
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd3').innerHTML = game.d3.round().toHyperE();
}
function maxD3A(b) {
  let a = OmegaNum.floor(new OmegaNum(b.div("ee10")));
  game.n = game.n.minus(OmegaNum.mul(a,"ee10"));
  game.d3 = game.d3.add(a);
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd3').innerHTML = game.d3.round().toHyperE();
}

function Max() {
  let a = OmegaNum.floor(new OmegaNum(game.n));
  if(a.lt(1e10)) {
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
  if(game.n.gte(OmegaNum.pow(2,1024))) {
    game.n = game.n.minus(OmegaNum.pow(2,1024));
    game.au[0] = true;
    document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
    document.getElementById('Dau0').innerHTML = game.au[0];
  }
}



function buyRu1() {
  if(game.dp.gte(game.ruC[1])) {
    game.dp = game.dp.minus(game.ruC[1]);
    game.de = game.dp.pow(OmegaNum.pow(3,game.ru[0]));
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






function p1() { 
  if(game.n.gte(1000)) {
    game.au[0] = false;
    game.dp = game.dp.add(OmegaNum.mul(game.ae, game.n.logBase(10).floor().minus(2)).round());
    game.de = game.dp.pow(OmegaNum.pow(3,game.ru[0]));
    game.d3 = new OmegaNum(0);
    game.d2 = new OmegaNum(0);
    game.d1 = new OmegaNum(0);
    game.n = new OmegaNum(10);
    
    document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
    document.getElementById('Dd1').innerHTML = game.d1.round().toHyperE();
    document.getElementById('Dd2').innerHTML = game.d2.round().toHyperE();
    document.getElementById('Dd3').innerHTML = game.d3.round().toHyperE();
    document.getElementById('Ddp').innerHTML = game.dp.round().toHyperE();
    document.getElementById('Dde').innerHTML = game.de.round().toHyperE();
    document.getElementById('Dau0').innerHTML = game.au[0];
    
    document.getElementById('dimB2').style.display = 'inline-block';
  }
}


function buyRu0() {
  if(game.dp.gte(game.ruC[0])) {
    game.dp = game.dp.minus(game.ruC[0]);
    game.ru[0] = game.ru[0].add(1);
    game.ruC[0] = game.ruC[0].mul(20);
    game.de = game.dp.pow(OmegaNum.pow(3,game.ru[0]));
    
    document.getElementById('Ddp').innerHTML = game.dp.round().toHyperE();
    document.getElementById('Dde').innerHTML = game.de.round().toHyperE();
    document.getElementById('Dru0').innerHTML = game.ru[0].toHyperE();
    document.getElementById('Dru0C').innerHTML = game.ruC[0].toHyperE();
  }
}
function buyRu0M() {
  let a = OmegaNum.div(game.dp,game.ruC[0]);
  a = a.logBase(20).ceil();
  
  if(a.gt(4)) {
    game.ruC[0] = OmegaNum.pow(20, a);
    let b = game.ruC[0].div(20);
    let c = OmegaNum.mul(b, OmegaNum.div(OmegaNum.minus(1, OmegaNum.pow(20,4)), 19)).round();
    game.dp.minus(c);
    game.ru[0] = game.ru[0].add(a);
    game.de = game.dp.pow(OmegaNum.pow(3,game.ru[0]));
    
    document.getElementById('Ddp').innerHTML = game.dp.round().toHyperE();
    document.getElementById('Dde').innerHTML = game.de.round().toHyperE();
    document.getElementById('Dru0').innerHTML = game.ru[0].toHyperE();
    document.getElementById('Dru0C').innerHTML = game.ruC[0].toHyperE();
  }
  else if(a.gt(0)) {
    for(let i = new OmegaNum(0); i.lt(a); i = i.add(1.1)) {
      buyRu0();
    }
  }
}



setInterval(function() {
  if(game.au[0]) {
    Max();
  }
  
  makeD0(game.d1.div(25).mul(OmegaNum.add(1,game.de)));
  makeD1(game.d2.mul(1e8).mul(OmegaNum.add(1,game.de)));
  makeD2(game.d3.mul("ee10").div(100).mul(OmegaNum.add(1,game.de)));
  
  game.am = OmegaNum.pow(100, OmegaNum.minus(OmegaNum.slog(game.n, 10), 3));
  makeA0(game.a1.mul(game.am).div(25));
  makeA1(game.a2.mul(game.am).mul(1e8));
  
  game.ae = OmegaNum.add(1, OmegaNum.pow(OmegaNum.log10(OmegaNum.add(game.a,1)), 2));
  
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd1').innerHTML = game.d1.round().toHyperE();
  document.getElementById('Dd2').innerHTML = game.d2.round().toHyperE();
  //document.getElementById('Dd3').innerHTML = game.d3.round().toHyperE();
  if(game.n.logBase(10).floor().minus(2).gt(0)) document.getElementById('DdpP').innerHTML = OmegaNum.mul(game.ae, game.n.logBase(10).floor().minus(2)).round().toHyperE(); else document.getElementById('DdpP').innerHTML = 0;
  document.getElementById('Da').innerHTML = game.a.round().toHyperE();
  document.getElementById('Da1').innerHTML = game.a1.round().toHyperE();
  document.getElementById('Dam').innerHTML = game.am.toHyperE();
  document.getElementById('Dae').innerHTML = game.ae.toHyperE();
}, 40);

setInterval(function() {
  if(game.nT.gte(1000)) {
    document.getElementById('disB').style.display = 'inline-block';
  }
}, 1000);



function tab(tab) {
	// hide all your tabs, then show the one the user selected.
	document.getElementById("dimTab").style.display = "none";
	document.getElementById("prestigeTab1.1").style.display = "none";
  document.getElementById("dimTab2").style.display = "none";
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
  if(game.n.logBase(10).floor().minus(2).gt(0)) document.getElementById('DdpP').innerHTML = OmegaNum.mul(game.ae, game.n.logBase(10).floor().minus(2)).round().toHyperE(); else document.getElementById('DdpP').innerHTML = 0;
  document.getElementById('Ddp').innerHTML = game.dp.round().toHyperE();
  document.getElementById('Dde').innerHTML = game.de.round().toHyperE();
  document.getElementById('Dau0').innerHTML = game.au[0];
  document.getElementById('Dru0').innerHTML = game.ru[0].toHyperE();
  document.getElementById('Dru0C').innerHTML = game.ruC[0].toHyperE();
  document.getElementById('Da').innerHTML = game.a.round().toHyperE();
  document.getElementById('DruC1').innerHTML = game.ruC[1].toHyperE();
  document.getElementById('Da1').innerHTML = game.a1.round().toHyperE();
  document.getElementById('Da2').innerHTML = game.a2.round().toHyperE();
  document.getElementById('Dam').innerHTML = game.am.toHyperE();
  
  if(game.nT.gte(1000)) {
    document.getElementById('disB').style.display = 'inline-block';
  }
  else
    document.getElementById('disB').style.display = 'none';
  if(game.dp.gt(0)) {
    document.getElementById('dimB2').style.display = 'inline-block';
  }
  else
    document.getElementById('dimB2').style.display = 'none';
}


function hardReset() {
  game.au[0] = false;
  game.ru[0] = new OmegaNum(0);
  game.ru[1] = new OmegaNum(0);
  game.ruC[0] = new OmegaNum(5000);
  game.ruC[1] = new OmegaNum(1000);
  game.am = new OmegaNum(0);
  game.ae = new OmegaNum(0);
  game.a2 = new OmegaNum(0);
  game.a1 = new OmegaNum(0);
  game.a = new OmegaNum(0);
  game.dp = new OmegaNum(0);
  game.de = new OmegaNum(0);
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
