import { Field, ObjectType } from "@nestjs/graphql";
import { Project } from "./project.model";

@ObjectType("ProjectSettings", {
  isAbstract: true
})
export class ProjectSettings {
  @Field(() => String, {
    nullable: false
  })
  id!: string;

  @Field(() => Date, {
    nullable: false
  })
  createdAt!: Date;

  @Field(() => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @Field(() => String, {
    nullable: false
  })
  localId!: string;

  @Field(() => String, {
    nullable: false
  })
  projectId!: string;

  project?: Project | null;
}
