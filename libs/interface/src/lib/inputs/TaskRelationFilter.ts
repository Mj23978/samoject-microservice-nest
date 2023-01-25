import { Field, InputType } from "@nestjs/graphql";
import { TaskWhereInput } from "../inputs/TaskWhereInput";

@InputType("TaskRelationFilter", {
  isAbstract: true
})
export class TaskRelationFilter {
  @Field(() => TaskWhereInput, {
    nullable: true
  })
  is?: TaskWhereInput | undefined;

  @Field(() => TaskWhereInput, {
    nullable: true
  })
  isNot?: TaskWhereInput | undefined;
}
