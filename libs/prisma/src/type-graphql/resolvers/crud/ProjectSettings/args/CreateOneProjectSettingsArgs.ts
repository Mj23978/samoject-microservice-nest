import { ProjectSettingsCreateInput } from "../../../inputs/ProjectSettingsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProjectSettingsArgs {
  @Field(() => ProjectSettingsCreateInput, {
    nullable: false
  })
  data!: ProjectSettingsCreateInput;
}
