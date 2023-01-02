import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceUpdateWithoutUserInput } from './workspace-update-without-user.input';
import { Type } from 'class-transformer';
import { WorkspaceCreateWithoutUserInput } from './workspace-create-without-user.input';

@InputType()
export class WorkspaceUpsertWithoutUserInput {

    @Field(() => WorkspaceUpdateWithoutUserInput, {nullable:false})
    @Type(() => WorkspaceUpdateWithoutUserInput)
    update!: WorkspaceUpdateWithoutUserInput;

    @Field(() => WorkspaceCreateWithoutUserInput, {nullable:false})
    @Type(() => WorkspaceCreateWithoutUserInput)
    create!: WorkspaceCreateWithoutUserInput;
}
