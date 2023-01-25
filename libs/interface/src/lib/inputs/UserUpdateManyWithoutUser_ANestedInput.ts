import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOrConnectWithoutUser_AInput } from "../inputs/UserCreateOrConnectWithoutUser_AInput";
import { UserCreateWithoutUser_AInput } from "../inputs/UserCreateWithoutUser_AInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutUser_AInput } from "../inputs/UserUpdateManyWithWhereWithoutUser_AInput";
import { UserUpdateWithWhereUniqueWithoutUser_AInput } from "../inputs/UserUpdateWithWhereUniqueWithoutUser_AInput";
import { UserUpsertWithWhereUniqueWithoutUser_AInput } from "../inputs/UserUpsertWithWhereUniqueWithoutUser_AInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpdateManyWithoutUser_ANestedInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutUser_ANestedInput {
  @Field(() => [UserCreateWithoutUser_AInput], {
    nullable: true
  })
  create?: UserCreateWithoutUser_AInput[] | undefined;

  @Field(() => [UserCreateOrConnectWithoutUser_AInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUser_AInput[] | undefined;

  @Field(() => [UserUpsertWithWhereUniqueWithoutUser_AInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutUser_AInput[] | undefined;

  @Field(() => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @Field(() => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @Field(() => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @Field(() => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @Field(() => [UserUpdateWithWhereUniqueWithoutUser_AInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutUser_AInput[] | undefined;

  @Field(() => [UserUpdateManyWithWhereWithoutUser_AInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutUser_AInput[] | undefined;

  @Field(() => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
