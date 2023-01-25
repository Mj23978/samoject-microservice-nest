import { Field, InputType } from "@nestjs/graphql";

@InputType("ProjectsOnUsersProjectIdUserIdCompoundUniqueInput", {
  isAbstract: true
})
export class ProjectsOnUsersProjectIdUserIdCompoundUniqueInput {
  @Field(() => String, {
    nullable: false
  })
  projectId!: string;

  @Field(() => String, {
    nullable: false
  })
  userId!: string;
}
