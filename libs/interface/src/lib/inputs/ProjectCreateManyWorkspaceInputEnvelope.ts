import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateManyWorkspaceInput } from "../inputs/ProjectCreateManyWorkspaceInput";

@InputType("ProjectCreateManyWorkspaceInputEnvelope", {
  isAbstract: true
})
export class ProjectCreateManyWorkspaceInputEnvelope {
  @Field(() => [ProjectCreateManyWorkspaceInput], {
    nullable: false
  })
  data!: ProjectCreateManyWorkspaceInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
