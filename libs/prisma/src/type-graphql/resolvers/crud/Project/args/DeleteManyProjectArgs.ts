import { ProjectWhereInput } from "../../../inputs/ProjectWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProjectArgs {
  @Field(() => ProjectWhereInput, {
    nullable: true
  })
  where?: ProjectWhereInput | undefined;
}
