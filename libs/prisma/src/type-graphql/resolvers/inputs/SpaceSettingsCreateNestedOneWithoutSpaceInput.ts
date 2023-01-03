import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceSettingsCreateOrConnectWithoutSpaceInput } from "../inputs/SpaceSettingsCreateOrConnectWithoutSpaceInput";
import { SpaceSettingsCreateWithoutSpaceInput } from "../inputs/SpaceSettingsCreateWithoutSpaceInput";
import { SpaceSettingsWhereUniqueInput } from "../inputs/SpaceSettingsWhereUniqueInput";

@TypeGraphQL.InputType("SpaceSettingsCreateNestedOneWithoutSpaceInput", {
  isAbstract: true
})
export class SpaceSettingsCreateNestedOneWithoutSpaceInput {
  @TypeGraphQL.Field(_type => SpaceSettingsCreateWithoutSpaceInput, {
    nullable: true
  })
  create?: SpaceSettingsCreateWithoutSpaceInput | undefined;

  @TypeGraphQL.Field(_type => SpaceSettingsCreateOrConnectWithoutSpaceInput, {
    nullable: true
  })
  connectOrCreate?: SpaceSettingsCreateOrConnectWithoutSpaceInput | undefined;

  @TypeGraphQL.Field(_type => SpaceSettingsWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceSettingsWhereUniqueInput | undefined;
}
