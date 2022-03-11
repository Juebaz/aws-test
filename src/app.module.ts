import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { getDatabaseConnectionString } from './initDatabaseConnection';
import { PostsModule } from './posts/posts.module';
import { CommonsModule } from 'src/commons/common.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(getDatabaseConnectionString()),
    UsersModule,
    PostsModule,
    FileModule,
    CommonsModule,
  ],
})
export class AppModule {}
