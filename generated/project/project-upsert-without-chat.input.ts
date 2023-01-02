import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutChatInput } from './project-update-without-chat.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutChatInput } from './project-create-without-chat.input';

@InputType()
export class ProjectUpsertWithoutChatInput {

    @Field(() => ProjectUpdateWithoutChatInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutChatInput)
    update!: ProjectUpdateWithoutChatInput;

    @Field(() => ProjectCreateWithoutChatInput, {nullable:false})
    @Type(() => ProjectCreateWithoutChatInput)
    create!: ProjectCreateWithoutChatInput;
}
