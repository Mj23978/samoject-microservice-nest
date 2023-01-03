import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspaceSettingsWhereUniqueInput } from "../../../inputs/WorkspaceSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueWorkspaceSettingsArgs {
  @TypeGraphQL.Field(_type => WorkspaceSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspaceSettingsWhereUniqueInput;
}
