import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUncheckedCreateNestedOneWithoutSettingsInput } from '../project/project-unchecked-create-nested-one-without-settings.input';

@InputType()
export class ProjectSettingsUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    localId!: string;

    @Field(() => String, {nullable:false})
    projectId!: string;

    @Field(() => ProjectUncheckedCreateNestedOneWithoutSettingsInput, {nullable:true})
    project?: ProjectUncheckedCreateNestedOneWithoutSettingsInput;
}
