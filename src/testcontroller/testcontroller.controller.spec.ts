import { Test, TestingModule } from '@nestjs/testing';
import { TestcontrollerController } from './testcontroller.controller';

describe('Testcontroller Controller', () => {
  let controller: TestcontrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestcontrollerController],
    }).compile();

    controller = module.get<TestcontrollerController>(TestcontrollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
