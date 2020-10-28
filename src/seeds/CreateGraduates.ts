import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Graduate } from "../entity/Graduate";

export default class CreateGraduates implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Graduate)
      .values([
        {
          fullName: "Stephanie Bergman",
          email: "steph@gmail.com",
          password: "123",
        },
      ])
      .execute();
  }
}
