const reqAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
var $pixels = [];
function $throwError($a) {
    var $d = new Date();
    var $hour = $d.getHours();
    var $minu = $d.getMinutes();
    var $seco = $d.getSeconds();
    if($hour<10) $hour="0"+$hour;
    if($minu<10) $minu="0"+$minu;
    if($seco<10) $seco="0"+$seco;
    return console.error($hour+":"+$minu+":"+$seco+"-TROSHIAL API-ERROR: "+$a);
}
function $checkCollision($a,$b,$c,$d,$e,$f,$g,$h) {
    var cw = Math.abs($a-$c)<=Math.max($e,$f);
    var ch = Math.abs($b-$d)<=Math.max($g,$h);
    if(cw&&ch===true) return true;
    else return false;
}
function $createCanvas($a,$b,$c) {
if(!$a) return $throwError("no arguments used to call function \"$createCanvas\"");
c = document.createElement("canvas");
    if(!$b) c.width = innerWidth;
    else c.width = $b;
    if(!$c) c.height = innerHeight;
    else c.height = $c;
    document.body.appendChild(c);
    ctx = c.getContext("2d");
setInterval(()=>{
if(!$b) c.width = innerWidth;
    else c.width = $b;
    if(!$c) c.height = innerHeight;
    else c.height = $c;
    ctx = c.getContext("2d");
    for($i=0;$i<$pixels.length;$i++) {
        var $codl = $pixels[$i].split("$");
        var $x = $codl[0];
        var $y = $codl[1];
        var $w = $codl[2];
        var $h = $codl[3];
        var $col = $codl[4];
        ctx.fillStyle = $col;
        ctx.fillRect($x,$y,$w,$h);
    }
    },$a);
}
function $deletePixels() {
setTimeout(()=>{
    $pixels = [];
    });
}
function $createPixels($a,$b,$c,$d,$e,$f,$g) {
setTimeout(()=>{
    if($a===(null||undefined)) return $throwError("missing arguments used to call function \"$createPixel\" 6/6");
    if($b===(null||undefined)) return $throwError("missing arguments used to call function \"$createPixel\" 5/6");
    if($c===(null||undefined)) return $throwError("missing arguments used to call function \"$createPixel\" 4/6");
    if(!$d) return $throwError("missing arguments used to call function \"$createPixel\" 3/6");
    if(!$e) return $throwError("missing arguments used to call function \"$createPixel\" 2/6");
    if(!$f) return $throwError("missing arguments used to call function \"$createPixel\" 1/6");
    if(!$g) $g = ["white"];
    try {
    var $cou = -1;
    var $x = $b-$d;
    var $y = $c;
    for($i=0;$i<$a.length;$i++) {
    $cou++;
        if($cou>=$f) {
            $x=$b-$d;
            $y+=$e;
            $cou=0;
        }
        $x+=$d;
        if($a[$i]!==0) {
        ctx.fillStyle = $g[$a[$i]-1];
        ctx.fillRect($x,$y,$d,$e);
                $pixels.push($x+"$"+$y+"$"+$d+"$"+$e+"$"+$g[$a[$i]-1]);
        }
    }
    } catch($hGJhahahwiks) {
    return $throwError("canvas hasn't yet been created yet (missing ctx object)");
    }
    });
}
