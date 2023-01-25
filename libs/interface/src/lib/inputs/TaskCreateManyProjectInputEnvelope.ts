import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateManyProjectInput } from "../inputs/TaskCreateManyProjectInput";

@InputType("TaskCreateManyProjectInputEnvelope", {
  isAbstract: true
})
export class TaskCreateManyProjectInputEnvelope {
  @Field(() => [TaskCreateManyProjectInput], {
    nullable: false
  })
  data!: TaskCreateManyProjectInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
