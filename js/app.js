var Predmet = /** @class */ (function () {
    function Predmet(imeProfesora, prezimeProfesora, idPredmeta, nazivPredmeta) {
        this._imeProfesora = imeProfesora;
        this._prezimeProfesora = prezimeProfesora;
        this._idPredmeta = idPredmeta;
        this._nazivPredmeta = nazivPredmeta;
    }
    Object.defineProperty(Predmet.prototype, "imeProfesora", {
        /**
         * Getter imeProfesora
         * @return {string}
         */
        get: function () {
            return this._imeProfesora;
        },
        /**
         * Setter imeProfesora
         * @param {string} value
         */
        set: function (value) {
            this._imeProfesora = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "prezimeProfesora", {
        /**
         * Getter prezimeProfesora
         * @return {string}
         */
        get: function () {
            return this._prezimeProfesora;
        },
        /**
         * Setter prezimeProfesora
         * @param {string} value
         */
        set: function (value) {
            this._prezimeProfesora = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "idPredmeta", {
        /**
         * Getter idPredmeta
         * @return {number}
         */
        get: function () {
            return this._idPredmeta;
        },
        /**
         * Setter idPredmeta
         * @param {number} value
         */
        set: function (value) {
            this._idPredmeta = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "nazivPredmeta", {
        /**
         * Getter nazivPredmeta
         * @return {string}
         */
        get: function () {
            return this._nazivPredmeta;
        },
        /**
         * Setter nazivPredmeta
         * @param {string} value
         */
        set: function (value) {
            this._nazivPredmeta = value;
        },
        enumerable: false,
        configurable: true
    });
    return Predmet;
}());
/// <reference path="predmet.ts" />
var Ispit = /** @class */ (function () {
    function Ispit(predmet, brojIndeksaStudenta, imeStudenta, prezimeStudenta, deoIspita, datum, brojBodova) {
        this._predmet = predmet;
        this._brojIndeksaStudenta = brojIndeksaStudenta;
        this._imeStudenta = imeStudenta;
        this._prezimeStudenta = prezimeStudenta;
        this._deoIspita = deoIspita;
        this._datum = datum;
        this._brojBodova = brojBodova;
    }
    Object.defineProperty(Ispit.prototype, "predmet", {
        /**
         * Getter predmet
         * @return {Predmet}
         */
        get: function () {
            return this._predmet;
        },
        /**
         * Setter predmet
         * @param {Predmet} value
         */
        set: function (value) {
            this._predmet = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "brojIndeksaStudenta", {
        /**
         * Getter brojIndeksaStudenta
         * @return {string}
         */
        get: function () {
            return this._brojIndeksaStudenta;
        },
        /**
         * Setter brojIndeksaStudenta
         * @param {string} value
         */
        set: function (value) {
            this._brojIndeksaStudenta = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "imeStudenta", {
        /**
         * Getter imeStudenta
         * @return {string}
         */
        get: function () {
            return this._imeStudenta;
        },
        /**
         * Setter imeStudenta
         * @param {string} value
         */
        set: function (value) {
            this._imeStudenta = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "prezimeStudenta", {
        /**
         * Getter prezimeStudenta
         * @return {string}
         */
        get: function () {
            return this._prezimeStudenta;
        },
        /**
         * Setter prezimeStudenta
         * @param {string} value
         */
        set: function (value) {
            this._prezimeStudenta = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "deoIspita", {
        /**
         * Getter deoIspita
         * @return {string}
         */
        get: function () {
            return this._deoIspita;
        },
        /**
         * Setter deoIspita
         * @param {string} value
         */
        set: function (value) {
            this._deoIspita = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "datum", {
        /**
         * Getter datum
         * @return {string}
         */
        get: function () {
            return this._datum;
        },
        /**
         * Setter datum
         * @param {string} value
         */
        set: function (value) {
            this._datum = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "brojBodova", {
        /**
         * Getter brojBodova
         * @return {number}
         */
        get: function () {
            return this._brojBodova;
        },
        /**
         * Setter brojBodova
         * @param {number} value
         */
        set: function (value) {
            this._brojBodova = value;
        },
        enumerable: false,
        configurable: true
    });
    return Ispit;
}());
/// <reference path="ispit.ts" />
var Fakultet = /** @class */ (function () {
    function Fakultet(naziv) {
        this._naziv = naziv;
        this._predmeti = [];
        this._ispiti = [];
    }
    Object.defineProperty(Fakultet.prototype, "naziv", {
        /**
         * Getter naziv
         * @return {string}
         */
        get: function () {
            return this._naziv;
        },
        /**
         * Setter naziv
         * @param {string} value
         */
        set: function (value) {
            this._naziv = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fakultet.prototype, "predmeti", {
        /**
         * Getter predmeti
         * @return {Predmet[]}
         */
        get: function () {
            return this._predmeti;
        },
        /**
         * Setter predmeti
         * @param {Predmet[]} value
         */
        set: function (value) {
            this._predmeti = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fakultet.prototype, "ispiti", {
        /**
         * Getter ispiti
         * @return {Ispit[]}
         */
        get: function () {
            return this._ispiti;
        },
        /**
         * Setter ispiti
         * @param {Ispit[]} value
         */
        set: function (value) {
            this._ispiti = value;
        },
        enumerable: false,
        configurable: true
    });
    Fakultet.prototype.dodajIspit = function (ispit) {
        this._ispiti.push(ispit);
    };
    Fakultet.prototype.refreshIspis = function () {
        var output = '<tr>';
        for (var i = 0; i < this.ispiti.length; i++) {
            var klasa = "";
            if ((this.ispiti[i].deoIspita == "kolokvijum" && this._ispiti[i].brojBodova >= 35) || (this.ispiti[i].deoIspita == "teorija" && this._ispiti[i].brojBodova >= 10)) {
                klasa = "<td class = \"green\">";
            }
            else {
                klasa = "<td class = \"red\">";
            }
            output += "<th>" + (i + 1) + "</th>" + "<th>" + this.ispiti[i].imeStudenta + "<br> " + this.ispiti[i].prezimeStudenta + "</th>" +
                "<th>" + this.ispiti[i].predmet.nazivPredmeta + "</th>" + "<th>" + this.ispiti[i].deoIspita + "</th>" + "<th>" + this.ispiti[i].datum + "</th>" + klasa + this.ispiti[i].brojBodova + "</td>" +
                "</th>";
            output += "</tr>";
        }
        var outDiv = document.getElementById("tbody");
        outDiv.innerHTML = output;
    };
    Fakultet.prototype.izracunajProlaznostPoPredmetu = function (deoIspita, predmet) {
        var ispiti1 = [];
        for (var i = 0; i < this.ispiti.length; i++) {
            if ((this.ispiti[i].predmet.idPredmeta == predmet.idPredmeta) && (this.ispiti[i].deoIspita == deoIspita)) {
                ispiti1.push(this.ispiti[i]);
            }
        }
        var brojac = 0;
        for (var i = 0; i < ispiti1.length; i++) {
            if (((ispiti1[i].deoIspita == "kolokvijum") && (ispiti1[i].brojBodova >= 35)) || ((ispiti1[i].deoIspita == "teorija") && (ispiti1[i].brojBodova >= 10))) {
                brojac++;
            }
        }
        console.log(brojac);
        console.log(ispiti1.length);
        var vrednost = (brojac * 100) / ispiti1.length;
        var output = "<h3>" + "Prolaznost za " + deoIspita + " za predmet " + predmet.nazivPredmeta + " je " + vrednost.toFixed(1) + "%" + "</h3>";
        var outDiv = document.getElementById("podaci");
        outDiv.innerHTML = output;
    };
    Fakultet.prototype.najlaksiProfesorPoNacinuPolaganja = function () {
        var outDiv = document.getElementById("podaci");
        var ispiti1 = [];
        for (var i = 0; i < this.ispiti.length; i++) {
            if (((this.ispiti[i].deoIspita == "teorija") && (this.ispiti[i].brojBodova >= 15)) || ((this.ispiti[i].deoIspita == "kolokvijum") && (this.ispiti[i].brojBodova >= 35))) {
                ispiti1.push(this.ispiti[i]);
            }
        }
        var predmetiTeorija = [];
        var predmetiKolokvijum = [];
        for (var i = 0; i < ispiti1.length; i++) {
            if (ispiti1[i].deoIspita == "teorija") {
                predmetiTeorija.push(ispiti1[i].predmet.imeProfesora + " " + ispiti1[i].predmet.prezimeProfesora);
            }
            else if (ispiti1[i].deoIspita == "kolokvijum") {
                predmetiKolokvijum.push(ispiti1[i].predmet.imeProfesora + " " + ispiti1[i].predmet.prezimeProfesora);
            }
        }
        console.log(predmetiTeorija);
        console.log(predmetiKolokvijum);
        function maximalan(niz) {
            var max_count = 0;
            var maxfreq = "";
            for (var i = 0; i < niz.length; i++) {
                var count = 0;
                for (var j = 0; j < niz.length; j++) {
                    if (niz[i] == niz[j]) {
                        count++;
                    }
                }
                if (count > max_count) {
                    max_count = count;
                    maxfreq = niz[i];
                }
            }
            var rez = [];
            rez.push(maxfreq, max_count);
            return rez;
        }
        maximalan(predmetiKolokvijum);
        maximalan(predmetiTeorija);
        var output = "<h3>" + "Profesor sa najlaksim teoretskim ispitom je " + maximalan(predmetiTeorija)[0] + " sa ukupno " + maximalan(predmetiTeorija)[1] + " polozenih ispita." + "</h3>";
        output += "<br>";
        output += "<h3>" + "Profesor sa najlaksim kolokvijumom je " + maximalan(predmetiKolokvijum)[0] + " sa ukupno " + maximalan(predmetiKolokvijum)[1] + " polozenih kolokvijuma." + "</h3>";
        outDiv.innerHTML = output;
    };
    Fakultet.prototype.polozeniPredmeti = function (predmet) {
        var broj = [];
        var ispiti1 = [];
        var ispiti2 = [];
        var predmetObrade = predmet;
        for (var i_1 = 0; i_1 < this.ispiti.length; i_1++) {
            if (this.ispiti[i_1].predmet.idPredmeta == predmetObrade.idPredmeta && this.ispiti[i_1].deoIspita == "teorija") {
                ispiti1.push(this.ispiti[i_1]);
            }
            else if (this.ispiti[i_1].predmet.idPredmeta == predmetObrade.idPredmeta && this.ispiti[i_1].deoIspita == "kolokvijum") {
                ispiti2.push(this.ispiti[i_1]);
            }
        }
        console.log(ispiti1);
        console.log(ispiti2);
        function CommonItemsArray(array_1, array_2) {
            var commonArray = [];
            // Create an array for common items in another two arrays.
            for (var i = 0; i < array_1.length; i++) {
                for (var j = 0; j < array_2.length; j++) {
                    if (array_1[i].brojIndeksaStudenta == array_2[j].brojIndeksaStudenta && (array_1[i].brojBodova + array_2[j].brojBodova) > 50) { // If the item is common in both arrays
                        commonArray.push([array_1[i].imeStudenta, array_1[i].prezimeStudenta, (array_1[i].brojBodova + array_2[j].brojBodova)]); // Push common items to the array
                    }
                }
            }
            return commonArray; // Return the common items
        }
        var output = '<tr>';
        for (var i = 0; i < CommonItemsArray(ispiti1, ispiti2).length; i++) {
            var klasa = "<td class = \"green\">";
            output += "<th>" + (i + 1) + "</th>" + "<th>" + CommonItemsArray(ispiti1, ispiti2)[i][0] + "<br> " + CommonItemsArray(ispiti1, ispiti2)[i][1] + "</th>" +
                "<th>" + this.ispiti[i].predmet.nazivPredmeta + "</th>" + "<th>" + "ukupno" + "</th>" + "<th>" + this.ispiti[i].datum + "</th>" + klasa + CommonItemsArray(ispiti1, ispiti2)[i][2] + "</td>" +
                "</th>";
            output += "</tr>";
        }
        var outDiv = document.getElementById("tbody");
        outDiv.innerHTML = output;
    };
    return Fakultet;
}());
/// <reference path="fakultet.ts" />
var fakultet;
var aktivanPredmet;
function promeniAktivnog(selekt) {
    aktivanPredmet = fakultet.predmeti.filter(function (el) { return el.idPredmeta == Number(selekt.value); })[0];
    fakultet.refreshIspis();
}
function wireEvents() {
    //TODO Implementirati
    document.getElementById("dodajIspit").addEventListener("click", function () {
        var indeks = document.getElementById("indeks").value;
        var ime = document.getElementById("ime").value;
        var prezime = document.getElementById("prezime").value;
        var datum = document.getElementById("datum").value;
        var brojBodovaTeorija = Number(document.getElementById("teorija").value);
        var brojBodovaKolokvijum = Number(document.getElementById("kolokvijum").value);
        var p = new Ispit(aktivanPredmet, indeks, ime, prezime, "teorija", datum, brojBodovaTeorija);
        var p1 = new Ispit(aktivanPredmet, indeks, ime, prezime, "kolokvijum", datum, brojBodovaKolokvijum);
        fakultet.ispiti.push(p, p1);
        fakultet.refreshIspis();
    });
    document.getElementById("izracunajProlaznostPoPredmetu").addEventListener("click", function () {
        var nacinPolaganja = document.getElementById("nacinPolaganjaSelekt").value;
        fakultet.izracunajProlaznostPoPredmetu(nacinPolaganja, aktivanPredmet);
    });
    document.getElementById("najlaksiProferoriPoNacinuPolaganja").addEventListener("click", function () {
        fakultet.najlaksiProfesorPoNacinuPolaganja();
    });
    document.getElementById("polozenPredmet").addEventListener("click", function () {
        fakultet.polozeniPredmeti(aktivanPredmet);
    });
}
window.onload = function () {
    //OVDE TESTIRATI KOD
    //-----------------
    //-----------------
    initializeData();
};
function initializeData() {
    fakultet = new Fakultet("FTN");
    var p1 = new Predmet("Pera", "Peric", 1, "Algoritimi");
    var p2 = new Predmet("Mika", "Mikic", 2, "Strukture podataka");
    var p3 = new Predmet("Zika", "Zikic", 3, "Bioloski inspirisano racunarstvo");
    fakultet.predmeti = [p1, p2, p3];
    var i11 = new Ispit(p1, "i1", "Jovan", "Jovanovic", "teorija", "2022-02-11", 5);
    var i12 = new Ispit(p1, "i1", "Jovan", "Jovanovic", "kolokvijum", "2022-03-05", 60);
    var i21 = new Ispit(p1, "i2", "Ivan", "Ivanovic", "teorija", "2022-05-09", 25);
    var i22 = new Ispit(p1, "i2", "Ivan", "Ivanovic", "kolokvijum", "2022-07-21", 68);
    var i31 = new Ispit(p1, "i3", "Dejan", "Dejan", "teorija", "2022-05-09", 7);
    var i32 = new Ispit(p1, "i3", "Dejan", "Dejan", "kolokvijum", "2022-07-21", 69);
    var i41 = new Ispit(p2, "i4", "Marko", "Markovic", "teorija", "2022-02-11", 20);
    var i42 = new Ispit(p2, "i4", "Marko", "Markovic", "kolokvijum", "2022-03-05", 64);
    var i51 = new Ispit(p2, "i5", "Nikola", "Nikolic", "teorija", "2022-05-09", 18);
    var i52 = new Ispit(p2, "i5", "Nikola", "Nikolic", "kolokvijum", "2022-07-21", 15);
    var i61 = new Ispit(p2, "i6", "Luka", "Lukic", "teorija", "2022-05-09", 22);
    var i62 = new Ispit(p2, "i6", "Luka", "Lukic", "kolokvijum", "2022-07-21", 33);
    var i71 = new Ispit(p3, "i7", "Djordje", "Djordjevic", "teorija", "2022-02-11", 23);
    var i72 = new Ispit(p3, "i7", "Djordje", "Djordjevic", "kolokvijum", "2022-03-05", 66);
    var i81 = new Ispit(p3, "i8", "Branko", "Brankovic", "teorija", "2022-05-09", 7);
    var i82 = new Ispit(p3, "i8", "Branko", "Brankovic", "kolokvijum", "2022-07-21", 21);
    var i91 = new Ispit(p3, "i9", "Ognjen", "Ognjenovic", "teorija", "2022-05-09", 8);
    var i92 = new Ispit(p3, "i9", "Ognjen", "Ognjenovic", "kolokvijum", "2022-07-21", 34);
    var i101 = new Ispit(p3, "i10", "Dimitrije", "Dimitrijevic", "teorija", "2022-05-09", 29);
    var i102 = new Ispit(p3, "i10", "Dimitrije", "Dimitrijevic", "kolokvijum", "2022-07-21", 70);
    var i111 = new Ispit(p3, "i11", "Vladimir", "Vladimirovic", "teorija", "2022-05-09", 9);
    var i112 = new Ispit(p3, "i11", "Vladimir", "Vladimirovic", "kolokvijum", "2022-07-21", 17);
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
    var select = document.getElementById("predmet");
    fakultet.predmeti.forEach(function (el) {
        select.options.add(new Option(el.nazivPredmeta, el.idPredmeta.toString()));
    });
    aktivanPredmet = fakultet.predmeti[0];
    fakultet.refreshIspis();
    console.log(aktivanPredmet);
    wireEvents();
}
//# sourceMappingURL=app.js.map