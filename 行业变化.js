var tm=1;
var jsj=1;
var tmChang=1;
var jsjChang=1;
var year=0;
// 工资变量
var Property=0;
var Salary=0;

var fdcNum=6;
var sjyNum=9;
var sgdwNum=13;
var dcNum=7;
var xcNum=11;

var fdc=new Array(fdcNum-1);
var sjy=new Array(sjyNum-1);
var sgdw=new Array(sgdwNum-1);
var dc=new Array(dcNum-1);
var xc=new Array(xcNum-1);

// 房地产
fdc[0]=150000;
fdc[1]=180000;
fdc[2]=220000;
fdc[3]=270000;
fdc[4]=330000;
fdc[5]=400000;
// 设计院
sjy[0]=120000;
sjy[1]=140000;
sjy[2]=170000;
sjy[3]=200000;
sjy[4]=250000;
sjy[5]=280000;
sjy[6]=380000;
sjy[7]=420000;
sjy[8]=480000;
// 施工单位
sgdw[0]=100000;
sgdw[1]=120000;
sgdw[2]=140000;
sgdw[3]=160000;
sgdw[4]=180000;
sgdw[5]=210000;
sgdw[6]=240000;
sgdw[7]=270000;
sgdw[8]=340000;
sgdw[9]=380000;
sgdw[10]=400000;
sgdw[11]=440000;
sgdw[12]=470000;
// 大厂
dc[0]=300000;
dc[1]=350000;
dc[2]=400000;
dc[3]=450000;
dc[4]=500000;
dc[5]=600000;
dc[6]=700000;

// 小厂
xc[0]=200000;
xc[1]=230000;
xc[2]=260000;
xc[3]=300000;
xc[4]=350000;
xc[5]=400000;
xc[6]=440000;
xc[7]=500000;
xc[8]=550000;
xc[9]=600000;
xc[10]=650000;
// 工资数组

// 下一年
function yearchange(){
    year++;
    jsj=0.98+0.1*Math.random();
    jsj=jsj.toFixed(3);
    tm=0.95+0.1*Math.random();
    tm=tm.toFixed(3);
    tmChang*=tm;
    tmChang=tmChang.toFixed(3);
    jsjChang*=jsj;
    jsjChang=jsjChang.toFixed(3);
 

    // 资产变化
    Property=parseInt(Property)+parseInt(Salary);
    document.getElementById("sj").innerHTML+=year+2021+"级"+"<br/>";
    update();
    pause();
    update();
}


function update(){
    document.getElementById("tm1").innerHTML="土木行业变化："+tm;
    document.getElementById("jsj1").innerHTML="计算机行业变化："+jsj;
    document.getElementById("tmhy1").innerHTML="土木行业总变化："+tmChang;
    document.getElementById("jsjhy1").innerHTML="计算机行业总变化："+jsjChang;
    document.getElementById("zc").innerHTML=Property+"￥";
    document.getElementById("gz").innerHTML=Salary+"￥";
    document.getElementById("work").innerHTML=work+"/"+lvl+"级";
    document.getElementById("tmlvl").innerHTML=TmLevel;
    document.getElementById("jsjlvl").innerHTML=JsjLevel;
    document.getElementById("ago").innerHTML=year+22;
    document.getElementById("year").innerHTML=year;
    // 工资

    jysuccess(TmLevel,JsjLevel,education);

    var i=0;
    document.getElementById("fdc").innerHTML="";
    while(i<fdcNum){
        fdc[i]*=tm;
        fdc[i]=fdc[i].toFixed(0);
        document.getElementById("fdc").innerHTML+=i+1+"级 "+fdc[i]+"￥"+"("+fdcSuccess[i]+"%)"+"<br/>";
        i++;
    }
    
    var i=0;
    document.getElementById("sjy").innerHTML="";
    while(i<sjyNum){
        sjy[i]*=tm;
        sjy[i]=sjy[i].toFixed(0);
        document.getElementById("sjy").innerHTML+=i+1+"级 "+sjy[i]+"￥"+"("+sjySuccess[i]+"%)"+"<br/>";
        i++;
    }
    
    var i=0;
    document.getElementById("sgdw").innerHTML="";
    while(i<sgdwNum){
        sgdw[i]*=tm;
        sgdw[i]=sgdw[i].toFixed(0);
        document.getElementById("sgdw").innerHTML+=i+1+"级 "+sgdw[i]+"￥"+"("+sgdwSuccess[i]+"%)"+"<br/>";
        i++;
    }

    var i=0;
    document.getElementById("dc").innerHTML="";
    while(i<dcNum){
        dc[i]*=tm;
        dc[i]=dc[i].toFixed(0);
        document.getElementById("dc").innerHTML+=i+1+"级 "+dc[i]+"￥"+"("+dcSuccess[i]+"%)"+"<br/>";
        i++;
    }
    
    var i=0;
    document.getElementById("xc").innerHTML="";
    while(i<xcNum){
        xc[i]*=tm;
        xc[i]=xc[i].toFixed(0);
        document.getElementById("xc").innerHTML+=i+1+"级 "+xc[i]+"￥"+"("+xcSuccess[i]+"%)"+"<br/>";
        i++;
    }
        //事件
        // document.getElementById("sj").innerHTML+=year+2021+"级"+"<br/>";
        // 学历改变
        document.getElementById("education").innerHTML=education;
}

function pause(){
    if((year+22)>65){
        alert("年龄已到65岁，你的总资产为"+Property);
        document.getElementById("jl").innerHTML+="总资产为:"+Property+"/最终工作:"+work+"/最终工资:"+Salary+"/土木行业总变化:"+tmChang+"/计算机行业总变化:"+jsjChang+"<br/>";
        year=0;
        tm=1;
     jsj=1;
     tmChang=1;
     jsjChang=1;
     year=0;
    // 工资变量
     Property=0;
     Salary=0;
     TmLevel=50;
     JsjLevel=10;
     work="未就业";
     jsjsuccess=(30+JsjLevel);
     tmsuccess=(30+TmLevel);
     education="土木工程+本科";
     lvl=0;
        // 房地产
fdc[0]=150000;
fdc[1]=180000;
fdc[2]=220000;
fdc[3]=270000;
fdc[4]=330000;
fdc[5]=400000;
// 设计院
sjy[0]=120000;
sjy[1]=140000;
sjy[2]=170000;
sjy[3]=200000;
sjy[4]=250000;
sjy[5]=280000;
sjy[6]=380000;
sjy[7]=420000;
sjy[8]=480000;
// 施工单位
sgdw[0]=100000;
sgdw[1]=120000;
sgdw[2]=140000;
sgdw[3]=160000;
sgdw[4]=180000;
sgdw[5]=210000;
sgdw[6]=240000;
sgdw[7]=270000;
sgdw[8]=340000;
sgdw[9]=380000;
sgdw[10]=400000;
sgdw[11]=440000;
sgdw[12]=470000;
// 大厂
dc[0]=300000;
dc[1]=350000;
dc[2]=400000;
dc[3]=450000;
dc[4]=500000;
dc[5]=600000;
dc[6]=700000;

// 小厂
xc[0]=200000;
xc[1]=230000;
xc[2]=260000;
xc[3]=300000;
xc[4]=350000;
xc[5]=400000;
xc[6]=440000;
xc[7]=500000;
xc[8]=550000;
xc[9]=600000;
xc[10]=650000;
    }
}