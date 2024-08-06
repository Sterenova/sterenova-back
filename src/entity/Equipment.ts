import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Photo from "./Photo";

@Entity()
class Equipment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @OneToMany(() => Photo, (photo) => photo.equipment)
    photos: Photo[] | undefined;

    constructor(name: string, type: string, description: string, price: number) {
        this.id = 0;
        this.name = name;
        this.type = type;
        this.description = description;
        this.price = price;
    }
}

export default Equipment;