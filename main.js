class block {
    constructor(type, statement, l, r,id,x,y) {
        this.type = type;
        this.statement = statement;
        this.l = l;
        this.r = r;
        this.id=id;
        this.x=x;
        this.y=y;
    }
}

function getel(x) {
    return document.getElementById('' + x);
}
function creatediv(cls, Id) {
    var s = "<div class='" + cls + "' id='" + Id + "'></div>";
    return s;
}

var board = getel('board')

var wid = 20;
var hgt = 30;
var objectList=[]
var objects = new Array(hgt);

for (var n = 0; n < hgt; n++) {
    objects[n] = new Array(wid);
    for (var k = 0; k < wid; k++) {
        var Id=n+'-'+k;
        var s = "<div class='" + 'box' + "' id='" + Id + "'></div>";
        board.innerHTML += s;
        objects[n][k] = new block('', '', 0, 0,-1,-1,-1);
        //console.log(k)
    }
}
var cur=new block('','',0,0,-1,-1,-1);

var isInsert=0;
getel('add').onclick=()=>{
    isInsert=1;
    var typ=getel('typ').checked ;
    var state=getel('statem').value ;
    cur.id=objectList.length;
    cur.type=typ;
    getel('typ').checked=0;
    cur.statement=state;
    objectList.push(cur);
}
var rand=()=>{
    var cols=['red','green','blue','purple'];
    var chr=['a','b','c','d'];
    var x=Math.floor(Math.random()*4);
    return [cols[x],chr[x]];
}
function drawline(x1,y1,x2,y2){
    var s=rand()
    if(x1>x2){
        x1--;
        while(x1>x2){
            
            getel(y1+'-'+x1).innerHTML=s[1];
            getel(y1+'-'+x1).style.background=s[0];
            console.log(x1,y1);
            x1--;
        }
    }
    else{
        x1++;
        while(x1<x2){
            
            getel(y1+'-'+x1).innerHTML=s[1];
            getel(y1+'-'+x1).style.background=s[0];
            
            x1++;
        }
    }
    while(y1<y2){
        getel(y1+'-'+x1).innerHTML=s[1];
        getel(y1+'-'+x1).style.background=s[0];
        console.log(x1,y1)
        y1++;
    }
}

function infix(node) {
    getel('BODY').innerHTML+=(node.statement);
    if (node.l) infix(node.l);
    if (node.type)getel('BODY').innerHTML+=('}');
    if (node.r) infix(node.r);
}

getel('render').onclick=()=>{
    getel('BODY').innerHTML='';
    infix(objectList[0]);
}

getel('link').onclick=()=>{
    var x=getel('start').value ;
    var y=getel('end').value ;
    var a=objectList[x];
    var b=objectList[y];
    console.log(a,b)
    if(a.l==0)a.l=b;
    else a.r=b;
    drawline(a.x,a.y,b.x,b.y)
    console.log(a,b);
    getel('start').value=y;
    getel('end').value='';

}