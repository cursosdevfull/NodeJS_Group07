import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Car } from "./Car";

@Entity({ name: "user" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  age: number;

  // @OneToOne((type) => Car, (car) => car.user)
  // @OneToMany((type) => Car, (car) => car.user, { cascade: true })
  @ManyToMany((type) => Car, (car) => car.users, { cascade: true })
  cars: Car[];
}
