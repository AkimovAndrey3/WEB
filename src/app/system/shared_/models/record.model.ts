export class Record {
  constructor(
    public name: string,
    public date: string,
    public description: string,
    public author?:string,
    public id?: number
  ) {}
}
