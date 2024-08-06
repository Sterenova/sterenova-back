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
}

export default Photo;
