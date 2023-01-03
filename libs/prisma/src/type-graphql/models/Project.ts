import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../generated";
import { DecimalJSScalar } from "../scalars";
import { Chat } from "../models/Chat";
import { ProjectSettings } from "../models/ProjectSettings";
import { ProjectsOnUsers } from "../models/ProjectsOnUsers";
import { Space } from "../models/Space";
import { Task } from "../models/Task";
import { User } from "../models/User";
import { Workspace } from "../models/Workspace";
import { ProjectCount } from "../resolvers/outputs/ProjectCount";

@TypeGraphQL.ObjectType("Project", {
  isAbstract: true
})
export class Project {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  settingsId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  workspaceId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ownerId!: string;

  @TypeGraphQL.Field(_type => String, {
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

  @TypeGraphQL.Field(_type => ProjectCount, {
    nullable: true
  })
  _count?: ProjectCount | null;
}
