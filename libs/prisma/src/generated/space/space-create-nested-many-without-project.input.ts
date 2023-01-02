import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceCreateWithoutProjectInput } from './space-create-without-project.input';
import { Type } from 'class-transformer';
import { SpaceCreateOrConnectWithoutProjectInput } from './space-create-or-connect-without-project.input';
import { SpaceCreateManyProjectInputEnvelope } from './space-create-many-project-input-envelope.input';
import { SpaceWhereUniqueInput } from './space-where-unique.input';

@InputType()
export class SpaceCreateNestedManyWithoutProjectInput {

    @Field(() => [SpaceCreateWithoutProjectInput], {nullable:true})
    @Type(() => SpaceCreateWithoutProjectInput)
    create?: Array<SpaceCreateWithoutProjectInput>;

    @Field(() => [SpaceCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => SpaceCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<SpaceCreateOrConnectWithoutProjectInput>;

    @Field(() => SpaceCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => SpaceCreateManyProjectInputEnvelope)
    createMany?: SpaceCreateManyProjectInputEnvelope;

    @Field(() => [SpaceWhereUniqueInput], {nullable:true})
    @Type(() => SpaceWhereUniqueInput)
    connect?: Array<SpaceWhereUniqueInput>;
}
