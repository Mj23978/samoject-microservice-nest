import { Field, InputType } from "@nestjs/graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MessageListRelationFilter } from "../inputs/MessageListRelationFilter";
import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { SpaceRelationFilter } from "../inputs/SpaceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TaskRelationFilter } from "../inputs/TaskRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@InputType("ChatWhereInput", {
  isAbstract: true
})
export class ChatWhereInput {
  @Field(() => [ChatWhereInput], {
    nullable: true
  })
  AND?: ChatWhereInput[] | undefined;

  @Field(() => [ChatWhereInput], {
    nullable: true
  })
  OR?: ChatWhereInput[] | undefined;

  @Field(() => [ChatWhereInput], {
    nullable: true
  })
  NOT?: ChatWhereInput[] | undefined;

  @Field(() => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @Field(() => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @Field(() => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @Field(() => MessageListRelationFilter, {
    nullable: true
  })
  messages?: MessageListRelationFilter | undefined;

  @Field(() => ProjectRelationFilter, {
    nullable: true
  })
  Project?: ProjectRelationFilter | undefined;

  @Field(() => SpaceRelationFilter, {
    nullable: true
  })
  Space?: SpaceRelationFilter | undefined;

  @Field(() => TaskRelationFilter, {
    nullable: true
  })
  Task?: TaskRelationFilter | undefined;

  @Field(() => UserRelationFilter, {
    nullable: true
  })
  User?: UserRelationFilter | undefined;
}
