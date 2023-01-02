import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceCreateWithoutViewInput } from './space-create-without-view.input';
import { Type } from 'class-transformer';
import { SpaceCreateOrConnectWithoutViewInput } from './space-create-or-connect-without-view.input';
import { SpaceWhereUniqueInput } from './space-where-unique.input';

@InputType()
export class SpaceCreateNestedOneWithoutViewInput {

    @Field(() => SpaceCreateWithoutViewInput, {nullable:true})
    @Type(() => SpaceCreateWithoutViewInput)
    create?: SpaceCreateWithoutViewInput;

    @Field(() => SpaceCreateOrConnectWithoutViewInput, {nullable:true})
    @Type(() => SpaceCreateOrConnectWithoutViewInput)
    connectOrCreate?: SpaceCreateOrConnectWithoutViewInput;

    @Field(() => SpaceWhereUniqueInput, {nullable:true})
    @Type(() => SpaceWhereUniqueInput)
    connect?: SpaceWhereUniqueInput;
}
