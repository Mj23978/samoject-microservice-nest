import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("ProjectCount", {
  isAbstract: true
})
export class ProjectCount {
  @Field(() => Int, {
    nullable: false
  })
  users!: number;

  @Field(() => Int, {
    nullable: false
  })
  spaces!: number;

  @Field(() => Int, {
    nullable: false
  })
  tasks!: number;
}
