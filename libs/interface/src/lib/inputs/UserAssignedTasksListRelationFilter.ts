import { Field, InputType } from "@nestjs/graphql";
import { UserAssignedTasksWhereInput } from "../inputs/UserAssignedTasksWhereInput";

@InputType("UserAssignedTasksListRelationFilter", {
  isAbstract: true
})
export class UserAssignedTasksListRelationFilter {
  @Field(() => UserAssignedTasksWhereInput, {
    nullable: true
  })
  every?: UserAssignedTasksWhereInput | undefined;

  @Field(() => UserAssignedTasksWhereInput, {
    nullable: true
  })
  some?: UserAssignedTasksWhereInput | undefined;

  @Field(() => UserAssignedTasksWhereInput, {
    nullable: true
  })
  none?: UserAssignedTasksWhereInput | undefined;
}
