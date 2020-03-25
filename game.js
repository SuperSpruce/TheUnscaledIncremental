game = {
  n: new OmegaNum(10),
  d1: new OmegaNum(0),
  d2: new OmegaNum(0),
  d3: new OmegaNum(0),
  dp: new OmegaNum(0),
  de: new OmegaNum(0),
  u: [false],
  ru: [new OmegaNum(0)],
  ruC: [new OmegaNum(5000)],
  au: [false]
};



function makeD0(a) {
  game.n = game.n.add(a);
}
function makeD1(a) {
  game.d1 = game.d1.add(a);
}
function makeD2(a) {
  game.d2 = game.d2.add(a);
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



function p1() { 
  if(game.n.gte(1000)) {
    game.au[0] = false;
    game.dp = game.dp.add(game.n.logBase(10).floor().minus(2));
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
    game.ru1C[0] = OmegaNum.pow(20, a);
    let b = game.ru1C[0].div(20);
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
  
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd1').innerHTML = game.d1.round().toHyperE();
  document.getElementById('Dd2').innerHTML = game.d2.round().toHyperE();
  //document.getElementById('Dd3').innerHTML = game.d3.round().toHyperE();
  if(game.n.logBase(10).floor().minus(2).gt(0)) document.getElementById('DdpP').innerHTML = game.n.logBase(10).floor().minus(2).toHyperE(); else document.getElementById('DdpP').innerHTML = 0;
}, 40);



function tab(tab) {
	// hide all your tabs, then show the one the user selected.
	document.getElementById("dimTab").style.display = "none";
	document.getElementById("prestigeTab1.1").style.display = "none";
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
  if(game.n.logBase(10).floor().minus(2).gt(0)) document.getElementById('DdpP').innerHTML = game.n.logBase(10).floor().minus(2).toHyperE(); else document.getElementById('DdpP').innerHTML = 0;
  document.getElementById('Ddp').innerHTML = game.dp.round().toHyperE();
  document.getElementById('Dde').innerHTML = game.de.round().toHyperE();
  document.getElementById('Dau0').innerHTML = game.au[0];
  document.getElementById('Dru0').innerHTML = game.ru[0].toHyperE();
  document.getElementById('Dru0C').innerHTML = game.ruC[0].toHyperE();
}


function hardReset() {
  game.au[0] = false;
  game.ru[0] = new OmegaNum(0);
  game.ruC[0] = new OmegaNum(5000);
  game.dp = new OmegaNum(0);
  game.de = new OmegaNum(0);
  game.d3 = new OmegaNum(0);
  game.d2 = new OmegaNum(0);
  game.d1 = new OmegaNum(0);
  game.n = new OmegaNum(10);
  game.dp = new OmegaNum(0);
  
  updateEverything();
}
load();
updateEverything();
tab('dimTab');
