import { ProjectSettingsCreateInput } from "../../../inputs/ProjectSettingsCreateInput";
import { ProjectSettingsUpdateInput } from "../../../inputs/ProjectSettingsUpdateInput";
import { ProjectSettingsWhereUniqueInput } from "../../../inputs/ProjectSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProjectSettingsArgs {
  @Field(() => ProjectSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectSettingsWhereUniqueInput;

  @Field(() => ProjectSettingsCreateInput, {
    nullable: false
  })
  create!: ProjectSettingsCreateInput;

  @Field(() => ProjectSettingsUpdateInput, {
    nullable: false
  })
  update!: ProjectSettingsUpdateInput;
}
