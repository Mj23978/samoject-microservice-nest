import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUncheckedCreateNestedManyWithoutWorkspaceInput } from '../project/project-unchecked-create-nested-many-without-workspace.input';

@InputType()
export class WorkspaceUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    settingsId!: string;

    @Field(() => ProjectUncheckedCreateNestedManyWithoutWorkspaceInput, {nullable:true})
    projects?: ProjectUncheckedCreateNestedManyWithoutWorkspaceInput;
}
