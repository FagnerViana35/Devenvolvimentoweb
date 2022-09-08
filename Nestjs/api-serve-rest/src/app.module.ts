import { UsuarioModule } from './usuario/models/usuario.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
