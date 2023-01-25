import { Field, InputType } from "@nestjs/graphql";

@InputType("ProjectsOnUsersCreateManyProjectInput", {
  isAbstract: true
})
export class ProjectsOnUsersCreateManyProjectInput {
  @Field(() => String, {
    nullable: false
  })
  userId!: string;

  @Field(() => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;

  @Field(() => String, {
    nullable: false
  })
  assignedBy!: string;
}
