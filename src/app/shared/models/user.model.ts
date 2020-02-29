export class DatabaseUser {

  constructor(
    public id: string, 
    public email: string, 
    public firstname?: string, 
    public lastname?: string, 
    private isAdmin?: number) { }

    getIsAdmin(): boolean {
      if(this.isAdmin === 1) {
        return true;
      } else {
        return false;
      }
    }
}