import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateProfilePrefrenceInput, UpdateProfilePrefrenceInput } from 'src/types/graphpl';
import { ProfilePrefrencesService} from './profile_prefrences.service';

@Resolver('ProfilePrefrence')
export class ProfilePrefrencesResolver {
  constructor(private readonly profilePrefrencesService: ProfilePrefrencesService) {}

  @Mutation('createProfilePrefrence')
  create(@Args('createProfilePrefrenceInput') createProfilePrefrenceInput: CreateProfilePrefrenceInput) {
    return this.profilePrefrencesService.create(createProfilePrefrenceInput);
  }

  @Query('profilePrefrences')
  findAll() {
    return this.profilePrefrencesService.findAll();
  }

  @Query('profilePrefrence')
  findOne(@Args('id') id: number) {
    return this.profilePrefrencesService.findOne(id);
  }

  @Mutation('updateProfilePrefrence')
  update(@Args('updateProfilePrefrenceInput') updateProfilePrefrenceInput: UpdateProfilePrefrenceInput) {
    return this.profilePrefrencesService.update(updateProfilePrefrenceInput.id, updateProfilePrefrenceInput);
  }

  @Mutation('removeProfilePrefrence')
  remove(@Args('id') id: number) {
    return this.profilePrefrencesService.remove(id);
  }
}
