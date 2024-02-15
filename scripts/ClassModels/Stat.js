class Stat{
    static #TableCost={
        "-4":-10,
        "-3":-15,
        "-2":-20,
        "-1":-25,
        "0":0,
        "1":10,
        "2":15,
        "3":20,
        "4":25,
        "5":30
    }
    static #ProfLvToNameTable={
        0:"",
        1:"Proficient",
        2:"Expertise"
    }
    static #MaxStatValue=5;
    static #MinStatValue=-4;
    static #ErrorWrongValueTypeProfLv="Value provided to the seter of ProficiencyLevel uses the wrong type, the accepted types are string or value";
    static #ErrorInvalidValueProfLv="Value provided does not exist on the value to string table of class Stat";
    static #ErrorInvalidStatValue = "Stats can only go between the values "+Stat.#MinStatValue+" and "+Stat.#MaxStatValue+".";
    #value
    #proficiencyLevel
    constructor(value, proficiencyLevel){
        this.Value=value;
        this.ProficiencyLevel=proficiencyLevel;
    }
    get Value(){
        return this.#value;
    }
    get ProficiencyLevel(){
        return Stat.#ProfLvToNameTable[this.#proficiencyLevel];
    }
    set ProficiencyLevel(value){
        if(typeof value=='string'){
            for(let i in Stat.#ProfLvToNameTable){
                if(Stat.#ProfLvToNameTable[i]==value){
                    this.#proficiencyLevel=i;
                    return;
                }
            }
            throw new Error(Stat.#ErrorInvalidValueProfLv);
        }else if(typeof value=='number'){
            if(typeof Stat.#ProfLvToNameTable[value]!=='undefined'){
                this.#proficiencyLevel=value;
                return;
            }
            throw new Error(Stat.#ErrorInvalidValueProfLv);
        }
        throw new Error(Stat.#ErrorWrongValueTypeProfLv);
    }
    set Value(value){
        if(typeof Stat.#TableCost[value]!=='undefined'){
            this.#value=value;
            return
        }
        throw new Error(Stat.#ErrorInvalidStatValue);
    }
    GetSPCost(){
        if(this.Value>=0){

        }
    }
    GetRealSPCost(){
        if(this.Value<0){
            return 0;
        }
        return Stat.#TableCost[this.Value];
    }
}