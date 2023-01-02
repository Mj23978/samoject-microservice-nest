import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutChatInput } from './project-create-without-chat.input';

@InputType()
export class ProjectCreateOrConnectWithoutChatInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateWithoutChatInput, {nullable:false})
    @Type(() => ProjectCreateWithoutChatInput)
    create!: ProjectCreateWithoutChatInput;
}
