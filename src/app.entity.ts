import {BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CRED extends BaseEntity {
    @PrimaryGeneratedColumn() // to get default id for each data
    id : string;    // default id in database

    @Column()
    Userid : string;  

    @Column()
    USERNAME: string;
   
    @Column()
    PASSWORD: string;
}