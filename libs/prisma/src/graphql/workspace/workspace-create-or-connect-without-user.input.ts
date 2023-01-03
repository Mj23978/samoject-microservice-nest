import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';
import { Type } from 'class-transformer';
import { WorkspaceCreateWithoutUserInput } from './workspace-create-without-user.input';

@InputType()
export class WorkspaceCreateOrConnectWithoutUserInput {

    @Field(() => WorkspaceWhereUniqueInput, {nullable:false})
    @Type(() => WorkspaceWhereUniqueInput)
    where!: WorkspaceWhereUniqueInput;

    @Field(() => WorkspaceCreateWithoutUserInput, {nullable:false})
    @Type(() => WorkspaceCreateWithoutUserInput)
    create!: WorkspaceCreateWithoutUserInput;
}
