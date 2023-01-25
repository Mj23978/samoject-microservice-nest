import { Field, InputType } from "@nestjs/graphql";

@InputType("ProjectsOnUsersCreateManyUserInput", {
  isAbstract: true
})
export class ProjectsOnUsersCreateManyUserInput {
  @Field(() => String, {
    nullable: false
  })
  projectId!: string;

  @Field(() => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;

  @Field(() => String, {
    nullable: false
  })
  assignedBy!: string;
}
