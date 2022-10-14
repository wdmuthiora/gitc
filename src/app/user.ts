export class User{
  constructor(
    public id: number,
    public fullName: string,
    public email: string,
    public phone: number,
    public address: string
  ) { }
}