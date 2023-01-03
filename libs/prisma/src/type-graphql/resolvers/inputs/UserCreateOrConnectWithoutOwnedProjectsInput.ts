import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutOwnedProjectsInput } from "../inputs/UserCreateWithoutOwnedProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutOwnedProjectsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutOwnedProjectsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutOwnedProjectsInput, {
    nullable: false
  })
  create!: UserCreateWithoutOwnedProjectsInput;
}
