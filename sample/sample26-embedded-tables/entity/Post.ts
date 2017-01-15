import {PrimaryGeneratedColumn, Column, Entity} from "../../../src/index";
import {Counters} from "./Counters";
import {Embedded} from "../../../src/decorator/Embedded";

@Entity("sample26_post")
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;
    
    @Embedded(type => Counters)
    counters: Counters;

}