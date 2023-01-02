import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutOwnerInput } from './project-create-without-owner.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutOwnerInput } from './project-create-or-connect-without-owner.input';
import { ProjectCreateManyOwnerInputEnvelope } from './project-create-many-owner-input-envelope.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedManyWithoutOwnerInput {

    @Field(() => [ProjectCreateWithoutOwnerInput], {nullable:true})
    @Type(() => ProjectCreateWithoutOwnerInput)
    create?: Array<ProjectCreateWithoutOwnerInput>;

    @Field(() => [ProjectCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutOwnerInput>;

    @Field(() => ProjectCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyOwnerInputEnvelope)
    createMany?: ProjectCreateManyOwnerInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
}
