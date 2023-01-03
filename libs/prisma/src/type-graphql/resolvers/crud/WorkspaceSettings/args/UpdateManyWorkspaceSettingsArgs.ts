import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspaceSettingsUpdateManyMutationInput } from "../../../inputs/WorkspaceSettingsUpdateManyMutationInput";
import { WorkspaceSettingsWhereInput } from "../../../inputs/WorkspaceSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyWorkspaceSettingsArgs {
  @TypeGraphQL.Field(_type => WorkspaceSettingsUpdateManyMutationInput, {
    nullable: false
  })
  data!: WorkspaceSettingsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => WorkspaceSettingsWhereInput, {
    nullable: true
  })
  where?: WorkspaceSettingsWhereInput | undefined;
}
