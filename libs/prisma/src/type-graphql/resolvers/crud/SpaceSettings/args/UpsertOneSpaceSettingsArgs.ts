import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceSettingsCreateInput } from "../../../inputs/SpaceSettingsCreateInput";
import { SpaceSettingsUpdateInput } from "../../../inputs/SpaceSettingsUpdateInput";
import { SpaceSettingsWhereUniqueInput } from "../../../inputs/SpaceSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSpaceSettingsArgs {
  @TypeGraphQL.Field(_type => SpaceSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceSettingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpaceSettingsCreateInput, {
    nullable: false
  })
  create!: SpaceSettingsCreateInput;

  @TypeGraphQL.Field(_type => SpaceSettingsUpdateInput, {
    nullable: false
  })
  update!: SpaceSettingsUpdateInput;
}
