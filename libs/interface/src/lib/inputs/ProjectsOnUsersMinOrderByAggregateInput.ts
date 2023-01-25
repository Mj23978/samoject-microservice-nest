import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";

@InputType("ProjectsOnUsersMinOrderByAggregateInput", {
  isAbstract: true
})
export class ProjectsOnUsersMinOrderByAggregateInput {
  @Field(() => SortOrder, {
    nullable: true
  })
  projectId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  assignedAt?: "asc" | "desc" | undefined;

  @Field(() => SortOrder, {
    nullable: true
  })
  assignedBy?: "asc" | "desc" | undefined;
}
