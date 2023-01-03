import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyMutationInput } from "../inputs/UserUpdateManyMutationInput";

@TypeGraphQL.InputType("UserUpdateManyWithWhereWithoutUser_BInput", {
  isAbstract: true
})
export class UserUpdateManyWithWhereWithoutUser_BInput {
  @TypeGraphQL.Field(_type => UserScalarWhereInput, {
    nullable: false
  })
  where!: UserScalarWhereInput;

  @TypeGraphQL.Field(_type => UserUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserUpdateManyMutationInput;
}
