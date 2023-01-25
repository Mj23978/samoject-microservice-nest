import { Field, InputType } from "@nestjs/graphql";
import { ProjectsOnUsersCreateManyProjectInput } from "../inputs/ProjectsOnUsersCreateManyProjectInput";

@InputType("ProjectsOnUsersCreateManyProjectInputEnvelope", {
  isAbstract: true
})
export class ProjectsOnUsersCreateManyProjectInputEnvelope {
  @Field(() => [ProjectsOnUsersCreateManyProjectInput], {
    nullable: false
  })
  data!: ProjectsOnUsersCreateManyProjectInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
