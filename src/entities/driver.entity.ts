import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'driver' })
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  surname: string;

  @Column({ type: 'varchar', length: 50 })
  lastname: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;
}
