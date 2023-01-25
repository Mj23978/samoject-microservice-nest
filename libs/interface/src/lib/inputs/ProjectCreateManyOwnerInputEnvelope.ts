import { Field, InputType } from "@nestjs/graphql";
import { ProjectCreateManyOwnerInput } from "../inputs/ProjectCreateManyOwnerInput";

@InputType("ProjectCreateManyOwnerInputEnvelope", {
  isAbstract: true
})
export class ProjectCreateManyOwnerInputEnvelope {
  @Field(() => [ProjectCreateManyOwnerInput], {
    nullable: false
  })
  data!: ProjectCreateManyOwnerInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
