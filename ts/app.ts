/// <reference path="fakultet.ts" />

let fakultet: Fakultet;
let aktivanPredmet: Predmet;

function promeniAktivnog(selekt: HTMLSelectElement): void {
    aktivanPredmet = fakultet.predmeti.filter(el => el.idPredmeta == Number(selekt.value))[0];
    fakultet.refreshIspis();
    
}

function wireEvents(): void {
   //TODO Implementirati
   document.getElementById("dodajIspit").addEventListener("click", () => {


    let indeks = (document.getElementById("indeks") as HTMLInputElement).value;
    let ime = (document.getElementById("ime") as HTMLInputElement).value;
    let prezime = (document.getElementById("prezime") as HTMLInputElement).value;
    let datum = (document.getElementById("datum") as HTMLInputElement).value;
    let brojBodovaTeorija = Number((document.getElementById("teorija") as HTMLInputElement).value);
    let brojBodovaKolokvijum = Number((document.getElementById("kolokvijum") as HTMLInputElement).value);

    let p = new Ispit(aktivanPredmet,indeks,ime,prezime,"teorija",datum,brojBodovaTeorija);
    let p1 = new Ispit(aktivanPredmet,indeks,ime,prezime,"kolokvijum",datum,brojBodovaKolokvijum);

    fakultet.ispiti.push(p,p1)
    fakultet.refreshIspis();
    
});

document.getElementById("izracunajProlaznostPoPredmetu").addEventListener("click", () => {


    let nacinPolaganja = (document.getElementById("nacinPolaganjaSelekt") as HTMLSelectElement).value;
    fakultet.izracunajProlaznostPoPredmetu(nacinPolaganja,aktivanPredmet)
    
    
});

document.getElementById("najlaksiProferoriPoNacinuPolaganja").addEventListener("click", () => {
    fakultet.najlaksiProfesorPoNacinuPolaganja()
});

document.getElementById("polozenPredmet").addEventListener("click", () => {
    fakultet.polozeniPredmeti(aktivanPredmet)
});

}














window.onload = () => {
     //OVDE TESTIRATI KOD
    //-----------------



    //-----------------
    initializeData();
}

function initializeData() {
    fakultet = new Fakultet("FTN");
    let p1 = new Predmet("Pera", "Peric", 1, "Algoritimi");
    let p2 = new Predmet("Mika", "Mikic", 2, "Strukture podataka");
    let p3 = new Predmet("Zika", "Zikic", 3, "Bioloski inspirisano racunarstvo");
    fakultet.predmeti = [p1, p2, p3];

    let i11 = new Ispit(p1, "i1", "Jovan", "Jovanovic", "teorija", "2022-02-11", 5);
    let i12 = new Ispit(p1, "i1", "Jovan", "Jovanovic", "kolokvijum", "2022-03-05", 60);
    let i21 = new Ispit(p1, "i2", "Ivan", "Ivanovic", "teorija", "2022-05-09", 25);
    let i22 = new Ispit(p1, "i2", "Ivan", "Ivanovic", "kolokvijum", "2022-07-21", 68);
    let i31 = new Ispit(p1, "i3", "Dejan", "Dejan", "teorija", "2022-05-09", 7);
    let i32 = new Ispit(p1, "i3", "Dejan", "Dejan", "kolokvijum", "2022-07-21", 69);
    
    let i41 = new Ispit(p2, "i4", "Marko", "Markovic", "teorija", "2022-02-11", 20);
    let i42 = new Ispit(p2, "i4", "Marko", "Markovic", "kolokvijum", "2022-03-05", 64);
    let i51 = new Ispit(p2, "i5", "Nikola", "Nikolic", "teorija", "2022-05-09", 18);
    let i52 = new Ispit(p2, "i5", "Nikola", "Nikolic", "kolokvijum", "2022-07-21", 15);
    let i61 = new Ispit(p2, "i6", "Luka", "Lukic", "teorija", "2022-05-09", 22);
    let i62 = new Ispit(p2, "i6", "Luka", "Lukic", "kolokvijum", "2022-07-21", 33);

    let i71 = new Ispit(p3, "i7", "Djordje", "Djordjevic", "teorija", "2022-02-11", 23);
    let i72 = new Ispit(p3, "i7", "Djordje", "Djordjevic", "kolokvijum", "2022-03-05", 66);
    let i81 = new Ispit(p3, "i8", "Branko", "Brankovic", "teorija", "2022-05-09", 7);
    let i82 = new Ispit(p3, "i8", "Branko", "Brankovic", "kolokvijum", "2022-07-21", 21);
    let i91 = new Ispit(p3, "i9", "Ognjen", "Ognjenovic", "teorija", "2022-05-09", 8);
    let i92 = new Ispit(p3, "i9", "Ognjen", "Ognjenovic", "kolokvijum", "2022-07-21", 34);
    let i101 = new Ispit(p3, "i10", "Dimitrije", "Dimitrijevic", "teorija", "2022-05-09", 29);
    let i102 = new Ispit(p3, "i10", "Dimitrije", "Dimitrijevic", "kolokvijum", "2022-07-21", 70);
    let i111 = new Ispit(p3, "i11", "Vladimir", "Vladimirovic", "teorija", "2022-05-09", 9);
    let i112 = new Ispit(p3, "i11", "Vladimir", "Vladimirovic", "kolokvijum", "2022-07-21", 17);

    fakultet.dodajIspit(i11);
    fakultet.dodajIspit(i12);
    fakultet.dodajIspit(i21);
    fakultet.dodajIspit(i22);
    fakultet.dodajIspit(i31);
    fakultet.dodajIspit(i32);
    fakultet.dodajIspit(i41);
    fakultet.dodajIspit(i42);
    fakultet.dodajIspit(i51);
    fakultet.dodajIspit(i52);
    fakultet.dodajIspit(i61);
    fakultet.dodajIspit(i62);
    fakultet.dodajIspit(i71);
    fakultet.dodajIspit(i72);
    fakultet.dodajIspit(i81);
    fakultet.dodajIspit(i82);
    fakultet.dodajIspit(i91);
    fakultet.dodajIspit(i92);
    fakultet.dodajIspit(i101);
    fakultet.dodajIspit(i102);
    fakultet.dodajIspit(i111);
    fakultet.dodajIspit(i112);

    let select: HTMLSelectElement = document.getElementById("predmet") as HTMLSelectElement;
    fakultet.predmeti.forEach(el => {
        select.options.add(new Option(el.nazivPredmeta, el.idPredmeta.toString()));
    });

    aktivanPredmet = fakultet.predmeti[0];
    
    fakultet.refreshIspis();
    console.log(aktivanPredmet)
    wireEvents();

}