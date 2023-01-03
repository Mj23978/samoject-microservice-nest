import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUser_BInput } from "../inputs/UserCreateOrConnectWithoutUser_BInput";
import { UserCreateWithoutUser_BInput } from "../inputs/UserCreateWithoutUser_BInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutUser_BInput } from "../inputs/UserUpdateManyWithWhereWithoutUser_BInput";
import { UserUpdateWithWhereUniqueWithoutUser_BInput } from "../inputs/UserUpdateWithWhereUniqueWithoutUser_BInput";
import { UserUpsertWithWhereUniqueWithoutUser_BInput } from "../inputs/UserUpsertWithWhereUniqueWithoutUser_BInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutUser_BNestedInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutUser_BNestedInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutUser_BInput], {
    nullable: true
  })
  create?: UserCreateWithoutUser_BInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutUser_BInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUser_BInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutUser_BInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutUser_BInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutUser_BInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutUser_BInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutUser_BInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutUser_BInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
