import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../generated";
import { DecimalJSScalar } from "../scalars";
import { Chat } from "../models/Chat";
import { Project } from "../models/Project";
import { SpaceSettings } from "../models/SpaceSettings";
import { SpaceView } from "../models/SpaceView";
import { SpaceCount } from "../resolvers/outputs/SpaceCount";

@TypeGraphQL.ObjectType("Space", {
  isAbstract: true
})
export class Space {
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
  viewId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  settingsId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  spaceType!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chatId?: string | null;

  chat?: Chat | null;

  parent?: Space | null;

  project?: Project;

  settings?: SpaceSettings;

  view?: SpaceView;

  subspaces?: Space[];

  @TypeGraphQL.Field(_type => SpaceCount, {
    nullable: true
  })
  _count?: SpaceCount | null;
}
