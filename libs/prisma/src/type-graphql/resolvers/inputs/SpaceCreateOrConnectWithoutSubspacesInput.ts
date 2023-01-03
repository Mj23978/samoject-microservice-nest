import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateWithoutSubspacesInput } from "../inputs/SpaceCreateWithoutSubspacesInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceCreateOrConnectWithoutSubspacesInput", {
  isAbstract: true
})
export class SpaceCreateOrConnectWithoutSubspacesInput {
  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpaceCreateWithoutSubspacesInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutSubspacesInput;
}
