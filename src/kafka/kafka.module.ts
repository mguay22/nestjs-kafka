import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ConsumerService } from './consumer.service';
import { ProducerService } from './producer.service';

@Module({
  imports: [DatabaseModule],
  providers: [ProducerService, ConsumerService],
  exports: [ProducerService, ConsumerService],
})
export class KafkaModule {}
