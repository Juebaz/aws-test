import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonsModule } from 'src/commons/common.module';
import { AppController } from './app.controller';
import { FileModule } from './file/file.module';
import { getDatabaseConnectionString } from './initDatabaseConnection';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(getDatabaseConnectionString()),
    UsersModule,
    PostsModule,
    FileModule,
    CommonsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
