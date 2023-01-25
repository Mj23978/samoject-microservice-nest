import { Field, ObjectType } from "@nestjs/graphql";
import { ProjectCount } from "../outputs/ProjectCount";
import { Chat } from "./chat.model";
import { ProjectSettings } from "./project-settings.model";
import { ProjectsOnUsers } from "./projects-on-users.model";
import { Space } from "./space.model";
import { Task } from "./task.model";
import { User } from "./user.model";
import { Workspace } from "./workspace.model";

@ObjectType("Project", {
  isAbstract: true
})
export class Project {
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
    nullable: true
  })
  description?: string | null;

  @Field(() => String, {
    nullable: false
  })
  settingsId!: string;

  @Field(() => String, {
    nullable: false
  })
  workspaceId!: string;

  @Field(() => String, {
    nullable: false
  })
  ownerId!: string;

  @Field(() => String, {
    nullable: true
  })
  chatId?: string | null;

  chat?: Chat | null;

  owner?: User;

  settings?: ProjectSettings;

  workspace?: Workspace;

  users?: ProjectsOnUsers[];

  spaces?: Space[];

  tasks?: Task[];

  @Field(() => ProjectCount, {
    nullable: true
  })
  _count?: ProjectCount | null;
}
