import { Field, ObjectType } from "@nestjs/graphql";
import { Task } from "./task.model";
import { User } from "./user.model";

@ObjectType("UserAssignedTasks", {
  isAbstract: true
})
export class UserAssignedTasks {
  @Field(() => String, {
    nullable: false
  })
  taskId!: string;

  @Field(() => String, {
    nullable: false
  })
  userId!: string;

  @Field(() => Date, {
    nullable: false
  })
  assignedAt!: Date;

  @Field(() => String, {
    nullable: false
  })
  assignedBy!: string;

  task?: Task;

  user?: User;
}
