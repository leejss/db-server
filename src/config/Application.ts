import { Database } from "./Database";

export class Application {
  private db: Database;
  constructor() {
    this.db = new Database();
    this.db.connectToMongodb();

    console.log("Application is now running");
  }
}
