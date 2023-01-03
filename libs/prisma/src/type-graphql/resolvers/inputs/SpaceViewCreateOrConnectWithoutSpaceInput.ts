import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceViewCreateWithoutSpaceInput } from "../inputs/SpaceViewCreateWithoutSpaceInput";
import { SpaceViewWhereUniqueInput } from "../inputs/SpaceViewWhereUniqueInput";

@TypeGraphQL.InputType("SpaceViewCreateOrConnectWithoutSpaceInput", {
  isAbstract: true
})
export class SpaceViewCreateOrConnectWithoutSpaceInput {
  @TypeGraphQL.Field(_type => SpaceViewWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceViewWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpaceViewCreateWithoutSpaceInput, {
    nullable: false
  })
  create!: SpaceViewCreateWithoutSpaceInput;
}
