import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateWithoutProjectInput } from "../inputs/SpaceCreateWithoutProjectInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceCreateOrConnectWithoutProjectInput", {
  isAbstract: true
})
export class SpaceCreateOrConnectWithoutProjectInput {
  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpaceCreateWithoutProjectInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutProjectInput;
}
