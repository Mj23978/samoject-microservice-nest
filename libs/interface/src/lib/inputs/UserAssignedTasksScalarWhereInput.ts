import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@InputType("UserAssignedTasksScalarWhereInput", {
  isAbstract: true
})
export class UserAssignedTasksScalarWhereInput {
  @Field(() => [UserAssignedTasksScalarWhereInput], {
    nullable: true
  })
  AND?: UserAssignedTasksScalarWhereInput[] | undefined;

  @Field(() => [UserAssignedTasksScalarWhereInput], {
    nullable: true
  })
  OR?: UserAssignedTasksScalarWhereInput[] | undefined;

  @Field(() => [UserAssignedTasksScalarWhereInput], {
    nullable: true
  })
  NOT?: UserAssignedTasksScalarWhereInput[] | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  taskId?: StringFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @Field(() => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  assignedBy?: StringFilter | undefined;
}
