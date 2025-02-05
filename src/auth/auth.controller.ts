import { Body, Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('auth.register.user')
  registerUser(
    @Payload() registerUserDto: RegisterUserDto,
  ) {
    return this.authService.registerUser(registerUserDto);
  }

  @MessagePattern('auth.login.user')
  loginUser(
    @Payload() loginUserDto: LoginUserDto,
  ) {
    return this.authService.login(loginUserDto);
  }

  @MessagePattern('auth.verify.user')
  verifyUser(
    @Payload() token: string,
  ) {
    // console.log({token})
    return this.authService.verifyToken(token);
  }
}
