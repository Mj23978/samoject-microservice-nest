import { ProjectSettingsUpdateInput } from "../../../inputs/ProjectSettingsUpdateInput";
import { ProjectSettingsWhereUniqueInput } from "../../../inputs/ProjectSettingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProjectSettingsArgs {
  @Field(() => ProjectSettingsUpdateInput, {
    nullable: false
  })
  data!: ProjectSettingsUpdateInput;

  @Field(() => ProjectSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectSettingsWhereUniqueInput;
}
