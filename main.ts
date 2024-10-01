let torreIni:number[]=[];
let torreFin:number[]=[];
let torreAux:number[]=[];
let numeroDiscos:number=3;

function rellenar(nDiscos:number,t1:number[]){
    for(let i = 1 ; i<=nDiscos ; i++){
        t1.push(i)
    }
    return t1;
}

torreIni = rellenar(numeroDiscos,torreIni);

function hanoi(nDiscos:number,torreIni:number[],torreFin:number[],torreAux:number[]) {
    if(nDiscos===1){
        const disco = torreIni.pop()
        if (disco !== undefined){
            torreFin.push(disco)
            console.log("disco: "+disco+" desplazado")
        }
    }else{
        hanoi(nDiscos-1,torreIni,torreAux,torreFin)
        const disco = torreIni.pop()
        if (disco !== undefined){
            torreFin.push(disco)
            console.log("disco: "+disco+" desplazado")
        }
        hanoi(nDiscos-1,torreAux,torreFin,torreIni)
    }
}

hanoi(numeroDiscos,torreIni,torreFin,torreAux)

console.log(torreIni)
console.log(torreFin)
console.log(torreAux)