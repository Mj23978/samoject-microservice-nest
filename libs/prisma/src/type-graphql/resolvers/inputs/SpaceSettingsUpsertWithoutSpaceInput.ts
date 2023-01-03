import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceSettingsCreateWithoutSpaceInput } from "../inputs/SpaceSettingsCreateWithoutSpaceInput";
import { SpaceSettingsUpdateWithoutSpaceInput } from "../inputs/SpaceSettingsUpdateWithoutSpaceInput";

@TypeGraphQL.InputType("SpaceSettingsUpsertWithoutSpaceInput", {
  isAbstract: true
})
export class SpaceSettingsUpsertWithoutSpaceInput {
  @TypeGraphQL.Field(_type => SpaceSettingsUpdateWithoutSpaceInput, {
    nullable: false
  })
  update!: SpaceSettingsUpdateWithoutSpaceInput;

  @TypeGraphQL.Field(_type => SpaceSettingsCreateWithoutSpaceInput, {
    nullable: false
  })
  create!: SpaceSettingsCreateWithoutSpaceInput;
}
