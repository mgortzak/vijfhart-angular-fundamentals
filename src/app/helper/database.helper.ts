export class Database {
  static generateId() {
    return Math.floor((Math.random() * 100000) + 1);
  }
}
