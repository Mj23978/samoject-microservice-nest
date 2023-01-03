import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspaceSettingsOrderByWithRelationInput } from "../../../inputs/WorkspaceSettingsOrderByWithRelationInput";
import { WorkspaceSettingsWhereInput } from "../../../inputs/WorkspaceSettingsWhereInput";
import { WorkspaceSettingsWhereUniqueInput } from "../../../inputs/WorkspaceSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateWorkspaceSettingsArgs {
  @TypeGraphQL.Field(_type => WorkspaceSettingsWhereInput, {
    nullable: true
  })
  where?: WorkspaceSettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceSettingsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: WorkspaceSettingsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkspaceSettingsWhereUniqueInput, {
    nullable: true
  })
  cursor?: WorkspaceSettingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
