import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateWithoutParentInput } from "../inputs/SpaceCreateWithoutParentInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceCreateOrConnectWithoutParentInput", {
  isAbstract: true
})
export class SpaceCreateOrConnectWithoutParentInput {
  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpaceCreateWithoutParentInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutParentInput;
}
