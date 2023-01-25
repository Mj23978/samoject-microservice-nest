import { ProjectUpdateInput } from "../../../inputs/ProjectUpdateInput";
import { ProjectWhereUniqueInput } from "../../../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProjectArgs {
  @Field(() => ProjectUpdateInput, {
    nullable: false
  })
  data!: ProjectUpdateInput;

  @Field(() => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;
}
