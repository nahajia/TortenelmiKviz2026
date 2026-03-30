
let sz=""
let sorszam=0
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        sz+=`
        <img src="kepek/a${sorszam}.jpg" alt="kep" class="kisKep" onclick="nagyit(${sorszam})">
        `
        sorszam++
    }
    sz+="<br>"
}
document.getElementById("kepekHelye").innerHTML=sz


function nagyit(szam){
    let sz=""
    sz+=`<img src="kepek/a${szam}.jpg" alt="" style="height:200px">`
    document.getElementById("nagyKep").innerHTML=sz

    //keverés
    let szavakTomb=[]

    szavakTomb.push(nevekTomb[szam].megoldas)
    szavakTomb.push(nevekTomb[szam].tipp1)
    szavakTomb.push(nevekTomb[szam].tipp2)
    szavakTomb.push(nevekTomb[szam].tipp3)    

    for (let i = 0; i < 100; i++) {
        let r1=Math.floor(Math.random()*szavakTomb.length)
        let r2=Math.floor(Math.random()*szavakTomb.length)
        let csere=szavakTomb[r1]
        szavakTomb[r1]=szavakTomb[r2]
        szavakTomb[r2]=csere        
    }
    

    //gombok kiirasa
    let gombok=""
    for (let i = 0; i < 4; i++) {
        gombok+=`
        <button onclick="ertekel('${szavakTomb[i]}')">${szavakTomb[i]}</button>
        `
        
    }
    document.getElementById("gombokHelye").innerHTML=gombok
}

function ertekel(szemely){
    alert(szemely)
}
