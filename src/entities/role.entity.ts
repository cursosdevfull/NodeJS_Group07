import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./user.entity";

@Entity({ name: "role" })
export default class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 20 })
  name: string;

  @Column({ type: "boolean", default: true })
  active: boolean;

  @ManyToMany((type) => User, (user) => user.roles)
  @JoinTable()
  users: User[];
}
