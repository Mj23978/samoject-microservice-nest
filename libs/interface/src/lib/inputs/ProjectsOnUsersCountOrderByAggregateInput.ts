import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";

@InputType("ProjectsOnUsersCountOrderByAggregateInput", {
  isAbstract: true
})
export class ProjectsOnUsersCountOrderByAggregateInput {
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
