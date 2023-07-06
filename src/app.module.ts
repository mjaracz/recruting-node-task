import { Logger, Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AtlassianModule } from './atlassian/atlassian.module';
import { ComponentsService } from './atlassian/components.service';

@Module({
  imports: [AtlassianModule],
  providers: [AppService, ComponentsService, Logger],
})
export class AppModule {}
