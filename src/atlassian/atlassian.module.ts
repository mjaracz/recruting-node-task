import { Module } from '@nestjs/common';
import { ComponentsProvider } from './providers/components.provider';
import { ComponentsService } from './components.service';
import { IssuesProvider } from './providers/issues.provider';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [IssuesProvider, ComponentsProvider, ComponentsService],
  exports: [ComponentsProvider, IssuesProvider],
})
export class AtlassianModule {}
