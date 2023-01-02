import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceUncheckedCreateNestedOneWithoutViewInput } from '../space/space-unchecked-create-nested-one-without-view.input';

@InputType()
export class SpaceViewUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    localId!: string;

    @Field(() => String, {nullable:false})
    spaceId!: string;

    @Field(() => SpaceUncheckedCreateNestedOneWithoutViewInput, {nullable:true})
    space?: SpaceUncheckedCreateNestedOneWithoutViewInput;
}
