import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../generated";
import { DecimalJSScalar } from "../scalars";
import { Project } from "../models/Project";
import { User } from "../models/User";
import { WorkspaceSettings } from "../models/WorkspaceSettings";
import { WorkspaceCount } from "../resolvers/outputs/WorkspaceCount";

@TypeGraphQL.ObjectType("Workspace", {
  isAbstract: true
})
export class Workspace {
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
    nullable: false
  })
  settingsId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  settings?: WorkspaceSettings;

  user?: User;

  projects?: Project[];

  @TypeGraphQL.Field(_type => WorkspaceCount, {
    nullable: true
  })
  _count?: WorkspaceCount | null;
}
