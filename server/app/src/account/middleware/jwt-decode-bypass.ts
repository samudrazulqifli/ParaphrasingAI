import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { JwtService } from '@nestjs/jwt';
import { AccountDto } from 'src/account/dto/account.dto';
const jwtService = new JwtService({ secret: process.env.BEBENBAN_SECRET });

export async function decodeTokenBypass(
  token: string,
): Promise<{ validateStatus: boolean; user: AccountDto }> {
  try {
    const payload = jwtService.decode(token);
    const user = plainToClass(AccountDto, payload);
    await validateOrReject(user);
    return { validateStatus: true, user };
  } catch (errors) {
    console.log(errors);
    return { validateStatus: false, user: null };
  }
}
