import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCreatedTasksInput } from "../inputs/UserCreateWithoutCreatedTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutCreatedTasksInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutCreatedTasksInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCreatedTasksInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatedTasksInput;
}
