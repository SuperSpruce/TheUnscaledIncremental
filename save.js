function objectToDecimal(object) {
    for (let i in object) {
        if (typeof(object[i]) == "string" && new OmegaNum(object[i]) instanceof OmegaNum && !(new OmegaNum(object[i]).sign == 0 && object[i] != "0")) {
          object[i] = new OmegaNum(object[i]);
        }
        if (typeof(object[i]) == "object") {
            objectToDecimal(object[i]);
        }
    }
}

function merge(base, source) {
    for (let i in base) {
        if (source[i] != undefined) {
            if (typeof(base[i]) == "object" && typeof(source[i]) == "object" && !isDecimal(base[i]) && !isDecimal(source[i])) {
                merge(base[i], source[i]);
            } else {
                if (isDecimal(base[i]) && !isDecimal(source[i])) {
                    base[i] = new OmegaNum(source[i]);
                } else if (!isDecimal(base[i]) && isDecimal(source[i])) {
                    base[i] = source[i].toNumber();
                } else {
                    base[i] = source[i];
                }
            }
        }
    }
}


function isDecimal(x) {
    if (x.array != undefined && x.plus != undefined) {
        return true;
    } else {
        return false;
    }
}

var savegame;

function save() {
  localStorage.setItem("inc-tourn-yaht", JSON.stringify(game));
}

function load() {
  if (localStorage.getItem("inc-tourn-yaht")) {
    savegame = JSON.parse(localStorage.getItem("inc-tourn-yaht"));
    objectToDecimal(savegame);
    merge(game, savegame);
  }
}

function wipeSave() {
  hardReset();
  save();
  load();
}

function exportSave() {
  return btoa(JSON.stringify(game));
}

function importSave(text) {
  savegame = JSON.parse(atob(text));
  objectToDecimal(savegame);
  merge(game, savegame);
  
  save();
}
