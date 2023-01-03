import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspaceSettingsWhereInput } from "../../../inputs/WorkspaceSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyWorkspaceSettingsArgs {
  @TypeGraphQL.Field(_type => WorkspaceSettingsWhereInput, {
    nullable: true
  })
  where?: WorkspaceSettingsWhereInput | undefined;
}
