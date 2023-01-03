import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectSettingsCreateInput } from "../../../inputs/ProjectSettingsCreateInput";
import { ProjectSettingsUpdateInput } from "../../../inputs/ProjectSettingsUpdateInput";
import { ProjectSettingsWhereUniqueInput } from "../../../inputs/ProjectSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProjectSettingsArgs {
  @TypeGraphQL.Field(_type => ProjectSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectSettingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectSettingsCreateInput, {
    nullable: false
  })
  create!: ProjectSettingsCreateInput;

  @TypeGraphQL.Field(_type => ProjectSettingsUpdateInput, {
    nullable: false
  })
  update!: ProjectSettingsUpdateInput;
}
