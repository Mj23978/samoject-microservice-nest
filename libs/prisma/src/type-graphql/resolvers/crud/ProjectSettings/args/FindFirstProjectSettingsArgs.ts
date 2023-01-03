import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectSettingsOrderByWithRelationInput } from "../../../inputs/ProjectSettingsOrderByWithRelationInput";
import { ProjectSettingsWhereInput } from "../../../inputs/ProjectSettingsWhereInput";
import { ProjectSettingsWhereUniqueInput } from "../../../inputs/ProjectSettingsWhereUniqueInput";
import { ProjectSettingsScalarFieldEnum } from "../../../../enums/ProjectSettingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProjectSettingsArgs {
  @TypeGraphQL.Field(_type => ProjectSettingsWhereInput, {
    nullable: true
  })
  where?: ProjectSettingsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectSettingsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProjectSettingsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectSettingsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProjectSettingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProjectSettingsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "localId" | "projectId"> | undefined;
}
