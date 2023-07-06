import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ComponentsService } from './atlassian/components.service';
import { writeFileSync } from 'fs';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    private readonly componentsService: ComponentsService,
    private readonly logger: Logger,
  ) {}
  onModuleInit() {
    this.componentsService.getMergingComponentWithIssues().then((data) => {
      writeFileSync(`./output.txt`, JSON.stringify(data, null, 2));
      data.forEach((component) => this.logger.verbose(component));
    });
  }
}
