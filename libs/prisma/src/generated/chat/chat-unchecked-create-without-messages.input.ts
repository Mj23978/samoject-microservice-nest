import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUncheckedCreateNestedOneWithoutChatInput } from '../project/project-unchecked-create-nested-one-without-chat.input';
import { SpaceUncheckedCreateNestedOneWithoutChatInput } from '../space/space-unchecked-create-nested-one-without-chat.input';
import { TaskUncheckedCreateNestedOneWithoutChatInput } from '../task/task-unchecked-create-nested-one-without-chat.input';
import { UserUncheckedCreateNestedOneWithoutChatInput } from '../user/user-unchecked-create-nested-one-without-chat.input';

@InputType()
export class ChatUncheckedCreateWithoutMessagesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProjectUncheckedCreateNestedOneWithoutChatInput, {nullable:true})
    Project?: ProjectUncheckedCreateNestedOneWithoutChatInput;

    @Field(() => SpaceUncheckedCreateNestedOneWithoutChatInput, {nullable:true})
    Space?: SpaceUncheckedCreateNestedOneWithoutChatInput;

    @Field(() => TaskUncheckedCreateNestedOneWithoutChatInput, {nullable:true})
    Task?: TaskUncheckedCreateNestedOneWithoutChatInput;

    @Field(() => UserUncheckedCreateNestedOneWithoutChatInput, {nullable:true})
    User?: UserUncheckedCreateNestedOneWithoutChatInput;
}
