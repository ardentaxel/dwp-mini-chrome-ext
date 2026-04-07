

export default class Student {
    constructor(name,tabId,pks){
        this.name = name;
        this.pks = pks;
        this.tabId = tabId;
    }

    getName(){
        return this.name;
    }

    

    getPageCount(){
        let count = 0;
        this.pks.forEach(pk => {
            count += pk.count;
        });
        return count;
    }

    addPK(pk){
        if(!this.pks.some(existingPK => existingPK.id === pk.id)){
            this.pks.push(pk);
            return true;
        }
    }
}