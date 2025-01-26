import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity('destinations')
export class Destination {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    address : string;

    @CreateDateColumn()
    created_at : Date;

    @UpdateDateColumn()
    updated_at : Date;
}