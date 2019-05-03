export class Quote {

public showDescription: boolean;

  constructor(public id: number, public author: string, public submitter: string, public description:string, public upVote: number, public downVote:number, public entryDate: Date){


    //  hide details
    this.showDescription=false;

    // initialize upvote
    this.upVote=0

    // initialize downvote
    this.downVote = 0
  }
}
 