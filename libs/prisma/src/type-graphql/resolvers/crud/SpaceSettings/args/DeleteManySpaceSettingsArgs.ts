import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SpaceSettingsWhereInput } from "../../../inputs/SpaceSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySpaceSettingsArgs {
  @TypeGraphQL.Field(_type => SpaceSettingsWhereInput, {
    nullable: true
  })
  where?: SpaceSettingsWhereInput | undefined;
}
