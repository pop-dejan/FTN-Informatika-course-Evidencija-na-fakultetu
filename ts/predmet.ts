class Predmet{
    private _imeProfesora: string;
    private _prezimeProfesora: string;
    private _idPredmeta: number;
	private _nazivPredmeta: string;


	constructor(imeProfesora: string, prezimeProfesora: string, idPredmeta: number, nazivPredmeta: string) {
		this._imeProfesora = imeProfesora;
		this._prezimeProfesora = prezimeProfesora;
		this._idPredmeta = idPredmeta;
		this._nazivPredmeta = nazivPredmeta;
	}


    /**
     * Getter imeProfesora
     * @return {string}
     */
	public get imeProfesora(): string {
		return this._imeProfesora;
	}

    /**
     * Getter prezimeProfesora
     * @return {string}
     */
	public get prezimeProfesora(): string {
		return this._prezimeProfesora;
	}

    /**
     * Getter idPredmeta
     * @return {number}
     */
	public get idPredmeta(): number {
		return this._idPredmeta;
	}

    /**
     * Getter nazivPredmeta
     * @return {string}
     */
	public get nazivPredmeta(): string {
		return this._nazivPredmeta;
	}

    /**
     * Setter imeProfesora
     * @param {string} value
     */
	public set imeProfesora(value: string) {
		this._imeProfesora = value;
	}

    /**
     * Setter prezimeProfesora
     * @param {string} value
     */
	public set prezimeProfesora(value: string) {
		this._prezimeProfesora = value;
	}

    /**
     * Setter idPredmeta
     * @param {number} value
     */
	public set idPredmeta(value: number) {
		this._idPredmeta = value;
	}

    /**
     * Setter nazivPredmeta
     * @param {string} value
     */
	public set nazivPredmeta(value: string) {
		this._nazivPredmeta = value;
	}

}