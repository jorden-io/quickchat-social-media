import { Test, TestingModule } from '@nestjs/testing';
import { ProfilePrefrencesService } from './profile_prefrences.service';

describe('ProfilePrefrencesService', () => {
  let service: ProfilePrefrencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfilePrefrencesService],
    }).compile();

    service = module.get<ProfilePrefrencesService>(ProfilePrefrencesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
