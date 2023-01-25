import { Field, InputType } from "@nestjs/graphql";
import { TaskCreateManyCreatorInput } from "../inputs/TaskCreateManyCreatorInput";

@InputType("TaskCreateManyCreatorInputEnvelope", {
  isAbstract: true
})
export class TaskCreateManyCreatorInputEnvelope {
  @Field(() => [TaskCreateManyCreatorInput], {
    nullable: false
  })
  data!: TaskCreateManyCreatorInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
