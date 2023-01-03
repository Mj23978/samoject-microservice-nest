import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkspaceSettingsOrderByWithRelationInput } from "../../../inputs/WorkspaceSettingsOrderByWithRelationInput";
import { WorkspaceSettingsWhereInput } from "../../../inputs/WorkspaceSettingsWhereInput";
import { WorkspaceSettingsWhereUniqueInput } from "../../../inputs/WorkspaceSettingsWhereUniqueInput";
import { WorkspaceSettingsScalarFieldEnum } from "../../../../enums/WorkspaceSettingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyWorkspaceSettingsArgs {
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

  @TypeGraphQL.Field(_type => [WorkspaceSettingsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "localId" | "workspaceId"> | undefined;
}
