import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Workspace } from '../workspace/workspace.model';

@ObjectType()
export class WorkspaceSettings {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    localId!: string;

    @Field(() => String, {nullable:false})
    workspaceId!: string;

    @Field(() => Workspace, {nullable:true})
    workspace?: Workspace | null;
}
