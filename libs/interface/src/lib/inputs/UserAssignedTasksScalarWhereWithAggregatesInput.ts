import { Field, InputType } from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("UserAssignedTasksScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UserAssignedTasksScalarWhereWithAggregatesInput {
  @Field(() => [UserAssignedTasksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserAssignedTasksScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [UserAssignedTasksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserAssignedTasksScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => [UserAssignedTasksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserAssignedTasksScalarWhereWithAggregatesInput[] | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  taskId?: StringWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @Field(() => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  assignedAt?: DateTimeWithAggregatesFilter | undefined;

  @Field(() => StringWithAggregatesFilter, {
    nullable: true
  })
  assignedBy?: StringWithAggregatesFilter | undefined;
}
