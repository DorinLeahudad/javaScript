class Student {
    constructor(id , nume,varsta,nota1,nota2){
    this.id = id;
    this.nume= nume;
    this.varsta= varsta;
    this.nota1 = nota1;
    this.nota2 = nota2;
  
 }
 salut(nume){
    console.log(`Bun venit la examen ${nume}`)
 }
 examen(nota1){
    console.log(`nota este ${nota1}`)
 }
}