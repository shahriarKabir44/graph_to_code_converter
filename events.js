function show(x,y){
    if(isInsert){
        cur.x=y;
        cur.y=x;
        objects[x][y]=cur;
        getel(x+'-'+y).innerHTML=cur.id;
        cur=new block('','',0,0,-1,-1,-1);
    }
    
    isInsert=0;
    var obs=objects[x][y];
    var tp='type:'+obs.type+'<br>';
    var stt='statement:'+obs.statement+'<br>';
    var no='node_number'+obs.id+'<br>'
    var pos="(x,y)="+obs.x+' '+obs.y+'<br>'
    document.getElementById('show').innerHTML=tp+stt+no+pos;
    getel('typ').value='' ;
    getel('statem').value ='';
}
getel("0-0").onclick=()=>{show(0,0)};
getel("0-1").onclick=()=>{show(0,1)};
getel("0-2").onclick=()=>{show(0,2)};
getel("0-3").onclick=()=>{show(0,3)};
getel("0-4").onclick=()=>{show(0,4)};
getel("0-5").onclick=()=>{show(0,5)};
getel("0-6").onclick=()=>{show(0,6)};
getel("0-7").onclick=()=>{show(0,7)};
getel("0-8").onclick=()=>{show(0,8)};
getel("0-9").onclick=()=>{show(0,9)};
getel("0-10").onclick=()=>{show(0,10)};
getel("0-11").onclick=()=>{show(0,11)};
getel("0-12").onclick=()=>{show(0,12)};
getel("0-13").onclick=()=>{show(0,13)};
getel("0-14").onclick=()=>{show(0,14)};
getel("0-15").onclick=()=>{show(0,15)};
getel("0-16").onclick=()=>{show(0,16)};
getel("0-17").onclick=()=>{show(0,17)};
getel("0-18").onclick=()=>{show(0,18)};
getel("0-19").onclick=()=>{show(0,19)};
getel("1-0").onclick=()=>{show(1,0)};
getel("1-1").onclick=()=>{show(1,1)};
getel("1-2").onclick=()=>{show(1,2)};
getel("1-3").onclick=()=>{show(1,3)};
getel("1-4").onclick=()=>{show(1,4)};
getel("1-5").onclick=()=>{show(1,5)};
getel("1-6").onclick=()=>{show(1,6)};
getel("1-7").onclick=()=>{show(1,7)};
getel("1-8").onclick=()=>{show(1,8)};
getel("1-9").onclick=()=>{show(1,9)};
getel("1-10").onclick=()=>{show(1,10)};
getel("1-11").onclick=()=>{show(1,11)};
getel("1-12").onclick=()=>{show(1,12)};
getel("1-13").onclick=()=>{show(1,13)};
getel("1-14").onclick=()=>{show(1,14)};
getel("1-15").onclick=()=>{show(1,15)};
getel("1-16").onclick=()=>{show(1,16)};
getel("1-17").onclick=()=>{show(1,17)};
getel("1-18").onclick=()=>{show(1,18)};
getel("1-19").onclick=()=>{show(1,19)};
getel("2-0").onclick=()=>{show(2,0)};
getel("2-1").onclick=()=>{show(2,1)};
getel("2-2").onclick=()=>{show(2,2)};
getel("2-3").onclick=()=>{show(2,3)};
getel("2-4").onclick=()=>{show(2,4)};
getel("2-5").onclick=()=>{show(2,5)};
getel("2-6").onclick=()=>{show(2,6)};
getel("2-7").onclick=()=>{show(2,7)};
getel("2-8").onclick=()=>{show(2,8)};
getel("2-9").onclick=()=>{show(2,9)};
getel("2-10").onclick=()=>{show(2,10)};
getel("2-11").onclick=()=>{show(2,11)};
getel("2-12").onclick=()=>{show(2,12)};
getel("2-13").onclick=()=>{show(2,13)};
getel("2-14").onclick=()=>{show(2,14)};
getel("2-15").onclick=()=>{show(2,15)};
getel("2-16").onclick=()=>{show(2,16)};
getel("2-17").onclick=()=>{show(2,17)};
getel("2-18").onclick=()=>{show(2,18)};
getel("2-19").onclick=()=>{show(2,19)};
getel("3-0").onclick=()=>{show(3,0)};
getel("3-1").onclick=()=>{show(3,1)};
getel("3-2").onclick=()=>{show(3,2)};
getel("3-3").onclick=()=>{show(3,3)};
getel("3-4").onclick=()=>{show(3,4)};
getel("3-5").onclick=()=>{show(3,5)};
getel("3-6").onclick=()=>{show(3,6)};
getel("3-7").onclick=()=>{show(3,7)};
getel("3-8").onclick=()=>{show(3,8)};
getel("3-9").onclick=()=>{show(3,9)};
getel("3-10").onclick=()=>{show(3,10)};
getel("3-11").onclick=()=>{show(3,11)};
getel("3-12").onclick=()=>{show(3,12)};
getel("3-13").onclick=()=>{show(3,13)};
getel("3-14").onclick=()=>{show(3,14)};
getel("3-15").onclick=()=>{show(3,15)};
getel("3-16").onclick=()=>{show(3,16)};
getel("3-17").onclick=()=>{show(3,17)};
getel("3-18").onclick=()=>{show(3,18)};
getel("3-19").onclick=()=>{show(3,19)};
getel("4-0").onclick=()=>{show(4,0)};
getel("4-1").onclick=()=>{show(4,1)};
getel("4-2").onclick=()=>{show(4,2)};
getel("4-3").onclick=()=>{show(4,3)};
getel("4-4").onclick=()=>{show(4,4)};
getel("4-5").onclick=()=>{show(4,5)};
getel("4-6").onclick=()=>{show(4,6)};
getel("4-7").onclick=()=>{show(4,7)};
getel("4-8").onclick=()=>{show(4,8)};
getel("4-9").onclick=()=>{show(4,9)};
getel("4-10").onclick=()=>{show(4,10)};
getel("4-11").onclick=()=>{show(4,11)};
getel("4-12").onclick=()=>{show(4,12)};
getel("4-13").onclick=()=>{show(4,13)};
getel("4-14").onclick=()=>{show(4,14)};
getel("4-15").onclick=()=>{show(4,15)};
getel("4-16").onclick=()=>{show(4,16)};
getel("4-17").onclick=()=>{show(4,17)};
getel("4-18").onclick=()=>{show(4,18)};
getel("4-19").onclick=()=>{show(4,19)};
getel("5-0").onclick=()=>{show(5,0)};
getel("5-1").onclick=()=>{show(5,1)};
getel("5-2").onclick=()=>{show(5,2)};
getel("5-3").onclick=()=>{show(5,3)};
getel("5-4").onclick=()=>{show(5,4)};
getel("5-5").onclick=()=>{show(5,5)};
getel("5-6").onclick=()=>{show(5,6)};
getel("5-7").onclick=()=>{show(5,7)};
getel("5-8").onclick=()=>{show(5,8)};
getel("5-9").onclick=()=>{show(5,9)};
getel("5-10").onclick=()=>{show(5,10)};
getel("5-11").onclick=()=>{show(5,11)};
getel("5-12").onclick=()=>{show(5,12)};
getel("5-13").onclick=()=>{show(5,13)};
getel("5-14").onclick=()=>{show(5,14)};
getel("5-15").onclick=()=>{show(5,15)};
getel("5-16").onclick=()=>{show(5,16)};
getel("5-17").onclick=()=>{show(5,17)};
getel("5-18").onclick=()=>{show(5,18)};
getel("5-19").onclick=()=>{show(5,19)};
getel("6-0").onclick=()=>{show(6,0)};
getel("6-1").onclick=()=>{show(6,1)};
getel("6-2").onclick=()=>{show(6,2)};
getel("6-3").onclick=()=>{show(6,3)};
getel("6-4").onclick=()=>{show(6,4)};
getel("6-5").onclick=()=>{show(6,5)};
getel("6-6").onclick=()=>{show(6,6)};
getel("6-7").onclick=()=>{show(6,7)};
getel("6-8").onclick=()=>{show(6,8)};
getel("6-9").onclick=()=>{show(6,9)};
getel("6-10").onclick=()=>{show(6,10)};
getel("6-11").onclick=()=>{show(6,11)};
getel("6-12").onclick=()=>{show(6,12)};
getel("6-13").onclick=()=>{show(6,13)};
getel("6-14").onclick=()=>{show(6,14)};
getel("6-15").onclick=()=>{show(6,15)};
getel("6-16").onclick=()=>{show(6,16)};
getel("6-17").onclick=()=>{show(6,17)};
getel("6-18").onclick=()=>{show(6,18)};
getel("6-19").onclick=()=>{show(6,19)};
getel("7-0").onclick=()=>{show(7,0)};
getel("7-1").onclick=()=>{show(7,1)};
getel("7-2").onclick=()=>{show(7,2)};
getel("7-3").onclick=()=>{show(7,3)};
getel("7-4").onclick=()=>{show(7,4)};
getel("7-5").onclick=()=>{show(7,5)};
getel("7-6").onclick=()=>{show(7,6)};
getel("7-7").onclick=()=>{show(7,7)};
getel("7-8").onclick=()=>{show(7,8)};
getel("7-9").onclick=()=>{show(7,9)};
getel("7-10").onclick=()=>{show(7,10)};
getel("7-11").onclick=()=>{show(7,11)};
getel("7-12").onclick=()=>{show(7,12)};
getel("7-13").onclick=()=>{show(7,13)};
getel("7-14").onclick=()=>{show(7,14)};
getel("7-15").onclick=()=>{show(7,15)};
getel("7-16").onclick=()=>{show(7,16)};
getel("7-17").onclick=()=>{show(7,17)};
getel("7-18").onclick=()=>{show(7,18)};
getel("7-19").onclick=()=>{show(7,19)};
getel("8-0").onclick=()=>{show(8,0)};
getel("8-1").onclick=()=>{show(8,1)};
getel("8-2").onclick=()=>{show(8,2)};
getel("8-3").onclick=()=>{show(8,3)};
getel("8-4").onclick=()=>{show(8,4)};
getel("8-5").onclick=()=>{show(8,5)};
getel("8-6").onclick=()=>{show(8,6)};
getel("8-7").onclick=()=>{show(8,7)};
getel("8-8").onclick=()=>{show(8,8)};
getel("8-9").onclick=()=>{show(8,9)};
getel("8-10").onclick=()=>{show(8,10)};
getel("8-11").onclick=()=>{show(8,11)};
getel("8-12").onclick=()=>{show(8,12)};
getel("8-13").onclick=()=>{show(8,13)};
getel("8-14").onclick=()=>{show(8,14)};
getel("8-15").onclick=()=>{show(8,15)};
getel("8-16").onclick=()=>{show(8,16)};
getel("8-17").onclick=()=>{show(8,17)};
getel("8-18").onclick=()=>{show(8,18)};
getel("8-19").onclick=()=>{show(8,19)};
getel("9-0").onclick=()=>{show(9,0)};
getel("9-1").onclick=()=>{show(9,1)};
getel("9-2").onclick=()=>{show(9,2)};
getel("9-3").onclick=()=>{show(9,3)};
getel("9-4").onclick=()=>{show(9,4)};
getel("9-5").onclick=()=>{show(9,5)};
getel("9-6").onclick=()=>{show(9,6)};
getel("9-7").onclick=()=>{show(9,7)};
getel("9-8").onclick=()=>{show(9,8)};
getel("9-9").onclick=()=>{show(9,9)};
getel("9-10").onclick=()=>{show(9,10)};
getel("9-11").onclick=()=>{show(9,11)};
getel("9-12").onclick=()=>{show(9,12)};
getel("9-13").onclick=()=>{show(9,13)};
getel("9-14").onclick=()=>{show(9,14)};
getel("9-15").onclick=()=>{show(9,15)};
getel("9-16").onclick=()=>{show(9,16)};
getel("9-17").onclick=()=>{show(9,17)};
getel("9-18").onclick=()=>{show(9,18)};
getel("9-19").onclick=()=>{show(9,19)};
getel("10-0").onclick=()=>{show(10,0)};
getel("10-1").onclick=()=>{show(10,1)};
getel("10-2").onclick=()=>{show(10,2)};
getel("10-3").onclick=()=>{show(10,3)};
getel("10-4").onclick=()=>{show(10,4)};
getel("10-5").onclick=()=>{show(10,5)};
getel("10-6").onclick=()=>{show(10,6)};
getel("10-7").onclick=()=>{show(10,7)};
getel("10-8").onclick=()=>{show(10,8)};
getel("10-9").onclick=()=>{show(10,9)};
getel("10-10").onclick=()=>{show(10,10)};
getel("10-11").onclick=()=>{show(10,11)};
getel("10-12").onclick=()=>{show(10,12)};
getel("10-13").onclick=()=>{show(10,13)};
getel("10-14").onclick=()=>{show(10,14)};
getel("10-15").onclick=()=>{show(10,15)};
getel("10-16").onclick=()=>{show(10,16)};
getel("10-17").onclick=()=>{show(10,17)};
getel("10-18").onclick=()=>{show(10,18)};
getel("10-19").onclick=()=>{show(10,19)};
getel("11-0").onclick=()=>{show(11,0)};
getel("11-1").onclick=()=>{show(11,1)};
getel("11-2").onclick=()=>{show(11,2)};
getel("11-3").onclick=()=>{show(11,3)};
getel("11-4").onclick=()=>{show(11,4)};
getel("11-5").onclick=()=>{show(11,5)};
getel("11-6").onclick=()=>{show(11,6)};
getel("11-7").onclick=()=>{show(11,7)};
getel("11-8").onclick=()=>{show(11,8)};
getel("11-9").onclick=()=>{show(11,9)};
getel("11-10").onclick=()=>{show(11,10)};
getel("11-11").onclick=()=>{show(11,11)};
getel("11-12").onclick=()=>{show(11,12)};
getel("11-13").onclick=()=>{show(11,13)};
getel("11-14").onclick=()=>{show(11,14)};
getel("11-15").onclick=()=>{show(11,15)};
getel("11-16").onclick=()=>{show(11,16)};
getel("11-17").onclick=()=>{show(11,17)};
getel("11-18").onclick=()=>{show(11,18)};
getel("11-19").onclick=()=>{show(11,19)};
getel("12-0").onclick=()=>{show(12,0)};
getel("12-1").onclick=()=>{show(12,1)};
getel("12-2").onclick=()=>{show(12,2)};
getel("12-3").onclick=()=>{show(12,3)};
getel("12-4").onclick=()=>{show(12,4)};
getel("12-5").onclick=()=>{show(12,5)};
getel("12-6").onclick=()=>{show(12,6)};
getel("12-7").onclick=()=>{show(12,7)};
getel("12-8").onclick=()=>{show(12,8)};
getel("12-9").onclick=()=>{show(12,9)};
getel("12-10").onclick=()=>{show(12,10)};
getel("12-11").onclick=()=>{show(12,11)};
getel("12-12").onclick=()=>{show(12,12)};
getel("12-13").onclick=()=>{show(12,13)};
getel("12-14").onclick=()=>{show(12,14)};
getel("12-15").onclick=()=>{show(12,15)};
getel("12-16").onclick=()=>{show(12,16)};
getel("12-17").onclick=()=>{show(12,17)};
getel("12-18").onclick=()=>{show(12,18)};
getel("12-19").onclick=()=>{show(12,19)};
getel("13-0").onclick=()=>{show(13,0)};
getel("13-1").onclick=()=>{show(13,1)};
getel("13-2").onclick=()=>{show(13,2)};
getel("13-3").onclick=()=>{show(13,3)};
getel("13-4").onclick=()=>{show(13,4)};
getel("13-5").onclick=()=>{show(13,5)};
getel("13-6").onclick=()=>{show(13,6)};
getel("13-7").onclick=()=>{show(13,7)};
getel("13-8").onclick=()=>{show(13,8)};
getel("13-9").onclick=()=>{show(13,9)};
getel("13-10").onclick=()=>{show(13,10)};
getel("13-11").onclick=()=>{show(13,11)};
getel("13-12").onclick=()=>{show(13,12)};
getel("13-13").onclick=()=>{show(13,13)};
getel("13-14").onclick=()=>{show(13,14)};
getel("13-15").onclick=()=>{show(13,15)};
getel("13-16").onclick=()=>{show(13,16)};
getel("13-17").onclick=()=>{show(13,17)};
getel("13-18").onclick=()=>{show(13,18)};
getel("13-19").onclick=()=>{show(13,19)};
getel("14-0").onclick=()=>{show(14,0)};
getel("14-1").onclick=()=>{show(14,1)};
getel("14-2").onclick=()=>{show(14,2)};
getel("14-3").onclick=()=>{show(14,3)};
getel("14-4").onclick=()=>{show(14,4)};
getel("14-5").onclick=()=>{show(14,5)};
getel("14-6").onclick=()=>{show(14,6)};
getel("14-7").onclick=()=>{show(14,7)};
getel("14-8").onclick=()=>{show(14,8)};
getel("14-9").onclick=()=>{show(14,9)};
getel("14-10").onclick=()=>{show(14,10)};
getel("14-11").onclick=()=>{show(14,11)};
getel("14-12").onclick=()=>{show(14,12)};
getel("14-13").onclick=()=>{show(14,13)};
getel("14-14").onclick=()=>{show(14,14)};
getel("14-15").onclick=()=>{show(14,15)};
getel("14-16").onclick=()=>{show(14,16)};
getel("14-17").onclick=()=>{show(14,17)};
getel("14-18").onclick=()=>{show(14,18)};
getel("14-19").onclick=()=>{show(14,19)};
getel("15-0").onclick=()=>{show(15,0)};
getel("15-1").onclick=()=>{show(15,1)};
getel("15-2").onclick=()=>{show(15,2)};
getel("15-3").onclick=()=>{show(15,3)};
getel("15-4").onclick=()=>{show(15,4)};
getel("15-5").onclick=()=>{show(15,5)};
getel("15-6").onclick=()=>{show(15,6)};
getel("15-7").onclick=()=>{show(15,7)};
getel("15-8").onclick=()=>{show(15,8)};
getel("15-9").onclick=()=>{show(15,9)};
getel("15-10").onclick=()=>{show(15,10)};
getel("15-11").onclick=()=>{show(15,11)};
getel("15-12").onclick=()=>{show(15,12)};
getel("15-13").onclick=()=>{show(15,13)};
getel("15-14").onclick=()=>{show(15,14)};
getel("15-15").onclick=()=>{show(15,15)};
getel("15-16").onclick=()=>{show(15,16)};
getel("15-17").onclick=()=>{show(15,17)};
getel("15-18").onclick=()=>{show(15,18)};
getel("15-19").onclick=()=>{show(15,19)};
getel("16-0").onclick=()=>{show(16,0)};
getel("16-1").onclick=()=>{show(16,1)};
getel("16-2").onclick=()=>{show(16,2)};
getel("16-3").onclick=()=>{show(16,3)};
getel("16-4").onclick=()=>{show(16,4)};
getel("16-5").onclick=()=>{show(16,5)};
getel("16-6").onclick=()=>{show(16,6)};
getel("16-7").onclick=()=>{show(16,7)};
getel("16-8").onclick=()=>{show(16,8)};
getel("16-9").onclick=()=>{show(16,9)};
getel("16-10").onclick=()=>{show(16,10)};
getel("16-11").onclick=()=>{show(16,11)};
getel("16-12").onclick=()=>{show(16,12)};
getel("16-13").onclick=()=>{show(16,13)};
getel("16-14").onclick=()=>{show(16,14)};
getel("16-15").onclick=()=>{show(16,15)};
getel("16-16").onclick=()=>{show(16,16)};
getel("16-17").onclick=()=>{show(16,17)};
getel("16-18").onclick=()=>{show(16,18)};
getel("16-19").onclick=()=>{show(16,19)};
getel("17-0").onclick=()=>{show(17,0)};
getel("17-1").onclick=()=>{show(17,1)};
getel("17-2").onclick=()=>{show(17,2)};
getel("17-3").onclick=()=>{show(17,3)};
getel("17-4").onclick=()=>{show(17,4)};
getel("17-5").onclick=()=>{show(17,5)};
getel("17-6").onclick=()=>{show(17,6)};
getel("17-7").onclick=()=>{show(17,7)};
getel("17-8").onclick=()=>{show(17,8)};
getel("17-9").onclick=()=>{show(17,9)};
getel("17-10").onclick=()=>{show(17,10)};
getel("17-11").onclick=()=>{show(17,11)};
getel("17-12").onclick=()=>{show(17,12)};
getel("17-13").onclick=()=>{show(17,13)};
getel("17-14").onclick=()=>{show(17,14)};
getel("17-15").onclick=()=>{show(17,15)};
getel("17-16").onclick=()=>{show(17,16)};
getel("17-17").onclick=()=>{show(17,17)};
getel("17-18").onclick=()=>{show(17,18)};
getel("17-19").onclick=()=>{show(17,19)};
getel("18-0").onclick=()=>{show(18,0)};
getel("18-1").onclick=()=>{show(18,1)};
getel("18-2").onclick=()=>{show(18,2)};
getel("18-3").onclick=()=>{show(18,3)};
getel("18-4").onclick=()=>{show(18,4)};
getel("18-5").onclick=()=>{show(18,5)};
getel("18-6").onclick=()=>{show(18,6)};
getel("18-7").onclick=()=>{show(18,7)};
getel("18-8").onclick=()=>{show(18,8)};
getel("18-9").onclick=()=>{show(18,9)};
getel("18-10").onclick=()=>{show(18,10)};
getel("18-11").onclick=()=>{show(18,11)};
getel("18-12").onclick=()=>{show(18,12)};
getel("18-13").onclick=()=>{show(18,13)};
getel("18-14").onclick=()=>{show(18,14)};
getel("18-15").onclick=()=>{show(18,15)};
getel("18-16").onclick=()=>{show(18,16)};
getel("18-17").onclick=()=>{show(18,17)};
getel("18-18").onclick=()=>{show(18,18)};
getel("18-19").onclick=()=>{show(18,19)};
getel("19-0").onclick=()=>{show(19,0)};
getel("19-1").onclick=()=>{show(19,1)};
getel("19-2").onclick=()=>{show(19,2)};
getel("19-3").onclick=()=>{show(19,3)};
getel("19-4").onclick=()=>{show(19,4)};
getel("19-5").onclick=()=>{show(19,5)};
getel("19-6").onclick=()=>{show(19,6)};
getel("19-7").onclick=()=>{show(19,7)};
getel("19-8").onclick=()=>{show(19,8)};
getel("19-9").onclick=()=>{show(19,9)};
getel("19-10").onclick=()=>{show(19,10)};
getel("19-11").onclick=()=>{show(19,11)};
getel("19-12").onclick=()=>{show(19,12)};
getel("19-13").onclick=()=>{show(19,13)};
getel("19-14").onclick=()=>{show(19,14)};
getel("19-15").onclick=()=>{show(19,15)};
getel("19-16").onclick=()=>{show(19,16)};
getel("19-17").onclick=()=>{show(19,17)};
getel("19-18").onclick=()=>{show(19,18)};
getel("19-19").onclick=()=>{show(19,19)};
getel("20-0").onclick=()=>{show(20,0)};
getel("20-1").onclick=()=>{show(20,1)};
getel("20-2").onclick=()=>{show(20,2)};
getel("20-3").onclick=()=>{show(20,3)};
getel("20-4").onclick=()=>{show(20,4)};
getel("20-5").onclick=()=>{show(20,5)};
getel("20-6").onclick=()=>{show(20,6)};
getel("20-7").onclick=()=>{show(20,7)};
getel("20-8").onclick=()=>{show(20,8)};
getel("20-9").onclick=()=>{show(20,9)};
getel("20-10").onclick=()=>{show(20,10)};
getel("20-11").onclick=()=>{show(20,11)};
getel("20-12").onclick=()=>{show(20,12)};
getel("20-13").onclick=()=>{show(20,13)};
getel("20-14").onclick=()=>{show(20,14)};
getel("20-15").onclick=()=>{show(20,15)};
getel("20-16").onclick=()=>{show(20,16)};
getel("20-17").onclick=()=>{show(20,17)};
getel("20-18").onclick=()=>{show(20,18)};
getel("20-19").onclick=()=>{show(20,19)};
getel("21-0").onclick=()=>{show(21,0)};
getel("21-1").onclick=()=>{show(21,1)};
getel("21-2").onclick=()=>{show(21,2)};
getel("21-3").onclick=()=>{show(21,3)};
getel("21-4").onclick=()=>{show(21,4)};
getel("21-5").onclick=()=>{show(21,5)};
getel("21-6").onclick=()=>{show(21,6)};
getel("21-7").onclick=()=>{show(21,7)};
getel("21-8").onclick=()=>{show(21,8)};
getel("21-9").onclick=()=>{show(21,9)};
getel("21-10").onclick=()=>{show(21,10)};
getel("21-11").onclick=()=>{show(21,11)};
getel("21-12").onclick=()=>{show(21,12)};
getel("21-13").onclick=()=>{show(21,13)};
getel("21-14").onclick=()=>{show(21,14)};
getel("21-15").onclick=()=>{show(21,15)};
getel("21-16").onclick=()=>{show(21,16)};
getel("21-17").onclick=()=>{show(21,17)};
getel("21-18").onclick=()=>{show(21,18)};
getel("21-19").onclick=()=>{show(21,19)};
getel("22-0").onclick=()=>{show(22,0)};
getel("22-1").onclick=()=>{show(22,1)};
getel("22-2").onclick=()=>{show(22,2)};
getel("22-3").onclick=()=>{show(22,3)};
getel("22-4").onclick=()=>{show(22,4)};
getel("22-5").onclick=()=>{show(22,5)};
getel("22-6").onclick=()=>{show(22,6)};
getel("22-7").onclick=()=>{show(22,7)};
getel("22-8").onclick=()=>{show(22,8)};
getel("22-9").onclick=()=>{show(22,9)};
getel("22-10").onclick=()=>{show(22,10)};
getel("22-11").onclick=()=>{show(22,11)};
getel("22-12").onclick=()=>{show(22,12)};
getel("22-13").onclick=()=>{show(22,13)};
getel("22-14").onclick=()=>{show(22,14)};
getel("22-15").onclick=()=>{show(22,15)};
getel("22-16").onclick=()=>{show(22,16)};
getel("22-17").onclick=()=>{show(22,17)};
getel("22-18").onclick=()=>{show(22,18)};
getel("22-19").onclick=()=>{show(22,19)};
getel("23-0").onclick=()=>{show(23,0)};
getel("23-1").onclick=()=>{show(23,1)};
getel("23-2").onclick=()=>{show(23,2)};
getel("23-3").onclick=()=>{show(23,3)};
getel("23-4").onclick=()=>{show(23,4)};
getel("23-5").onclick=()=>{show(23,5)};
getel("23-6").onclick=()=>{show(23,6)};
getel("23-7").onclick=()=>{show(23,7)};
getel("23-8").onclick=()=>{show(23,8)};
getel("23-9").onclick=()=>{show(23,9)};
getel("23-10").onclick=()=>{show(23,10)};
getel("23-11").onclick=()=>{show(23,11)};
getel("23-12").onclick=()=>{show(23,12)};
getel("23-13").onclick=()=>{show(23,13)};
getel("23-14").onclick=()=>{show(23,14)};
getel("23-15").onclick=()=>{show(23,15)};
getel("23-16").onclick=()=>{show(23,16)};
getel("23-17").onclick=()=>{show(23,17)};
getel("23-18").onclick=()=>{show(23,18)};
getel("23-19").onclick=()=>{show(23,19)};
getel("24-0").onclick=()=>{show(24,0)};
getel("24-1").onclick=()=>{show(24,1)};
getel("24-2").onclick=()=>{show(24,2)};
getel("24-3").onclick=()=>{show(24,3)};
getel("24-4").onclick=()=>{show(24,4)};
getel("24-5").onclick=()=>{show(24,5)};
getel("24-6").onclick=()=>{show(24,6)};
getel("24-7").onclick=()=>{show(24,7)};
getel("24-8").onclick=()=>{show(24,8)};
getel("24-9").onclick=()=>{show(24,9)};
getel("24-10").onclick=()=>{show(24,10)};
getel("24-11").onclick=()=>{show(24,11)};
getel("24-12").onclick=()=>{show(24,12)};
getel("24-13").onclick=()=>{show(24,13)};
getel("24-14").onclick=()=>{show(24,14)};
getel("24-15").onclick=()=>{show(24,15)};
getel("24-16").onclick=()=>{show(24,16)};
getel("24-17").onclick=()=>{show(24,17)};
getel("24-18").onclick=()=>{show(24,18)};
getel("24-19").onclick=()=>{show(24,19)};
getel("25-0").onclick=()=>{show(25,0)};
getel("25-1").onclick=()=>{show(25,1)};
getel("25-2").onclick=()=>{show(25,2)};
getel("25-3").onclick=()=>{show(25,3)};
getel("25-4").onclick=()=>{show(25,4)};
getel("25-5").onclick=()=>{show(25,5)};
getel("25-6").onclick=()=>{show(25,6)};
getel("25-7").onclick=()=>{show(25,7)};
getel("25-8").onclick=()=>{show(25,8)};
getel("25-9").onclick=()=>{show(25,9)};
getel("25-10").onclick=()=>{show(25,10)};
getel("25-11").onclick=()=>{show(25,11)};
getel("25-12").onclick=()=>{show(25,12)};
getel("25-13").onclick=()=>{show(25,13)};
getel("25-14").onclick=()=>{show(25,14)};
getel("25-15").onclick=()=>{show(25,15)};
getel("25-16").onclick=()=>{show(25,16)};
getel("25-17").onclick=()=>{show(25,17)};
getel("25-18").onclick=()=>{show(25,18)};
getel("25-19").onclick=()=>{show(25,19)};
getel("26-0").onclick=()=>{show(26,0)};
getel("26-1").onclick=()=>{show(26,1)};
getel("26-2").onclick=()=>{show(26,2)};
getel("26-3").onclick=()=>{show(26,3)};
getel("26-4").onclick=()=>{show(26,4)};
getel("26-5").onclick=()=>{show(26,5)};
getel("26-6").onclick=()=>{show(26,6)};
getel("26-7").onclick=()=>{show(26,7)};
getel("26-8").onclick=()=>{show(26,8)};
getel("26-9").onclick=()=>{show(26,9)};
getel("26-10").onclick=()=>{show(26,10)};
getel("26-11").onclick=()=>{show(26,11)};
getel("26-12").onclick=()=>{show(26,12)};
getel("26-13").onclick=()=>{show(26,13)};
getel("26-14").onclick=()=>{show(26,14)};
getel("26-15").onclick=()=>{show(26,15)};
getel("26-16").onclick=()=>{show(26,16)};
getel("26-17").onclick=()=>{show(26,17)};
getel("26-18").onclick=()=>{show(26,18)};
getel("26-19").onclick=()=>{show(26,19)};
getel("27-0").onclick=()=>{show(27,0)};
getel("27-1").onclick=()=>{show(27,1)};
getel("27-2").onclick=()=>{show(27,2)};
getel("27-3").onclick=()=>{show(27,3)};
getel("27-4").onclick=()=>{show(27,4)};
getel("27-5").onclick=()=>{show(27,5)};
getel("27-6").onclick=()=>{show(27,6)};
getel("27-7").onclick=()=>{show(27,7)};
getel("27-8").onclick=()=>{show(27,8)};
getel("27-9").onclick=()=>{show(27,9)};
getel("27-10").onclick=()=>{show(27,10)};
getel("27-11").onclick=()=>{show(27,11)};
getel("27-12").onclick=()=>{show(27,12)};
getel("27-13").onclick=()=>{show(27,13)};
getel("27-14").onclick=()=>{show(27,14)};
getel("27-15").onclick=()=>{show(27,15)};
getel("27-16").onclick=()=>{show(27,16)};
getel("27-17").onclick=()=>{show(27,17)};
getel("27-18").onclick=()=>{show(27,18)};
getel("27-19").onclick=()=>{show(27,19)};
getel("28-0").onclick=()=>{show(28,0)};
getel("28-1").onclick=()=>{show(28,1)};
getel("28-2").onclick=()=>{show(28,2)};
getel("28-3").onclick=()=>{show(28,3)};
getel("28-4").onclick=()=>{show(28,4)};
getel("28-5").onclick=()=>{show(28,5)};
getel("28-6").onclick=()=>{show(28,6)};
getel("28-7").onclick=()=>{show(28,7)};
getel("28-8").onclick=()=>{show(28,8)};
getel("28-9").onclick=()=>{show(28,9)};
getel("28-10").onclick=()=>{show(28,10)};
getel("28-11").onclick=()=>{show(28,11)};
getel("28-12").onclick=()=>{show(28,12)};
getel("28-13").onclick=()=>{show(28,13)};
getel("28-14").onclick=()=>{show(28,14)};
getel("28-15").onclick=()=>{show(28,15)};
getel("28-16").onclick=()=>{show(28,16)};
getel("28-17").onclick=()=>{show(28,17)};
getel("28-18").onclick=()=>{show(28,18)};
getel("28-19").onclick=()=>{show(28,19)};
getel("29-0").onclick=()=>{show(29,0)};
getel("29-1").onclick=()=>{show(29,1)};
getel("29-2").onclick=()=>{show(29,2)};
getel("29-3").onclick=()=>{show(29,3)};
getel("29-4").onclick=()=>{show(29,4)};
getel("29-5").onclick=()=>{show(29,5)};
getel("29-6").onclick=()=>{show(29,6)};
getel("29-7").onclick=()=>{show(29,7)};
getel("29-8").onclick=()=>{show(29,8)};
getel("29-9").onclick=()=>{show(29,9)};
getel("29-10").onclick=()=>{show(29,10)};
getel("29-11").onclick=()=>{show(29,11)};
getel("29-12").onclick=()=>{show(29,12)};
getel("29-13").onclick=()=>{show(29,13)};
getel("29-14").onclick=()=>{show(29,14)};
getel("29-15").onclick=()=>{show(29,15)};
getel("29-16").onclick=()=>{show(29,16)};
getel("29-17").onclick=()=>{show(29,17)};
getel("29-18").onclick=()=>{show(29,18)};
getel("29-19").onclick=()=>{show(29,19)};
