import { ProjectCreateInput } from "../../../inputs/ProjectCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProjectArgs {
  @Field(() => ProjectCreateInput, {
    nullable: false
  })
  data!: ProjectCreateInput;
}
