import { IsNotEmpty, MaxLength } from "class-validator";
import { Categoria } from "src/categorias/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity(`tb_produtos`)
export class Produto {
    

        
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    nome: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    descricao: string
    
    @IsNotEmpty()
    @Column({nullable: false})
    quantidade: number


    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length:255}) 
    laboratorio:string

    @IsNotEmpty()
    @Column({nullable: false})
    preco: number

    
    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length:255}) 
    foto:string
    
    @ManyToOne(() => Categoria, (Categoria ) => Categoria.produto, {
        onDelete: "CASCADE"})//Declara que se uma categoria é excluida todas as tarefas pertencentes tambem são
categoria: Categoria
}