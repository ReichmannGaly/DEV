let N = 8
let paires = ["DEFINITION AMBITION","CONNECTABLE DECONNECTER","TABULATION TABOU","ORDINATEUR CLAVIER","TERMINER DETERMINATION","CONSTITUTIONS DESTITUTION","CCCBABADDD DDDDBABAEE","A B"]

let PlusLongFacteur = (paire) => {
    let temp = []
    let mots = paire.split(" ")
    for(let i=0;i<mots[1].length;i++){
        for(let j=mots[1].length;j>i;j--){  
            let facteur = mots[1].slice(i,j)
            if(mots[0].includes(facteur)){
                temp.push(facteur)
            }
        }
    }
    if(temp.length > 0){
        let maxlength = Math.max(...temp.map( e => e.length));
        for(let i=0;i<temp.length;i++){
            if(temp[i].length == maxlength){
                if(temp[i].length > 2){
                    return temp[i];
                }
                else if(temp[i].length < 2){
                    return "PAS DE FACTEUR";
                }
            }
        };
    }
    else if(temp.length == 0){
        return "PAS DE FACTEUR";
    }
}

let ListePlusLongsFacteurs = (donnees) => {
    let liste = {}
    for(let i=0;i<donnees.length;i++){
        liste[donnees[i]] = PlusLongFacteur(donnees[i])
    }
    console.log(N)
    return liste;
}
console.log(ListePlusLongsFacteurs(paires));