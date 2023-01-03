import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUser_AInput } from "../inputs/UserCreateOrConnectWithoutUser_AInput";
import { UserCreateWithoutUser_AInput } from "../inputs/UserCreateWithoutUser_AInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutUser_AInput } from "../inputs/UserUpdateManyWithWhereWithoutUser_AInput";
import { UserUpdateWithWhereUniqueWithoutUser_AInput } from "../inputs/UserUpdateWithWhereUniqueWithoutUser_AInput";
import { UserUpsertWithWhereUniqueWithoutUser_AInput } from "../inputs/UserUpsertWithWhereUniqueWithoutUser_AInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutUser_ANestedInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutUser_ANestedInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutUser_AInput], {
    nullable: true
  })
  create?: UserCreateWithoutUser_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutUser_AInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUser_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutUser_AInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutUser_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutUser_AInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutUser_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutUser_AInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutUser_AInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
