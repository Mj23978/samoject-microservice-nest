import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateManyParentInput } from "../inputs/TaskCreateManyParentInput";

@InputType("TaskCreateManyParentInputEnvelope", {
  isAbstract: true
})
export class TaskCreateManyParentInputEnvelope {
  @Field(() => [TaskCreateManyParentInput], {
    nullable: false
  })
  data!: TaskCreateManyParentInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
