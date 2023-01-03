import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutChatInput } from './project-create-without-chat.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutChatInput } from './project-create-or-connect-without-chat.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectUncheckedCreateNestedOneWithoutChatInput {

    @Field(() => ProjectCreateWithoutChatInput, {nullable:true})
    @Type(() => ProjectCreateWithoutChatInput)
    create?: ProjectCreateWithoutChatInput;

    @Field(() => ProjectCreateOrConnectWithoutChatInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutChatInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutChatInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: ProjectWhereUniqueInput;
}
