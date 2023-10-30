import {Column, Index, PrimaryGeneratedColumn} from 'typeorm';

export abstract class CommonItem {

	// id
	@PrimaryGeneratedColumn()
	id!: number

	// name
	@Column({
		type: 'varchar',
		length: 100,
		unique: true,
	})
	@Index({
		unique: true,
	})
	name!: string

	// tags
	@Column({
		type: 'simple-array',
		nullable: true,
	})
	tags!: string[];

}