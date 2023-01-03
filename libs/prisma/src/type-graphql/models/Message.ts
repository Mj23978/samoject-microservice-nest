import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../generated";
import { DecimalJSScalar } from "../scalars";
import { Chat } from "../models/Chat";
import { User } from "../models/User";
import { MessageCount } from "../resolvers/outputs/MessageCount";

@TypeGraphQL.ObjectType("Message", {
  isAbstract: true
})
export class Message {
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
  content!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  contentType!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  senderId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  chatId!: string;

  chat?: Chat;

  parent?: Message | null;

  sender?: User | null;

  subMessages?: Message[];

  @TypeGraphQL.Field(_type => MessageCount, {
    nullable: true
  })
  _count?: MessageCount | null;
}
