import { TaskOrderByWithRelationInput } from "../../../inputs/TaskOrderByWithRelationInput";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";
import { TaskWhereUniqueInput } from "../../../inputs/TaskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTaskArgs {
  @Field(() => TaskWhereInput, {
    nullable: true
  })
  where?: TaskWhereInput | undefined;

  @Field(() => [TaskOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TaskOrderByWithRelationInput[] | undefined;

  @Field(() => TaskWhereUniqueInput, {
    nullable: true
  })
  cursor?: TaskWhereUniqueInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
