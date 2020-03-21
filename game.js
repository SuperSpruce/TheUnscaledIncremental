game = {
  n = new OmegaNum(10),
  d1 = new OmegaNum(0),
  d2 = new OmegaNum(0)
};



function makeD0(a) {
  game.n.add(a);
}
function makeD1(a) {
  game.d1.add(a);
}


function buyD1() {
  if(game.n.gte(10)) {
    game.n.minus(10);
    game.d1.add(1);
  }
}
function maxD1() {
  var a = OmegaNum.floor(new OmegaNum(game.n.div(10)));
  game.n.minus(OmegaNum.mul(a,10));
  game.d1.add(a);
}

function buyD2() {
  if(game.n.gte(1e10)) {
    game.n.minus(1e10);
    game.d2.add(1);
  }
}
function maxD2() {
  var a = OmegaNum.floor(new OmegaNum(game.n.div(1e10)));
  game.n.minus(OmegaNum.mul(a,1e10));
  game.d2.add(a);
}



setInterval(function() {
  makeD0(game.d1.div(25));
  makeD1(game.d2.mul(1e9));
}, 40);



function save() {
  localStorage.cc = btoa(JSON.stringify(game));
}
setInterval(function() {
  save();
}, 6969);

function load() {
  if(!localStorage.cc) return;
    game = JSON.parse(atob(localStorage.cc));
}

function hardReset() {
  game.d2
  game.d1
  game.n
}
