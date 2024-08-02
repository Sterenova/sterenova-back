import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    subject: string;

    @Column()
    message: string;

    constructor(name: string, email: string, subject: string, message: string) {
        this.id = 0;
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
}

export default Contact;