import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MessageListRelationFilter } from "../inputs/MessageListRelationFilter";
import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { SpaceRelationFilter } from "../inputs/SpaceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TaskRelationFilter } from "../inputs/TaskRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ChatWhereInput", {
  isAbstract: true
})
export class ChatWhereInput {
  @TypeGraphQL.Field(_type => [ChatWhereInput], {
    nullable: true
  })
  AND?: ChatWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatWhereInput], {
    nullable: true
  })
  OR?: ChatWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatWhereInput], {
    nullable: true
  })
  NOT?: ChatWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => MessageListRelationFilter, {
    nullable: true
  })
  messages?: MessageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectRelationFilter, {
    nullable: true
  })
  Project?: ProjectRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SpaceRelationFilter, {
    nullable: true
  })
  Space?: SpaceRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TaskRelationFilter, {
    nullable: true
  })
  Task?: TaskRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  User?: UserRelationFilter | undefined;
}
