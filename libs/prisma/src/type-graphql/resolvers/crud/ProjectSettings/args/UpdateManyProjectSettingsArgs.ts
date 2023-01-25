import { ProjectSettingsUpdateManyMutationInput } from "../../../inputs/ProjectSettingsUpdateManyMutationInput";
import { ProjectSettingsWhereInput } from "../../../inputs/ProjectSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProjectSettingsArgs {
  @Field(() => ProjectSettingsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectSettingsUpdateManyMutationInput;

  @Field(() => ProjectSettingsWhereInput, {
    nullable: true
  })
  where?: ProjectSettingsWhereInput | undefined;
}
