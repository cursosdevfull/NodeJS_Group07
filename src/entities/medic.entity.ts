import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'medic' })
export class Medic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  surname: string;

  @Column({ type: 'varchar', length: 50 })
  lastname: string;

  @Column({ type: 'varchar', length: 10 })
  cmp: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Column({ type: 'varchar', length: 10 })
  dni: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;
}
