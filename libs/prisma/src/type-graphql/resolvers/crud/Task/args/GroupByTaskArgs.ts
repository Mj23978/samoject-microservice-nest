import { TaskScalarFieldEnum } from "../../../../enums/TaskScalarFieldEnum";
import { TaskOrderByWithAggregationInput } from "../../../inputs/TaskOrderByWithAggregationInput";
import { TaskScalarWhereWithAggregatesInput } from "../../../inputs/TaskScalarWhereWithAggregatesInput";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByTaskArgs {
  @Field(() => TaskWhereInput, {
    nullable: true
  })
  where?: TaskWhereInput | undefined;

  @Field(() => [TaskOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TaskOrderByWithAggregationInput[] | undefined;

  @Field(() => [TaskScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "projectId" | "creatorId" | "parentId" | "status" | "details" | "chatId">;

  @Field(() => TaskScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TaskScalarWhereWithAggregatesInput | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(() => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
