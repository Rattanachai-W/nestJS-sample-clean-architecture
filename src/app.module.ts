import { Module } from '@nestjs/common';
import { UsecaseProxyModule } from './infrastructures/usecase-proxy/usecase-proxy.module';
import { ExceptionsModule } from './infrastructures/exceptions/exceptions.module';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { EnvironmentConfigModule } from './infrastructures/config/environment-config/environment-config.module';

@Module({
  imports: [
    UsecaseProxyModule.register(),
    ExceptionsModule,
    DeliveriesModule,
    EnvironmentConfigModule,
  ],
  controllers: [],
})
export class AppModule {}
