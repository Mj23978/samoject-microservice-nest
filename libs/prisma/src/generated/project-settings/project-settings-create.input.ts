import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateNestedOneWithoutSettingsInput } from '../project/project-create-nested-one-without-settings.input';

@InputType()
export class ProjectSettingsCreateInput {

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

    @Field(() => ProjectCreateNestedOneWithoutSettingsInput, {nullable:true})
    project?: ProjectCreateNestedOneWithoutSettingsInput;
}
