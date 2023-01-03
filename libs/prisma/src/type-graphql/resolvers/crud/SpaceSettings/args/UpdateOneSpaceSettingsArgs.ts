import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceSettingsUpdateInput } from "../../../inputs/SpaceSettingsUpdateInput";
import { SpaceSettingsWhereUniqueInput } from "../../../inputs/SpaceSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSpaceSettingsArgs {
  @TypeGraphQL.Field(_type => SpaceSettingsUpdateInput, {
    nullable: false
  })
  data!: SpaceSettingsUpdateInput;

  @TypeGraphQL.Field(_type => SpaceSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceSettingsWhereUniqueInput;
}
