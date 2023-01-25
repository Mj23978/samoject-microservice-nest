import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";

@InputType("TaskCountOrderByAggregateInput", {
  isAbstract: true
})
export class TaskCountOrderByAggregateInput {
  @Field(() => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  projectId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  creatorId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  parentId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  details?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  chatId?: "asc" | "desc" | undefined;
}
