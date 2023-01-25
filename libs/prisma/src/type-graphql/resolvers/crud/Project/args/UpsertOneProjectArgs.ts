import { ProjectCreateInput } from "../../../inputs/ProjectCreateInput";
import { ProjectUpdateInput } from "../../../inputs/ProjectUpdateInput";
import { ProjectWhereUniqueInput } from "../../../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProjectArgs {
  @Field(() => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @Field(() => ProjectCreateInput, {
    nullable: false
  })
  create!: ProjectCreateInput;

  @Field(() => ProjectUpdateInput, {
    nullable: false
  })
  update!: ProjectUpdateInput;
}
