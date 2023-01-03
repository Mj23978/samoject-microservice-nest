import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../generated";
import { DecimalJSScalar } from "../scalars";
import { Message } from "../models/Message";
import { Project } from "../models/Project";
import { Space } from "../models/Space";
import { Task } from "../models/Task";
import { User } from "../models/User";
import { ChatCount } from "../resolvers/outputs/ChatCount";

@TypeGraphQL.ObjectType("Chat", {
  isAbstract: true
})
export class Chat {
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

  messages?: Message[];

  Project?: Project | null;

  Space?: Space | null;

  Task?: Task | null;

  User?: User | null;

  @TypeGraphQL.Field(_type => ChatCount, {
    nullable: true
  })
  _count?: ChatCount | null;
}
