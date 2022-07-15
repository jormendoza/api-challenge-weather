import { HttpModule, Module } from '@nestjs/common';
import { CurrentsService } from './currents.service';
import { CurrentsController } from './currents.controller';

@Module({
  imports: [HttpModule],
  providers: [CurrentsService],
  controllers: [CurrentsController]
})
export class CurrentsModule {}
