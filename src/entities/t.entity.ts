import {Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {TCategory} from './t-category.entity';
import {JoinColumn} from 'typeorm/browser';

@Entity()
export class T {

	// id
	@PrimaryGeneratedColumn()
	id!: number

	// name
	@Column({
		type: 'varchar',
		length: 100,
		nullable: true,
	})
	name!: string;

	// amount
	@Column({
		type: 'decimal',
		precision: 10,
		scale: 2,
		nullable: false,
	})
	amount!: number;

	// category
	@Column({
		nullable: true,
	})
	@Index()
	categoryId!: number;
	@ManyToOne((type) => TCategory, (category: TCategory) => category.tList, {
		nullable: true,
		onDelete: 'RESTRICT',
		onUpdate: 'CASCADE',
	})
	@JoinColumn()
	category!: TCategory;

	// createdAt
	@CreateDateColumn({
		select: false,
	})
	createdAt!: Date;

	// updatedAt
	@UpdateDateColumn({
		select: false,
	})
	updatedAt!: Date;

}