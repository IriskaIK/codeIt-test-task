import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from "typeorm";
import {Courier} from "@/db/entities/Courier.entity";
import {Destination} from "@/db/entities/Destination.entity";

@Entity('deliveries')
export class Delivery {
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne(()=> Courier)
    @JoinColumn({name:'courier_id'})
    courier: Courier;

    @ManyToOne(() => Destination)
    @JoinColumn({ name: 'destination_id' })
    destination: Destination;


    @Column({type: 'timestamp'})
    startTime: Date;

    @Column({type: 'timestamp'})
    endTime: Date;

    @CreateDateColumn()
    created_at : Date;

    @UpdateDateColumn()
    updated_at : Date;
}