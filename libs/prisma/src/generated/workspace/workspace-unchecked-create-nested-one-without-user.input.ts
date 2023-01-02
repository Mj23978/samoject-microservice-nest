import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceCreateWithoutUserInput } from './workspace-create-without-user.input';
import { Type } from 'class-transformer';
import { WorkspaceCreateOrConnectWithoutUserInput } from './workspace-create-or-connect-without-user.input';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';

@InputType()
export class WorkspaceUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => WorkspaceCreateWithoutUserInput, {nullable:true})
    @Type(() => WorkspaceCreateWithoutUserInput)
    create?: WorkspaceCreateWithoutUserInput;

    @Field(() => WorkspaceCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => WorkspaceCreateOrConnectWithoutUserInput)
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput;

    @Field(() => WorkspaceWhereUniqueInput, {nullable:true})
    @Type(() => WorkspaceWhereUniqueInput)
    connect?: WorkspaceWhereUniqueInput;
}
