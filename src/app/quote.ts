export class Quote {

public showDescription: boolean;

  constructor(public id: number, public author: string, public submitter: string, public description:string, public entryDate: Date){
    this.showDescription=false;
  }
}
