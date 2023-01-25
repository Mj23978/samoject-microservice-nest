import { Field, InputType } from "@nestjs/graphql";
import { UserAssignedTasksCreateManyTaskInput } from "../inputs/UserAssignedTasksCreateManyTaskInput";

@InputType("UserAssignedTasksCreateManyTaskInputEnvelope", {
  isAbstract: true
})
export class UserAssignedTasksCreateManyTaskInputEnvelope {
  @Field(() => [UserAssignedTasksCreateManyTaskInput], {
    nullable: false
  })
  data!: UserAssignedTasksCreateManyTaskInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
