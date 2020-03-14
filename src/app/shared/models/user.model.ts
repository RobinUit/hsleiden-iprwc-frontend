export class DatabaseUser {

  constructor(
    public id: string,
    public email: string,
    public firstname?: string,
    public lastname?: string,
    public isAdmin?: number) { }


  getIsAdmin() {
    if (this.isAdmin == 1) {
      return true;
    }
    return false;
  }
}