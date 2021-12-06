import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import Role from './role.entity';

@Entity({ name: 'user' })
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 200 })
  password: string;

  @Column({ type: 'varchar', length: 100 })
  refreshToken: string;

  @Column({ type: 'boolean', default: true, nullable: false })
  active: boolean;

  @ManyToMany((type) => Role, (role) => role.users)
  roles: Role[];
}
