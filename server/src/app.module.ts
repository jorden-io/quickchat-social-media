import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { GroupsModule } from './groups/groups.module';
import { MembersModule } from './members/members.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { MessagesModule } from './messages/messages.module';
import { ProfilePrefrencesModule } from './profile_prefrences/profile_prefrences.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      playground: false,
      driver: ApolloDriver,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/types/graphpl.ts'),
        outputAs: 'class',
      },
      context: ({ res, req }) => ({res, headers: req.headers }),
    }),
    PrismaModule,
    UserModule,
    TasksModule,
    AuthModule,
    GroupsModule,
    MembersModule,
    PostsModule,
    CommentsModule,
    MessagesModule,
    ProfilePrefrencesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
