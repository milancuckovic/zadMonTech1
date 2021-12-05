var abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var outIspistest=document.getElementById("outIspis");
function pokreni(){
    var unos=document.getElementById("unos").value;
    
    var linijeUnos=unos.split(/\r*\n/);
    var matrica=[];
    var tacke=[];
    var az=0;
    var bul=true;

    while(bul)
    {
        var kolona=-1;
        var red=-1;
        for(let i=0;i<linijeUnos.length;i++)
        {
            if(linijeUnos[i].indexOf(abc[az])>kolona)
            {
                kolona=linijeUnos[i].indexOf(abc[az]);
                red=i;
                break;
            }
        }
        if (kolona==-1)
        {
            bul=false;
        }
        else
        {
            tacke.push([red,kolona]);
        }
        az++;        
    }
    
    kreiranjeMatrice(tacke,matrica);
    popunjavanjeMatrice(tacke,matrica);
    Ispis(matrica);
    console.log(tacke)
    console.log(matrica);
}



function provera(t){
    let num=0;
    for(let b=0;b<t.length;b++){
        if(t[b][0]>num)
            num=t[b][0];
    }
    return num;
}

function kreiranjeMatrice(t,mat){
    for(let m=0;m<=provera(t);m++){
        mat.push([]);
    }   
}
function popunjavanjeMatrice(t,mat){
    for(let i=0;i<t.length-1;i++)
    {   
        var a = t[i+1][0]-t[i][0]
        var b = t[i+1][1]-t[i][1]
        var k = Math.max(Math.abs(a), Math.abs(b))
        while(k>=0)
        {
            mat[(t[i][0]+Math.sign(a)*k)][(t[i][1]+Math.sign(b)*k)]="*";
            k--;
        }  
    } 
}


function Ispis(mat){
    
    var tekst="";
    var slika="";
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[i].length; j++) 
        {
            if(mat[i][j]=="*")
            {
                tekst+="*";
            }
            else
            {
                tekst+="\u00A0\u00A0";
            }
        }
        slika+=(tekst+"<br>")
        tekst="";
    }
    outIspistest.innerHTML=slika;

}





