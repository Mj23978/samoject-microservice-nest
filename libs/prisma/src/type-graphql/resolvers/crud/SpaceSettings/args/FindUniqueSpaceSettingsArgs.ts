import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceSettingsWhereUniqueInput } from "../../../inputs/SpaceSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSpaceSettingsArgs {
  @TypeGraphQL.Field(_type => SpaceSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceSettingsWhereUniqueInput;
}
