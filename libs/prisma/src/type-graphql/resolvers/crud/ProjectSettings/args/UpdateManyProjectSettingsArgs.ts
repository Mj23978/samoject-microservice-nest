import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectSettingsUpdateManyMutationInput } from "../../../inputs/ProjectSettingsUpdateManyMutationInput";
import { ProjectSettingsWhereInput } from "../../../inputs/ProjectSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProjectSettingsArgs {
  @TypeGraphQL.Field(_type => ProjectSettingsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectSettingsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProjectSettingsWhereInput, {
    nullable: true
  })
  where?: ProjectSettingsWhereInput | undefined;
}
