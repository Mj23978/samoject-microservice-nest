import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectSettingsUpdateInput } from "../../../inputs/ProjectSettingsUpdateInput";
import { ProjectSettingsWhereUniqueInput } from "../../../inputs/ProjectSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProjectSettingsArgs {
  @TypeGraphQL.Field(_type => ProjectSettingsUpdateInput, {
    nullable: false
  })
  data!: ProjectSettingsUpdateInput;

  @TypeGraphQL.Field(_type => ProjectSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectSettingsWhereUniqueInput;
}
