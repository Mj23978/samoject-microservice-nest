import { Field, InputType } from "@nestjs/graphql";
import { SortOrder } from "../enums/SortOrder";

@InputType("ProjectsOnUsersOrderByRelationAggregateInput", {
  isAbstract: true
})
export class ProjectsOnUsersOrderByRelationAggregateInput {
  @Field(() => SortOrder, {
    nullable: true
  })
  _count?: "asc" | "desc" | undefined;
}
