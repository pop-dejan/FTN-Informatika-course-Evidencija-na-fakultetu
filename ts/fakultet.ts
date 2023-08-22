/// <reference path="ispit.ts" />
class Fakultet{
    private _naziv: string;
    private _predmeti: Predmet[];
    private _ispiti: Ispit[];


	constructor(naziv: string) {
		this._naziv = naziv;
		this._predmeti = [];
        this._ispiti = [];
	}


    /**
     * Getter naziv
     * @return {string}
     */
	public get naziv(): string {
		return this._naziv;
	}

    /**
     * Getter predmeti
     * @return {Predmet[]}
     */
	public get predmeti(): Predmet[] {
		return this._predmeti;
	}

    /**
     * Getter ispiti
     * @return {Ispit[]}
     */
	public get ispiti(): Ispit[] {
		return this._ispiti;
	}

    /**
     * Setter naziv
     * @param {string} value
     */
	public set naziv(value: string) {
		this._naziv = value;
	}

    /**
     * Setter predmeti
     * @param {Predmet[]} value
     */
	public set predmeti(value: Predmet[]) {
		this._predmeti = value;
	}

    /**
     * Setter ispiti
     * @param {Ispit[]} value
     */
	public set ispiti(value: Ispit[]) {
		this._ispiti = value;
	}

    public dodajIspit(ispit:Ispit):void{
        this._ispiti.push(ispit)
    }

    public refreshIspis():void{
        let output: string = '<tr>';

        for(let i = 0; i < this.ispiti.length; i++){
        
            let klasa = "";
            if((this.ispiti[i].deoIspita == "kolokvijum" && this._ispiti[i].brojBodova >= 35) || (this.ispiti[i].deoIspita == "teorija" && this._ispiti[i].brojBodova >= 10)){
                klasa = `<td class = "green">`
            }else{
                klasa = `<td class = "red">`;
            }

            output += "<th>"+ (i+1) + "</th>" + "<th>"+ this.ispiti[i].imeStudenta+"<br> "+ this.ispiti[i].prezimeStudenta + "</th>" + 
            "<th>"+this.ispiti[i].predmet.nazivPredmeta+"</th>"+ "<th>" + this.ispiti[i].deoIspita +"</th>" + "<th>" + this.ispiti[i].datum +"</th>"+ klasa + this.ispiti[i].brojBodova+ "</td>"+
                    "</th>";
            output += `</tr>`
    }

    
    let outDiv: HTMLElement = document.getElementById("tbody");
    outDiv.innerHTML = output;
  }

  public izracunajProlaznostPoPredmetu(deoIspita: string, predmet: Predmet): void{
        let ispiti1: Ispit[] = []
        for(let i = 0; i < this.ispiti.length; i++){
            if((this.ispiti[i].predmet.idPredmeta == predmet.idPredmeta) && (this.ispiti[i].deoIspita == deoIspita) ){
                    ispiti1.push(this.ispiti[i])
                    
            }
        }
        
        let brojac = 0
        for(let i = 0; i < ispiti1.length; i++){
            if(((ispiti1[i].deoIspita == "kolokvijum") && (ispiti1[i].brojBodova >= 35)) || ((ispiti1[i].deoIspita == "teorija") && (ispiti1[i].brojBodova >= 10))){
                brojac ++
            
        }
        }
        console.log(brojac)
        console.log(ispiti1.length)
        let vrednost = (brojac*100)/ispiti1.length
        
        let output = "<h3>" + "Prolaznost za " + deoIspita + " za predmet " + predmet.nazivPredmeta +  " je " + vrednost.toFixed(1) + "%" + "</h3>"
        let outDiv: HTMLElement = document.getElementById("podaci");
        outDiv.innerHTML = output;
    }

    public najlaksiProfesorPoNacinuPolaganja():void{
        let outDiv: HTMLElement = document.getElementById("podaci")
        
        let ispiti1: Ispit[] = []
        
        for(let i = 0; i < this.ispiti.length; i++){
            if(((this.ispiti[i].deoIspita == "teorija") && (this.ispiti[i].brojBodova >= 15)) || ((this.ispiti[i].deoIspita == "kolokvijum") && (this.ispiti[i].brojBodova >= 35))){
                ispiti1.push(this.ispiti[i])
            }
        }
        let predmetiTeorija = []
        let predmetiKolokvijum = []
        for(let i = 0; i < ispiti1.length; i++){
            if(ispiti1[i].deoIspita == "teorija"){
                predmetiTeorija.push(ispiti1[i].predmet.imeProfesora + " " + ispiti1[i].predmet.prezimeProfesora)
            }else if(ispiti1[i].deoIspita == "kolokvijum"){
                predmetiKolokvijum.push(ispiti1[i].predmet.imeProfesora + " " + ispiti1[i].predmet.prezimeProfesora)

            }  
        }
        console.log(predmetiTeorija)
        console.log(predmetiKolokvijum)

        function maximalan(niz:any[]):any[]{
            let max_count = 0;
            let maxfreq = "";

            for (let i = 0; i < niz.length; i++){
                let count = 0;
                for (let j = 0; j < niz.length; j++){
                   if (niz[i] == niz[j]){
                      count++;
                   }
                }
               
                if (count > max_count){
                   max_count = count;
                   maxfreq = niz[i];
                }
             }
             let rez = []
             rez.push(maxfreq,max_count)
             return rez
        }
        maximalan(predmetiKolokvijum)

        maximalan(predmetiTeorija)
        
        
        
        
        
        let output = "<h3>" + "Profesor sa najlaksim teoretskim ispitom je " + maximalan(predmetiTeorija)[0] +  " sa ukupno " + maximalan(predmetiTeorija)[1] + " polozenih ispita." + "</h3>"
        output += "<br>"
        output += "<h3>" + "Profesor sa najlaksim kolokvijumom je " + maximalan(predmetiKolokvijum)[0] +  " sa ukupno " + maximalan(predmetiKolokvijum)[1] + " polozenih kolokvijuma." + "</h3>"
        outDiv.innerHTML = output;
    }

    public polozeniPredmeti(predmet:Predmet):void{
        
        let ispiti1: Ispit[] = []
        let ispiti2: Ispit[] = []
        let predmetObrade = predmet
        for(let i = 0; i < this.ispiti.length; i++){
            if(this.ispiti[i].predmet.idPredmeta == predmetObrade.idPredmeta && this.ispiti[i].deoIspita == "teorija"){
                ispiti1.push(this.ispiti[i])
                    
            }else if(this.ispiti[i].predmet.idPredmeta == predmetObrade.idPredmeta && this.ispiti[i].deoIspita == "kolokvijum"){
                ispiti2.push(this.ispiti[i])
            }
        }
        console.log(ispiti1)
        console.log(ispiti2)

        function CommonItemsArray(array_1:Ispit[], array_2:Ispit[]) {
            var commonArray = [];
             
            for (var i = 0; i < array_1.length; i++) {
               for (var j = 0; j < array_2.length; j++) {
                  if (array_1[i].brojIndeksaStudenta == array_2[j].brojIndeksaStudenta && (array_1[i].brojBodova + array_2[j].brojBodova)>50) { // If the item is common in both arrays
                     commonArray.push([array_1[i].imeStudenta, array_1[i].prezimeStudenta, (array_1[i].brojBodova + array_2[j].brojBodova)]); // Push common items to the array
                  }
               }
            }
            return commonArray; ž
         }
       
         let output: string = '<tr>';
         for (var i = 0; i < CommonItemsArray(ispiti1,ispiti2).length; i++) {
            let klasa = `<td class = "green">`
            output += "<th>"+ (i+1) + "</th>" + "<th>"+ CommonItemsArray(ispiti1,ispiti2)[i][0]+"<br> "+ CommonItemsArray(ispiti1,ispiti2)[i][1] + "</th>" + 
            "<th>"+this.ispiti[i].predmet.nazivPredmeta+"</th>"+ "<th>" + "ukupno" +"</th>" + "<th>" + this.ispiti[i].datum +"</th>"+ klasa + CommonItemsArray(ispiti1,ispiti2)[i][2]+ "</td>"+
                    "</th>";
            output += `</tr>`

         }
         let outDiv: HTMLElement = document.getElementById("tbody");
         outDiv.innerHTML = output;

      
       

         
    }
        
    
    
}


