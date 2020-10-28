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

  @Column()
  language: string;

  @Column()
  education: string;

  @Column()
  interviews: string;

  @Column()
  monthsToJob: number;

  @Column()
  jobType: string;

  @Column()
  industry: string;

  @Column()
  companyLang: string;

  @Column()
  companySize: string;

  @Column()
  techStack: string;

  @Column()
  answer1: string;

  @Column()
  answer2: string;

  @Column()
  answer3: string;

  @Column()
  answer4: string;

  @Column()
  answer5: string;

  @Column()
  answer6: string;

  @Column()
  answer7: string;
}
