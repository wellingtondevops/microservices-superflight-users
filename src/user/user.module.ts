import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from './schema/user.schema';
import { USER } from 'src/common/model/model';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: USER.name,
        useFactory: () => UserSchema,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  
})
export class UserModule {}
