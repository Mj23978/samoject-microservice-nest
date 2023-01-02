import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceCreateNestedOneWithoutViewInput } from '../space/space-create-nested-one-without-view.input';

@InputType()
export class SpaceViewCreateInput {

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

    @Field(() => SpaceCreateNestedOneWithoutViewInput, {nullable:true})
    space?: SpaceCreateNestedOneWithoutViewInput;
}
