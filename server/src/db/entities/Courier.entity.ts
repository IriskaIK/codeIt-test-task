import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity('couriers')
export class Courier {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @CreateDateColumn()
    created_at : Date;

    @UpdateDateColumn()
    updated_at : Date;
}