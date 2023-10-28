import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length: 100,
        unique: true,
    })
    name!: string

    @Column({
        type: 'text',
        array: true,
    })
    tags!: string[]

}
