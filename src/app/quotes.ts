export class Quote {

public showDescription: boolean;

  constructor(
    public id:number, public name: string, public details: string, public entryDate: Date)

    this.showDescription=false;
  }
}
