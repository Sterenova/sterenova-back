import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Contact {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    subject!: string;

    @Column()
    message!: string;
}

export default Contact;