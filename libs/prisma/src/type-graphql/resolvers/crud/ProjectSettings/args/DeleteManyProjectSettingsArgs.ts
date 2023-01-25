import { ProjectSettingsWhereInput } from "../../../inputs/ProjectSettingsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProjectSettingsArgs {
  @Field(() => ProjectSettingsWhereInput, {
    nullable: true
  })
  where?: ProjectSettingsWhereInput | undefined;
}
