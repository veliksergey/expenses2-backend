import {Column, Entity, Index, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {CommonItem} from './shared/common-item.entity';
import {T} from './t.entity';

@Entity()
export class TCategory extends CommonItem {

	@OneToMany((type) => T, (t: T) => t.category)
	tList!: T[];

}