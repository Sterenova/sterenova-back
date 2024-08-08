import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Equipment from "./Equipment";

@Entity()
class Photo {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column({ type: 'text' })
    url: string | undefined;

    @ManyToOne(() => Equipment, (equipment) => equipment.photos)
    equipment: Equipment | undefined;

    constructor(url: string, equipment: Equipment) {
        this.url = url;
        this.equipment = equipment;
    }
}

export default Photo;
