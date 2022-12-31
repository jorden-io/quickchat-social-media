import { Test, TestingModule } from '@nestjs/testing';
import { ProfilePrefrencesResolver } from './profile_prefrences.resolver';
import { ProfilePrefrencesService } from './profile_prefrences.service';

describe('ProfilePrefrencesResolver', () => {
  let resolver: ProfilePrefrencesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfilePrefrencesResolver, ProfilePrefrencesService],
    }).compile();

    resolver = module.get<ProfilePrefrencesResolver>(ProfilePrefrencesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
