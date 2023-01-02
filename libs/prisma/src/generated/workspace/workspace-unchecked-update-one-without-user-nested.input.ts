import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceCreateWithoutUserInput } from './workspace-create-without-user.input';
import { Type } from 'class-transformer';
import { WorkspaceCreateOrConnectWithoutUserInput } from './workspace-create-or-connect-without-user.input';
import { WorkspaceUpsertWithoutUserInput } from './workspace-upsert-without-user.input';
import { WorkspaceWhereUniqueInput } from './workspace-where-unique.input';
import { WorkspaceUpdateWithoutUserInput } from './workspace-update-without-user.input';

@InputType()
export class WorkspaceUncheckedUpdateOneWithoutUserNestedInput {

    @Field(() => WorkspaceCreateWithoutUserInput, {nullable:true})
    @Type(() => WorkspaceCreateWithoutUserInput)
    create?: WorkspaceCreateWithoutUserInput;

    @Field(() => WorkspaceCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => WorkspaceCreateOrConnectWithoutUserInput)
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput;

    @Field(() => WorkspaceUpsertWithoutUserInput, {nullable:true})
    @Type(() => WorkspaceUpsertWithoutUserInput)
    upsert?: WorkspaceUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => WorkspaceWhereUniqueInput, {nullable:true})
    @Type(() => WorkspaceWhereUniqueInput)
    connect?: WorkspaceWhereUniqueInput;

    @Field(() => WorkspaceUpdateWithoutUserInput, {nullable:true})
    @Type(() => WorkspaceUpdateWithoutUserInput)
    update?: WorkspaceUpdateWithoutUserInput;
}
