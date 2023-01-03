import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { WorkspaceRelationFilter } from "../inputs/WorkspaceRelationFilter";

@TypeGraphQL.InputType("WorkspaceSettingsWhereInput", {
  isAbstract: true
})
export class WorkspaceSettingsWhereInput {
  @TypeGraphQL.Field(_type => [WorkspaceSettingsWhereInput], {
    nullable: true
  })
  AND?: WorkspaceSettingsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceSettingsWhereInput], {
    nullable: true
  })
  OR?: WorkspaceSettingsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WorkspaceSettingsWhereInput], {
    nullable: true
  })
  NOT?: WorkspaceSettingsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  localId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  workspaceId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => WorkspaceRelationFilter, {
    nullable: true
  })
  workspace?: WorkspaceRelationFilter | undefined;
}
