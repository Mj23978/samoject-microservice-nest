import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceSettingsCreateOrConnectWithoutSpaceInput } from "../inputs/SpaceSettingsCreateOrConnectWithoutSpaceInput";
import { SpaceSettingsCreateWithoutSpaceInput } from "../inputs/SpaceSettingsCreateWithoutSpaceInput";
import { SpaceSettingsUpdateWithoutSpaceInput } from "../inputs/SpaceSettingsUpdateWithoutSpaceInput";
import { SpaceSettingsUpsertWithoutSpaceInput } from "../inputs/SpaceSettingsUpsertWithoutSpaceInput";
import { SpaceSettingsWhereUniqueInput } from "../inputs/SpaceSettingsWhereUniqueInput";

@TypeGraphQL.InputType("SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput", {
  isAbstract: true
})
export class SpaceSettingsUpdateOneRequiredWithoutSpaceNestedInput {
  @TypeGraphQL.Field(_type => SpaceSettingsCreateWithoutSpaceInput, {
    nullable: true
  })
  create?: SpaceSettingsCreateWithoutSpaceInput | undefined;

  @TypeGraphQL.Field(_type => SpaceSettingsCreateOrConnectWithoutSpaceInput, {
    nullable: true
  })
  connectOrCreate?: SpaceSettingsCreateOrConnectWithoutSpaceInput | undefined;

  @TypeGraphQL.Field(_type => SpaceSettingsUpsertWithoutSpaceInput, {
    nullable: true
  })
  upsert?: SpaceSettingsUpsertWithoutSpaceInput | undefined;

  @TypeGraphQL.Field(_type => SpaceSettingsWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceSettingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SpaceSettingsUpdateWithoutSpaceInput, {
    nullable: true
  })
  update?: SpaceSettingsUpdateWithoutSpaceInput | undefined;
}
