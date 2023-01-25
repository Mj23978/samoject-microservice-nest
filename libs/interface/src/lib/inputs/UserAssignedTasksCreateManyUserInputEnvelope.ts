import { Field, InputType } from "@nestjs/graphql";
import { UserAssignedTasksCreateManyUserInput } from "../inputs/UserAssignedTasksCreateManyUserInput";

@InputType("UserAssignedTasksCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class UserAssignedTasksCreateManyUserInputEnvelope {
  @Field(() => [UserAssignedTasksCreateManyUserInput], {
    nullable: false
  })
  data!: UserAssignedTasksCreateManyUserInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
