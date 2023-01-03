import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceViewCreateWithoutSpaceInput } from "../inputs/SpaceViewCreateWithoutSpaceInput";
import { SpaceViewUpdateWithoutSpaceInput } from "../inputs/SpaceViewUpdateWithoutSpaceInput";

@TypeGraphQL.InputType("SpaceViewUpsertWithoutSpaceInput", {
  isAbstract: true
})
export class SpaceViewUpsertWithoutSpaceInput {
  @TypeGraphQL.Field(_type => SpaceViewUpdateWithoutSpaceInput, {
    nullable: false
  })
  update!: SpaceViewUpdateWithoutSpaceInput;

  @TypeGraphQL.Field(_type => SpaceViewCreateWithoutSpaceInput, {
    nullable: false
  })
  create!: SpaceViewCreateWithoutSpaceInput;
}
