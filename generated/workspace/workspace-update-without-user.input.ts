import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { WorkspaceSettingsUpdateOneRequiredWithoutWorkspaceNestedInput } from '../workspace-settings/workspace-settings-update-one-required-without-workspace-nested.input';
import { ProjectUpdateManyWithoutWorkspaceNestedInput } from '../project/project-update-many-without-workspace-nested.input';

@InputType()
export class WorkspaceUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => WorkspaceSettingsUpdateOneRequiredWithoutWorkspaceNestedInput, {nullable:true})
    settings?: WorkspaceSettingsUpdateOneRequiredWithoutWorkspaceNestedInput;

    @Field(() => ProjectUpdateManyWithoutWorkspaceNestedInput, {nullable:true})
    projects?: ProjectUpdateManyWithoutWorkspaceNestedInput;
}
