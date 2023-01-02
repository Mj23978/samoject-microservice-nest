import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutTasksInput } from './project-create-without-tasks.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutTasksInput } from './project-create-or-connect-without-tasks.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutTasksInput {

    @Field(() => ProjectCreateWithoutTasksInput, {nullable:true})
    @Type(() => ProjectCreateWithoutTasksInput)
    create?: ProjectCreateWithoutTasksInput;

    @Field(() => ProjectCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutTasksInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: ProjectWhereUniqueInput;
}
