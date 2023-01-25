import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("TaskCount", {
  isAbstract: true
})
export class TaskCount {
  @Field(() => Int, {
    nullable: false
  })
  subTasks!: number;

  @Field(() => Int, {
    nullable: false
  })
  assignes!: number;
}
