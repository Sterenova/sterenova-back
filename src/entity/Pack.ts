import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Pack {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column()
    name: string;

    @Column('float')
    globalPrice: number;

    @Column()
    description: string;

    @Column()
    soundDescription: string;

    @Column()
    soundPrice: number;

    @Column()
    lightDescription: string;

    @Column()
    lightPrice: number;

    constructor(name: string, globalPrice: number, description: string, soundDescription: string, soundPrice: number, lightDescription: string, lightPrice: number) {
        this.name = name;
        this.globalPrice = globalPrice;
        this.description = description;
        this.soundDescription = soundDescription;
        this.soundPrice = soundPrice;
        this.lightDescription = lightDescription;
        this.lightPrice = lightPrice;
    }
}

export default Pack;
