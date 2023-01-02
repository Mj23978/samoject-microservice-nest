import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateNestedOneWithoutSpaceInput } from '../chat/chat-create-nested-one-without-space.input';
import { SpaceCreateNestedOneWithoutSubspacesInput } from './space-create-nested-one-without-subspaces.input';
import { ProjectCreateNestedOneWithoutSpacesInput } from '../project/project-create-nested-one-without-spaces.input';
import { SpaceSettingsCreateNestedOneWithoutSpaceInput } from '../space-settings/space-settings-create-nested-one-without-space.input';
import { SpaceViewCreateNestedOneWithoutSpaceInput } from '../space-view/space-view-create-nested-one-without-space.input';
import { SpaceCreateNestedManyWithoutParentInput } from './space-create-nested-many-without-parent.input';

@InputType()
export class SpaceCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    spaceType!: string;

    @Field(() => ChatCreateNestedOneWithoutSpaceInput, {nullable:true})
    chat?: ChatCreateNestedOneWithoutSpaceInput;

    @Field(() => SpaceCreateNestedOneWithoutSubspacesInput, {nullable:true})
    parent?: SpaceCreateNestedOneWithoutSubspacesInput;

    @Field(() => ProjectCreateNestedOneWithoutSpacesInput, {nullable:false})
    project!: ProjectCreateNestedOneWithoutSpacesInput;

    @Field(() => SpaceSettingsCreateNestedOneWithoutSpaceInput, {nullable:false})
    settings!: SpaceSettingsCreateNestedOneWithoutSpaceInput;

    @Field(() => SpaceViewCreateNestedOneWithoutSpaceInput, {nullable:false})
    view!: SpaceViewCreateNestedOneWithoutSpaceInput;

    @Field(() => SpaceCreateNestedManyWithoutParentInput, {nullable:true})
    subspaces?: SpaceCreateNestedManyWithoutParentInput;
}
