var TmLevel=50;
var JsjLevel=10;
var work="未就业";
var jsjsuccess=(30+JsjLevel);
var tmsuccess=(30+TmLevel);
var education="土木工程+本科";

var fdcSuccess=new Array(fdcNum-1);
var sjySuccess=new Array(sjyNum-1);
var sgdwSuccess=new Array(sgdwNum-1);
var dcSuccess=new Array(dcNum-1);
var xcSuccess=new Array(xcNum-1);

var lvl=0;

function jysuccess(TmLevel,JsjLevel,education){
    // 房地产
    var i=0;
    while(i<fdcNum){
        fdcSuccess[i]=40-15*i+TmLevel;
        if(fdcSuccess[i]>100){
            fdcSuccess[i]=100;
        }
        if(fdcSuccess[i]<0){
            fdcSuccess[i]=0;
        }
        i++;
    }
    // 设计院
    var i=0;
    if(education!="土木工程+硕士"){
        while(i<sjyNum){
            sjySuccess[i]=0;
            i++;
        }
    }
    else{
    while(i<sjyNum){
        sjySuccess[i]=50-15*i+TmLevel;
        if(sjySuccess[i]>100){
            sjySuccess[i]=100;
        }
        if(sjySuccess[i]<0){
            sjySuccess[i]=0;
        }
        i++;
    }
    }
    // 施工单位
    var i=0;
    while(i<sgdwNum){
        sgdwSuccess[i]=50-15*i+TmLevel;
        if(sgdwSuccess[i]>100){
            sgdwSuccess[i]=100;
        }
        if(sgdwSuccess[i]<0){
            sgdwSuccess[i]=0;
        }
        i++;
    }
    // 大厂
    var i=0;
    if(education!="计算机+硕士"){
        while(i<dcNum){
            dcSuccess[i]=0;
            i++;
        }
    }
    else{
        while(i<dcNum){
        dcSuccess[i]=50-15*i+JsjLevel;
        if(dcSuccess[i]>100){
            dcSuccess[i]=100;
        }
        if(dcSuccess[i]<0){
            dcSuccess[i]=0;
        }
        i++;
    }
    }
    // 小厂
    var i=0;
    while(i<xcNum){
        xcSuccess[i]=50-15*i+JsjLevel;
        if(xcSuccess[i]>100){
            xcSuccess[i]=100;
        }
        if(xcSuccess[i]<0){
            xcSuccess[i]=0;
        }
        i++;
    }
}

// 考研变化
function kychange(){
    var jsjsuccess=(30+JsjLevel);
    var tmsuccess=(30+TmLevel);
    if(tmsuccess>100){
        tmsuccess=100;
    }
    if(jsjsuccess>100){
        jsjsuccess=100;
    }
    document.getElementById("tmky").innerHTML=tmsuccess+"%";
    document.getElementById("jsjky").innerHTML=jsjsuccess+"%";

}

function tmky(){
    var tmsuccess=(30+TmLevel);
    document.getElementById("sj").innerHTML+="脱产考研"+"<br/>";
    var i=Math.random()*100;
    if(i<tmsuccess){
        TmLevel+=50;
        // 考研成功率
        kychange();
        document.getElementById("sj").innerHTML+="土木考研成功"+"<br/>";
        education="土木工程+硕士";
        Salary=0;
        work="未就业";
        lvl=0;
        // 移除
        document.getElementById("kytb").innerHTML="";
        yearchange();
        yearchange();
        yearchange();
        
    
}
        else{
        document.getElementById("sj").innerHTML+="土木考研失败"+"<br/>";
        TmLevel+=10;
        Salary=0;
        work="未就业";
        lvl=0;
        // 考研成功率

        kychange();
        yearchange();
    }
    
}

function jsjky(){
    var jsjsuccess=(30+JsjLevel);
    document.getElementById("sj").innerHTML+="脱产考研"+"<br/>";
    var i=Math.random()*100;
    if(i<jsjsuccess){
        JsjLevel+=60;
        // 考研成功率
    kychange();
        document.getElementById("sj").innerHTML+="计算机考研成功"+"<br/>";
        education="计算机+硕士";
        Salary=0;
        work="未就业";
        lvl=0;
        // 移除
        document.getElementById("kytb").innerHTML="";
        yearchange();
        yearchange();
        yearchange();
        
    }
        else{
        document.getElementById("sj").innerHTML+="计算机考研失败"+"<br/>";
        JsjLevel+=20;
        Salary=0;
        work="未就业";
        lvl=0;
        // 考研成功率
        kychange();
        yearchange();
    }
}

function jyfdc(){
switch(work){
    case "未就业":
    case "设计院":
    case "大厂":
    case "小厂":
    case "施工单位":
    {
        var i=0;
        while(100*Math.random()<fdcSuccess[i]&&i<fdcNum){
            i++;
        }
        if(i==0){
            document.getElementById("sj").innerHTML+="房地产就业失败"+"<br/>";
            Property+=-20000;
            update();
        }
        else{
            if(work!="未就业"){
                document.getElementById("sj").innerHTML+="跳槽成功"+"<br/>";
            }
            else{
                document.getElementById("sj").innerHTML+="成功入职"+"<br/>";
            }
            work="房地产";

            i--;
            Salary=fdc[i];
            lvl=i+1;
            yearchange();
        }
        break;
        }
    case "房地产":{
        work="房地产";
        var i=lvl;
        while(100*Math.random()<fdcSuccess[i]&&i<fdcNum){
            i++;}
            i--;
            Salary=fdc[i];
            lvl=i+1;
            TmLevel+=10;
            // 考研成功率
            if(education!="土木工程+硕士"||education!="计算机+硕士"){
                    
            }else
            kychange();
            yearchange();
        }
    }
}

function jysjy(){
    switch(work){
        case "未就业":
        case "房地产":
        case "大厂":
        case "小厂":
        case "施工单位":
        {
            var i=0;
            while(100*Math.random()<sjySuccess[i]&&i<sjyNum){
                i++;
            }
            if(i==0){
                document.getElementById("sj").innerHTML+="设计院就业失败"+"<br/>";
                Property+=-20000;
                update();
            }
            else{
                if(work!="未就业"){
                    document.getElementById("sj").innerHTML+="跳槽成功"+"<br/>";
                }
                else{
                    document.getElementById("sj").innerHTML+="成功入职"+"<br/>";
                }
                work="设计院";

                i--;
                Salary=sjy[i];
                lvl=i+1;
                yearchange();
            }
            break;
            }
        case "设计院":{
            work="设计院";
            var i=lvl;
            while(100*Math.random()<sjySuccess[i]&&i<sjyNum){
                i++;}
                i--;
                Salary=sjy[i];
                lvl=i+1;
                TmLevel+=10;
                // 考研成功率
                if(education!="土木工程+硕士"||education!="计算机+硕士"){
                    
                }else
                kychange();
                yearchange();
            }
        }
}

function jysgdw(){
    switch(work){
        case "未就业":
        case "设计院":
        case "大厂":
        case "小厂":
        case "房地产":
        {
            var i=0;
            while(100*Math.random()<sgdwSuccess[i]&&i<sgdwNum){
                i++;
            }
            if(i==0){
                document.getElementById("sj").innerHTML+="施工单位就业失败"+"<br/>";
                Property+=-20000;
                update();
            }
            else{
                if(work!="未就业"){
                    document.getElementById("sj").innerHTML+="跳槽成功"+"<br/>";
                }
                else{
                    document.getElementById("sj").innerHTML+="成功入职"+"<br/>";
                }
                work="施工单位";

                i--;
                Salary=sgdw[i];
                lvl=i+1;
                yearchange();
            }
            break;
            }
        case "施工单位":{
            work="施工单位";
            var i=lvl;
            while(100*Math.random()<sgdwSuccess[i]&&i<sgdwNum){
                i++;}
                i--;
                Salary=sgdw[i];
                lvl=i+1;
                TmLevel+=10;
                // 考研成功率
                if(education!="土木工程+硕士"||education!="计算机+硕士"){
                    
                }else
                kychange();
                yearchange();
            }
        }
}

function jydc(){
    switch(work){
        case "未就业":
        case "设计院":
        case "房地产":
        case "小厂":
        case "施工单位":
        {
            var i=0;
            while(100*Math.random()<dcSuccess[i]&&i<dcNum){
                i++;
            }
            if(i==0){
                document.getElementById("sj").innerHTML+="大厂就业失败"+"<br/>";
                Property+=-20000;
                update();
            }
            else{
                if(work!="未就业"){
                    document.getElementById("sj").innerHTML+="跳槽成功"+"<br/>";
                }
                else{
                    document.getElementById("sj").innerHTML+="成功入职"+"<br/>";
                }
                work="大厂";

                i--;
                Salary=dc[i];
                lvl=i+1;
                yearchange();
            }
            break;
            }
        case "大厂":{
            work="大厂";
            var i=lvl;
            while(100*Math.random()<dcSuccess[i]&&i<dcNum){
                i++;}
                i--;
                Salary=dc[i];
                lvl=i+1;
                JsjLevel+=10;
                // 考研成功率
                if(education!="土木工程+硕士"||education!="计算机+硕士"){
                    
                }else
                kychange();
                yearchange();
            }
        }
}

function jyxc(){
    switch(work){
        case "未就业":
        case "设计院":
        case "大厂":
        case "房地产":
        case "施工单位":
        {
            var i=0;
            while(100*Math.random()<xcSuccess[i]&&i<xcNum){
                i++;
            }
            if(i==0){
                document.getElementById("sj").innerHTML+="小厂就业失败"+"<br/>";
                Property+=-20000;
                update();
            }
            else{
                if(work!="未就业"){
                    document.getElementById("sj").innerHTML+="跳槽成功"+"<br/>";
                }
                else{
                    document.getElementById("sj").innerHTML+="成功入职"+"<br/>";
                }
                work="小厂";
                i--;
                Salary=xc[i];
                lvl=i+1;
                yearchange();
            }
            break;
            }
        case "小厂":{
            work="小厂";
            var i=lvl;
            while(100*Math.random()<xcSuccess[i]&&i<xcNum){
                i++;}
                i--;
                Salary=xc[i];
                lvl=i+1;
                JsjLevel+=10;
                // 考研成功率
                if(education!="土木工程+硕士"||education!="计算机+硕士"){

                }else
                kychange();
                yearchange();
            }
        }
}

