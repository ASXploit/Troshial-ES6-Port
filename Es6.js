// Error Function Complete
// ReqAnimFrame Working (might update)
// TEST clear method.
// Canvas Creation Complete


window.onload = function () {
class Troshial {
    constructor() {
        this.canvas = undefined;
        this.context = undefined;
        this.pixels = [];
        this.request = (window.requestAnimationFrame && window.requestAnimationFrame.bind(window)) || (window.webkitRequestAnimationFrame && window.webkitRequestAnimationFrame.bind(window)) || ( window.mozRequestAnimationFrame &&  window.mozRequestAnimationFrame.bind(window)) || (window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window)) || (window.oRequestAnimationFrame && window.oRequestAnimationFrame.bind(window));
    }
    
    static error($_0) {
        let $_1 = new Date();
         let $_2 = $_1.getHours();
         let $_3 = $_1.getMinutes();
         let $_4 = $_1.getSeconds();
         let $_001 = [$_2, $_3, $_4];
         
      for(let i=0;i<=$_001.length;i++) {
          if($_001[i] < 10) {
              $_001[i] = `0${$_001[i]}`;
      }}
      return console.log(`${$_001[0]}:${$_001[1]}:${$_001[2]}-TROSHIAL-API-ERROR: ${$_0}`);
    }
    
    create(refresh=100, width, height) {
        try { 
            this.canvas = document.createElement("canvas");
document.body.appendChild(this.canvas);
             this.context = this.canvas.getContext("2d");
    if(!width || !height) {
        throw 1;
    } else {
        this.canvas.width = width;
        this.canvas.height = height; 
    }
        } catch(e) {
            if(e===1) {
this.constructor.error("Missing Parameter Width or Height. Auto Sizing Canvas");
setInterval(()=>{
    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;
    
    
    
    
    
    
    
for(let i=0;i<this.pixels.length;i++) {
    let prse = JSON.parse(this.pixels[i])
for(let j=0;j<this.pixels[i].length;j++) {
    let x = prse.$_b;
    let y = prse.$_c;
    let w = prse.$_d;
    let h = prse.$_e;
    let p = prse.$_g;
    this.context.fillStyle = p;
    this.context.fillRect(x, y, w, h);
 }
}
    
}, refresh);
    }
  }
 }
    
    clear() {
        // Clear pixel array
      this.pixels.splice(0, this.pixels.length),0;
    }
    
    
    
    draw(aop, x, y, w, h, el, col) {
    
        try {
          if(typeof aop !== Array) {
                throw 1;
            }
          if(typeof x !== Number) {
                throw 1;
            }
          if(typeof y !== Number) {
                throw 1;
            }
          if(typeof w !== Number) {
                throw 1;
            }
          if(typeof h !== Number) {
                throw 1;
            }
          if(typeof el !== Number) {
                throw 1;
            }
          if(typeof col !== Array && typeof col !== String) {
                throw 1;
            }
        } catch(e) {
            if(e===1) {
                //this.constructor.error("All draw() Parameters are mandatory.");
            }
        }
        
        var pixl = {
            $_a : aop, // Array Of Pixels
            $_b : x-w, // X Coord
            $_c : y, // Y Coord
            $_d : w, // Width
            $_e : h, // Height
            $_f : el, // End Length
            $_g : col, // Color Array
            $_0 : 0 // Counter
        };
        
for(let i=pixl.$_0;i<pixl.$_a.length;i++) {
    
      if(pixl.$_0>=pixl.$_f) {
          pixl.$_b = x-w;
          pixl.$_c += pixl.$_e;
          pixl.$_0 = 0;
      }
      
      pixl.$_0++;
      pixl.$_b += pixl.$_d;
      if(pixl.$_a[i] !== 0) {
          this.context.fillStyle=pixl.$_g[pixl.$_a[i]-1];
           this.context.fillRect(pixl.$_b, pixl.$_c, pixl.$_d, pixl.$_e);
      }
}
        
        var pckage = JSON.stringify(pixl);
        this.pixels.push(pckage);
        
        
        /*try {
    var $cou = -1; // counter
    var $x = $b-$d; // x = x-width
    var $y = $c; // y = y
    for($i=0;$i<$a.length;$i++) {
    $cou++;
        if($cou>=$f) {
            $x=$b-$d;
            $y+=$e;
            $cou=0;
        }
        $x+=$d;
        if($a[$i]!==0) { //if array is !a 0
        ctx.fillStyle = $g[$a[$i]-1]; // colors[index]
        ctx.fillRect($x,$y,$d,$e);
                $pixels.push($x+"$"+$y+"$"+$d+"$"+$e+"$"+$g[$a[$i]-1]);
        }
    }
    } catch($hGJhahahwiks) {
    return $throwError("canvas hasn't yet been created yet (missing ctx object)");
    }
        
        */
        
        
        
  // ([arr of pixels], x, y, w, h, endlength, [colors]); abcdefg

    }
  }


var hi = new Troshial();

hi.create(1000, 200, 200);





function loop () {

    hi.clear();
    
    hi.draw([1,0,0,1,
             1,2,2,1,
             1,2,2,1,
             2,2,2,2,
             2,1,1,2,
             2,1,1,2,
             2,2,2,2,
             2,0,0,2], 75, 50, 15, 15, 4, ["blue", "green"]);
    
    
    hi.draw([0,1,1,0,
             1,2,2,1,
             1,2,2,1,
             2,2,2,2,
             2,1,1,2,
             2,1,1,2,
             2,2,2,2,
             2,0,0,2], 75, 50, 15, 15, 4, ["blue", "green"]);
    
    hi.request(loop);
}

hi.request(loop);
}


