game = {
  n: new OmegaNum(10),
  d1: new OmegaNum(0),
  d2: new OmegaNum(0)
};



function makeD0(a) {
  game.n = game.n.add(a);
}
function makeD1(a) {
  game.d1 = game.d1.add(a);
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

function Max() {
  let a = OmegaNum.floor(new OmegaNum(game.n));
  if(a.lt(1e10)) {
    maxD1A(a);
  }
  else {
    a = a.div(2);
    maxD1A(a);
    maxD2A(a);
  }
}



setInterval(function() {
  makeD0(game.d1.div(25));
  makeD1(game.d2.mul(1e8));
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd1').innerHTML = game.d1.round().toHyperE();
  //document.getElementById('Dd2').innerHTML = game.d2.round().toHyperE();
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


function hardReset() {
  game.d2 = new OmegaNum(0);
  game.d1 = new OmegaNum(0);
  game.n = new OmegaNum(10);
  
  document.getElementById('Dn').innerHTML = game.n.round().toHyperE();
  document.getElementById('Dd1').innerHTML = game.d1.round().toHyperE();
  document.getElementById('Dd2').innerHTML = game.d2.round().toHyperE();
}
load();
