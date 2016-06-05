export default class Vote{
    label: string;
    votes: number;
    
    constructor(lbl: string){
        this.votes = 0;
        this.label = lbl;
    }
}