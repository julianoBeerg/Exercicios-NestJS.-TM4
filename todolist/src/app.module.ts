import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarefa } from './tarefa/entities/tarefa.entity';
import { TarefaModule } from './tarefa/modules/tarefa.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({//Vai ter o que é necessario pra se conectar com o DB
      type: 'mysql',//Definindo objeto do tipo mysql
      host: 'localhost', //Definindo que o host é o localhost
      port: 3306, //Definindo a posta do local host (Porta padrão)
      username: 'root', //Definindo o username do mysql
      password: 'Juliano', //Senha padrão DB
      database: 'db_todo', //Nome da tabela que criamos
      entities: [Tarefa], //Criando o TB tarefa
      synchronize: true //Sincroniza todos os dados e alterações no DB
      //Com essas informações é possivel se conectar com o BD
    }),
    TarefaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
