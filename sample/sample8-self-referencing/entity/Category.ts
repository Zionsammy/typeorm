import {PrimaryGeneratedColumn, Column, Entity, ManyToMany} from "../../../src/index";
import {ManyToOne} from "../../../src/decorator/relations/ManyToOne";
import {OneToMany} from "../../../src/decorator/relations/OneToMany";
import {OneToOne} from "../../../src/decorator/relations/OneToOne";
import {JoinColumn} from "../../../src/decorator/relations/JoinColumn";
import {JoinTable} from "../../../src/decorator/relations/JoinTable";

@Entity("sample8_category")
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(type => Category, category => category.oneInverseCategory, {
        cascadeInsert: true,
        cascadeUpdate: true,
        cascadeRemove: true
    })
    @JoinColumn()
    oneCategory: Category;

    @OneToOne(type => Category, category => category.oneCategory, {
        cascadeInsert: true,
        cascadeUpdate: true,
        cascadeRemove: true
    })
    oneInverseCategory: Category;

   @ManyToOne(type => Category, category => category.oneManyCategories, {
        cascadeInsert: true,
        cascadeUpdate: true,
        cascadeRemove: true
    })
    oneManyCategory: Category;

    @OneToMany(type => Category, category => category.oneManyCategory, {
        cascadeInsert: true,
        cascadeUpdate: true
    })
    oneManyCategories: Category[] = [];

    @ManyToMany(type => Category, category => category.manyInverseCategories, {
        cascadeInsert: true,
        cascadeUpdate: true
    })
    @JoinTable()
    manyCategories: Category[] = [];

    @ManyToMany(type => Category, category => category.manyCategories, {
        cascadeInsert: true,
        cascadeUpdate: true
    })
    manyInverseCategories: Category[] = [];

}