import { Field, InputType } from "@nestjs/graphql";
import { TaskWhereInput } from "../inputs/TaskWhereInput";

@InputType("TaskListRelationFilter", {
  isAbstract: true
})
export class TaskListRelationFilter {
  @Field(() => TaskWhereInput, {
    nullable: true
  })
  every?: TaskWhereInput | undefined;

  @Field(() => TaskWhereInput, {
    nullable: true
  })
  some?: TaskWhereInput | undefined;

  @Field(() => TaskWhereInput, {
    nullable: true
  })
  none?: TaskWhereInput | undefined;
}
