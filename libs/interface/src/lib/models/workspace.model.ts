import { Field, ObjectType } from "@nestjs/graphql";
import { WorkspaceCount } from "../outputs/WorkspaceCount";
import { Project } from "./project.model";
import { User } from "./user.model";
import { WorkspaceSettings } from "./workspace-settings.model";

@ObjectType("Workspace", {
  isAbstract: true
})
export class Workspace {
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
  title!: string;

  @Field(() => String, {
    nullable: false
  })
  settingsId!: string;

  @Field(() => String, {
    nullable: false
  })
  userId!: string;

  settings?: WorkspaceSettings;

  user?: User;

  projects?: Project[];

  @Field(() => WorkspaceCount, {
    nullable: true
  })
  _count?: WorkspaceCount | null;
}
