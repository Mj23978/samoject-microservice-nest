import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutOwnerInput } from './project-create-without-owner.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutOwnerInput } from './project-create-or-connect-without-owner.input';
import { ProjectUpsertWithWhereUniqueWithoutOwnerInput } from './project-upsert-with-where-unique-without-owner.input';
import { ProjectCreateManyOwnerInputEnvelope } from './project-create-many-owner-input-envelope.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithWhereUniqueWithoutOwnerInput } from './project-update-with-where-unique-without-owner.input';
import { ProjectUpdateManyWithWhereWithoutOwnerInput } from './project-update-many-with-where-without-owner.input';
import { ProjectScalarWhereInput } from './project-scalar-where.input';

@InputType()
export class ProjectUpdateManyWithoutOwnerNestedInput {

    @Field(() => [ProjectCreateWithoutOwnerInput], {nullable:true})
    @Type(() => ProjectCreateWithoutOwnerInput)
    create?: Array<ProjectCreateWithoutOwnerInput>;

    @Field(() => [ProjectCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutOwnerInput>;

    @Field(() => [ProjectUpsertWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutOwnerInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutOwnerInput>;

    @Field(() => ProjectCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyOwnerInputEnvelope)
    createMany?: ProjectCreateManyOwnerInputEnvelope;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    set?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    disconnect?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    delete?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectUpdateWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutOwnerInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutOwnerInput>;

    @Field(() => [ProjectUpdateManyWithWhereWithoutOwnerInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutOwnerInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutOwnerInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}
