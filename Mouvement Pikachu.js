var spriteSequences = {
  bigIdle: [{
    masque: {
      height: '81px',
      width: '73px'
    },
    sprite: {
      top: '0px',
      left: '-2px',
    }
  }, {
    masque: {
      height: '81px',
      width: '73px'
    },
    sprite: {
      top: '0px',
      left: '-86px',
    }
  }, {
    masque: {
      height: '81px',
      width: '80px'
    },
    sprite: {
      top: '0px',
      left: '-167px',
    }
  }, {
    masque: {
      height: '81px',
      width: '77px'
    },
    sprite: {
      top: '0px',
      left: '-248px',
    }
  }, {
    masque: {
      height: '81px',
      width: '77px'
    },
    sprite: {
      top: '0px',
      left: '-333px',
    }
  }, {
    masque: {
      height: '81px',
      width: '77px'
    },
    sprite: {
      top: '0px',
      left: '-417px',
    }
  }, {
    masque: {
      height: '81px',
      width: '71px'
    },
    sprite: {
      top: '0px',
      left: '-590px',
    }
  }, {
    masque: {
      height: '81px',
      width: '74px'
    },
    sprite: {
      top: '0px',
      left: '-756px',
    }
  }, {
    masque: {
      height: '81px',
      width: '74px'
    },
    sprite: {
      top: '0px',
      left: '-842px',
    }
  }, {
    masque: {
      height: '81px',
      width: '74px'
    },
    sprite: {
      top: '0px',
      left: '-925px',
    }
  }, {
    masque: {
      height: '81px',
      width: '74px'
    },
    sprite: {
      top: '0px',
      left: '-1008px',
    }
  }]
}


window.onload = function () {

  var container = window.document.getElementById('container');
  var contenu = window.document.getElementById('contenu');

  container.style.position = 'absolute';
  container.style.overflow = 'hidden';
  contenu.style.position = 'absolute';

  var bigIdle = function (index) {
    container.style.width = spriteSequences.bigIdle[index].masque.width;
    container.style.height = spriteSequences.bigIdle[index].masque.height;

    contenu.style.left = spriteSequences.bigIdle[index].sprite.left;
    contenu.style.top = spriteSequences.bigIdle[index].sprite.top;
    var bigIdleTimeoutId = window.setTimeout(function () {
      if (spriteSequences.bigIdle[index + 1]) {
        bigIdle(index + 1);
      } else {
        bigIdle(0);
      };
    }, 250);
  };
  bigIdle(0);
  window.onkeydown = function (event) {

    var code = event.keyCode;

    switch (code) {
      case 37:
        h = document.getElementById('monjoueur').style.left;
        i = h;
        // console.log(i);
        j = parseInt(i);
        // console.log(j);
        t = (j -= 15) + "px";
        // console.log(t);
        document.getElementById('monjoueur').style.left = t;
        // console.log(h);  
        // alert("ça passe");
        break;
      case 38:
        //instructions
        //   alert('haut');
        h = document.getElementById('monjoueur').style.top;
        i = h;
        // console.log(i);
        j = parseInt(i);
        // console.log(j);
        t = (j -= 15) + "px";
        // console.log(t);
        document.getElementById('monjoueur').style.top = t;
        break;
      case 39:
        //instructions
        //   alert('droite');
        h = document.getElementById('monjoueur').style.left;
        i = h;
        // console.log(i);
        j = parseInt(i);
        // console.log(j);
        t = (j += 15) + "px";
        // console.log(t);
        document.getElementById('monjoueur').style.left = t;
        // console.log(h);
        break;
        break;
      case 40:
        //instructions
        //alert('bas');
        h = document.getElementById('monjoueur').style.top;
        i = h;
        // console.log(i);
        j = parseInt(i);
        // console.log(j);
        t = (j += 15) + "px";
        // console.log(t);
        document.getElementById('monjoueur').style.top = t;
        // console.log(h);
        break;
    };

  };

};