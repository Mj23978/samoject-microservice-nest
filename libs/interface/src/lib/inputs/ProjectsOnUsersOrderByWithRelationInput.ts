import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";
import { ProjectOrderByWithRelationInput } from "../inputs/ProjectOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";

@InputType("ProjectsOnUsersOrderByWithRelationInput", {
  isAbstract: true
})
export class ProjectsOnUsersOrderByWithRelationInput {
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

  @Field(() => ProjectOrderByWithRelationInput, {
    nullable: true
  })
  project?: ProjectOrderByWithRelationInput | undefined;

  @Field(() => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;
}
