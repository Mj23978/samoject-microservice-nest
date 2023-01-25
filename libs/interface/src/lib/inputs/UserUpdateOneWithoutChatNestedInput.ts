import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOrConnectWithoutChatInput } from "../inputs/UserCreateOrConnectWithoutChatInput";
import { UserCreateWithoutChatInput } from "../inputs/UserCreateWithoutChatInput";
import { UserUpdateWithoutChatInput } from "../inputs/UserUpdateWithoutChatInput";
import { UserUpsertWithoutChatInput } from "../inputs/UserUpsertWithoutChatInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpdateOneWithoutChatNestedInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutChatNestedInput {
  @Field(() => UserCreateWithoutChatInput, {
    nullable: true
  })
  create?: UserCreateWithoutChatInput | undefined;

  @Field(() => UserCreateOrConnectWithoutChatInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutChatInput | undefined;

  @Field(() => UserUpsertWithoutChatInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutChatInput | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @Field(() => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @Field(() => UserUpdateWithoutChatInput, {
    nullable: true
  })
  update?: UserUpdateWithoutChatInput | undefined;
}
