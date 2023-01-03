import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCommentsInput } from "../inputs/UserCreateOrConnectWithoutCommentsInput";
import { UserCreateWithoutCommentsInput } from "../inputs/UserCreateWithoutCommentsInput";
import { UserUpdateWithoutCommentsInput } from "../inputs/UserUpdateWithoutCommentsInput";
import { UserUpsertWithoutCommentsInput } from "../inputs/UserUpsertWithoutCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutCommentsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutCommentsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCommentsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCommentsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCommentsInput | undefined;
}
