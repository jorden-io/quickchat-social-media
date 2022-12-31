import { Module } from '@nestjs/common';
import { ProfilePrefrencesService } from './profile_prefrences.service';
import { ProfilePrefrencesResolver } from './profile_prefrences.resolver';

@Module({
  providers: [ProfilePrefrencesResolver, ProfilePrefrencesService]
})
export class ProfilePrefrencesModule {}
