import { ProjectUpdateManyMutationInput } from "../../../inputs/ProjectUpdateManyMutationInput";
import { ProjectWhereInput } from "../../../inputs/ProjectWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProjectArgs {
  @Field(() => ProjectUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectUpdateManyMutationInput;

  @Field(() => ProjectWhereInput, {
    nullable: true
  })
  where?: ProjectWhereInput | undefined;
}
