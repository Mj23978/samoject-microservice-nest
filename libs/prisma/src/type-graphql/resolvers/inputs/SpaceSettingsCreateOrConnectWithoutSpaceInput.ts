import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceSettingsCreateWithoutSpaceInput } from "../inputs/SpaceSettingsCreateWithoutSpaceInput";
import { SpaceSettingsWhereUniqueInput } from "../inputs/SpaceSettingsWhereUniqueInput";

@TypeGraphQL.InputType("SpaceSettingsCreateOrConnectWithoutSpaceInput", {
  isAbstract: true
})
export class SpaceSettingsCreateOrConnectWithoutSpaceInput {
  @TypeGraphQL.Field(_type => SpaceSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceSettingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpaceSettingsCreateWithoutSpaceInput, {
    nullable: false
  })
  create!: SpaceSettingsCreateWithoutSpaceInput;
}
