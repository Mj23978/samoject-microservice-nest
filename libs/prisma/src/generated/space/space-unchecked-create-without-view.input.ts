import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceUncheckedCreateNestedManyWithoutParentInput } from './space-unchecked-create-nested-many-without-parent.input';

@InputType()
export class SpaceUncheckedCreateWithoutViewInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    projectId!: string;

    @Field(() => String, {nullable:false})
    settingsId!: string;

    @Field(() => String, {nullable:false})
    spaceType!: string;

    @Field(() => String, {nullable:true})
    parentId?: string;

    @Field(() => String, {nullable:true})
    chatId?: string;

    @Field(() => SpaceUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    subspaces?: SpaceUncheckedCreateNestedManyWithoutParentInput;
}
