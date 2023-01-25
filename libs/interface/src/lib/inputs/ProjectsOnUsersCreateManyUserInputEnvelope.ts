import { Field, InputType } from "@nestjs/graphql";
import { ProjectsOnUsersCreateManyUserInput } from "../inputs/ProjectsOnUsersCreateManyUserInput";

@InputType("ProjectsOnUsersCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class ProjectsOnUsersCreateManyUserInputEnvelope {
  @Field(() => [ProjectsOnUsersCreateManyUserInput], {
    nullable: false
  })
  data!: ProjectsOnUsersCreateManyUserInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
