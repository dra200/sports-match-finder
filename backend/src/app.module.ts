import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"
import { MatchesModule } from "./matches/matches.module"
import { AuthModule } from "./auth/auth.module"
import { UsersModule } from "./users/users.module"
import { ChatModule } from "./chat/chat.module"

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true, // Be careful with this in production
    }),
    MatchesModule,
    AuthModule,
    UsersModule,
    ChatModule,
  ],
})
export class AppModule {}

