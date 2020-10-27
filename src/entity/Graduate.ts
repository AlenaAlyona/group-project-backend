import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Graduate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
