class Carte {
    constructor(titlu,autor,editura,an_aparitie,pret,pagini){
    this.titlu = titlu;
    this.autor =autor;
    this.editura = editura;
    this.an_aparitie =an_aparitie;
    this.pret = pret;
    this.pagini = pagini;
    }
    obtine_titlu(){
        console.log(`Denumirea este ${this.titlu}`)
    }
    deschideCartea(pagina){
        console.log(`deschis la ${pagina}`)

    }
    modificaPret(pretNou){
        if(pretNou<100 && pretNou>this.pret){
            this.pret = pretNou;
        }
    }
    reducere(procent){
     // this.pret = this.pret - (procent/100* this.pret);
     this.pret -=(procent* this.pret)/100 
     console.log(`pretul cu reducere este ${this.pret}`)
    }
}

