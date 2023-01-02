import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MessageListRelationFilter } from '../message/message-list-relation-filter.input';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';
import { SpaceRelationFilter } from '../space/space-relation-filter.input';
import { TaskRelationFilter } from '../task/task-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class ChatWhereInput {

    @Field(() => [ChatWhereInput], {nullable:true})
    AND?: Array<ChatWhereInput>;

    @Field(() => [ChatWhereInput], {nullable:true})
    OR?: Array<ChatWhereInput>;

    @Field(() => [ChatWhereInput], {nullable:true})
    NOT?: Array<ChatWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    messages?: MessageListRelationFilter;

    @Field(() => ProjectRelationFilter, {nullable:true})
    Project?: ProjectRelationFilter;

    @Field(() => SpaceRelationFilter, {nullable:true})
    Space?: SpaceRelationFilter;

    @Field(() => TaskRelationFilter, {nullable:true})
    Task?: TaskRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;
}
