import { Field, InputType } from "@nestjs/graphql";

@InputType("ProjectsOnUsersCreateManyInput", {
  isAbstract: true
})
export class ProjectsOnUsersCreateManyInput {
  @Field(() => String, {
    nullable: false
  })
  projectId!: string;

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
