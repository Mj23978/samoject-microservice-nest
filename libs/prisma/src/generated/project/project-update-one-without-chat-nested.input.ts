import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutChatInput } from './project-create-without-chat.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutChatInput } from './project-create-or-connect-without-chat.input';
import { ProjectUpsertWithoutChatInput } from './project-upsert-without-chat.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithoutChatInput } from './project-update-without-chat.input';

@InputType()
export class ProjectUpdateOneWithoutChatNestedInput {

    @Field(() => ProjectCreateWithoutChatInput, {nullable:true})
    @Type(() => ProjectCreateWithoutChatInput)
    create?: ProjectCreateWithoutChatInput;

    @Field(() => ProjectCreateOrConnectWithoutChatInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutChatInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutChatInput;

    @Field(() => ProjectUpsertWithoutChatInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutChatInput)
    upsert?: ProjectUpsertWithoutChatInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutChatInput, {nullable:true})
    @Type(() => ProjectUpdateWithoutChatInput)
    update?: ProjectUpdateWithoutChatInput;
}
