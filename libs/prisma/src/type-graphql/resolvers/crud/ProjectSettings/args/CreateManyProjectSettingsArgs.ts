import { ProjectSettingsCreateManyInput } from "../../../inputs/ProjectSettingsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProjectSettingsArgs {
  @Field(() => [ProjectSettingsCreateManyInput], {
    nullable: false
  })
  data!: ProjectSettingsCreateManyInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
