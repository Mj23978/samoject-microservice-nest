import { TaskWhereInput } from "../../../inputs/TaskWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTaskArgs {
  @Field(() => TaskWhereInput, {
    nullable: true
  })
  where?: TaskWhereInput | undefined;
}
