import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutTasksInput } from './project-create-without-tasks.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutTasksInput } from './project-create-or-connect-without-tasks.input';
import { ProjectUpsertWithoutTasksInput } from './project-upsert-without-tasks.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithoutTasksInput } from './project-update-without-tasks.input';

@InputType()
export class ProjectUpdateOneWithoutTasksNestedInput {

    @Field(() => ProjectCreateWithoutTasksInput, {nullable:true})
    @Type(() => ProjectCreateWithoutTasksInput)
    create?: ProjectCreateWithoutTasksInput;

    @Field(() => ProjectCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutTasksInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput;

    @Field(() => ProjectUpsertWithoutTasksInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutTasksInput)
    upsert?: ProjectUpsertWithoutTasksInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutTasksInput, {nullable:true})
    @Type(() => ProjectUpdateWithoutTasksInput)
    update?: ProjectUpdateWithoutTasksInput;
}
