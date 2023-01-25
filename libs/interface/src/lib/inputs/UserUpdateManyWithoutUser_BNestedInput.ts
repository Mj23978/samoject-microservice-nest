import { Field, InputType } from "@nestjs/graphql";
import { UserCreateOrConnectWithoutUser_BInput } from "../inputs/UserCreateOrConnectWithoutUser_BInput";
import { UserCreateWithoutUser_BInput } from "../inputs/UserCreateWithoutUser_BInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutUser_BInput } from "../inputs/UserUpdateManyWithWhereWithoutUser_BInput";
import { UserUpdateWithWhereUniqueWithoutUser_BInput } from "../inputs/UserUpdateWithWhereUniqueWithoutUser_BInput";
import { UserUpsertWithWhereUniqueWithoutUser_BInput } from "../inputs/UserUpsertWithWhereUniqueWithoutUser_BInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpdateManyWithoutUser_BNestedInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutUser_BNestedInput {
  @Field(() => [UserCreateWithoutUser_BInput], {
    nullable: true
  })
  create?: UserCreateWithoutUser_BInput[] | undefined;

  @Field(() => [UserCreateOrConnectWithoutUser_BInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUser_BInput[] | undefined;

  @Field(() => [UserUpsertWithWhereUniqueWithoutUser_BInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutUser_BInput[] | undefined;

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

  @Field(() => [UserUpdateWithWhereUniqueWithoutUser_BInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutUser_BInput[] | undefined;

  @Field(() => [UserUpdateManyWithWhereWithoutUser_BInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutUser_BInput[] | undefined;

  @Field(() => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
