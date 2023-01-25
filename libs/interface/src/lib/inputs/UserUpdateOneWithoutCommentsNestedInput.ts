import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOrConnectWithoutCommentsInput } from "../inputs/UserCreateOrConnectWithoutCommentsInput";
import { UserCreateWithoutCommentsInput } from "../inputs/UserCreateWithoutCommentsInput";
import { UserUpdateWithoutCommentsInput } from "../inputs/UserUpdateWithoutCommentsInput";
import { UserUpsertWithoutCommentsInput } from "../inputs/UserUpsertWithoutCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpdateOneWithoutCommentsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutCommentsNestedInput {
  @Field(() => UserCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCommentsInput | undefined;

  @Field(() => UserCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCommentsInput | undefined;

  @Field(() => UserUpsertWithoutCommentsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCommentsInput | undefined;

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

  @Field(() => UserUpdateWithoutCommentsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCommentsInput | undefined;
}
