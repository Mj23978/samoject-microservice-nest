import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  CreateUserInput,
  UpdateUserInput,
  UserEvent
} from '@samoject/interface';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_SERVICE') private userClient: ClientProxy,
    // @Inject('USER_SERVICE') private readonly userClient: ClientNats
  ) { }

  // async onModuleInit() {
  //   const subscribes: string[] = Object.keys(UserEvent).map(
  //     (event) => UserEvent[event]
  //   );
  //   subscribes.forEach((subscribe) =>
  //     this.userClient.createSubscriptionHandler(subscribe)
  //   );
  //   await this.userClient.connect();
  // }

  create(createUserInput: CreateUserInput) {
    return this.userClient.send<CreateUserInput>({ cmd: UserEvent.CREATE_USER }, {
      username: createUserInput.username,
      password: createUserInput.password,
      firstname: createUserInput.firstname,
      lastname: createUserInput.lastname,
      email: createUserInput.email,
      role: createUserInput.role,
      active: true,
    });
  }

  findAll() {
    return this.userClient.send({ cmd: UserEvent.FIND_ALL_USER }, {});
  }

  findOne(id: string): Observable<CreateUserInput> {
    return this.userClient.send({ cmd: UserEvent.FIND_ONE_USER }, { value: { id } });
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.userClient.send({ cmd: UserEvent.UPDATE_USER }, {
      id,
      ...updateUserInput,
    });
  }

  remove(id: string) {
    return this.userClient.send({ cmd: UserEvent.REMOVE_USER }, { value: { id } });
  }
}
