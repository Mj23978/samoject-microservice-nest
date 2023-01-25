import { Field, ObjectType } from "@nestjs/graphql";
import { Project } from "./project.model";
import { User } from "./user.model";

@ObjectType("ProjectsOnUsers", {
  isAbstract: true
})
export class ProjectsOnUsers {
  @Field(() => String, {
    nullable: false
  })
  projectId!: string;

  @Field(() => String, {
    nullable: false
  })
  userId!: string;

  @Field(() => Date, {
    nullable: false
  })
  assignedAt!: Date;

  @Field(() => String, {
    nullable: false
  })
  assignedBy!: string;

  project?: Project;

  user?: User;
}
