import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import { User } from '../graphql';
@Resolver('users')
export class UsersResolver {
  private readonly prismaClient = new PrismaClient();
  @Query('users')
  async getUsers() {
    const users = await this.prismaClient.users.findMany();
    return users;
  }
  @Query('user')
  async getUser(
    @Args('id') id: string | null,
    @Args('email') email: string | null,
  ) {
    console.log('◉ ▶ UsersResolver ▶ getUser ▶ id:', id);
    const user = await this.prismaClient.users.findFirst({
      where: {
        OR: [
          {
            id: id,
          },
          {
            email: email,
          },
        ],
      },
    });
    return user;
  }
  @Mutation(()=> User)
  async createUser(
    @Args('name') name: string,
    @Args('lastName') lastName: string,
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('address') address: string | null,
  ) {
    const pass = await hash(password, 10);
    const user = await this.prismaClient.users.create({
      data: {
        name: name,
        lastName: lastName,
        email: email,
        password: pass,
        address: address,
        createdAt: new Date().toISOString(),
      },
    });

    console.log('◉ ▶ UsersResolver ▶ createUser ▶ user:', user);
    return user;
  }
}
