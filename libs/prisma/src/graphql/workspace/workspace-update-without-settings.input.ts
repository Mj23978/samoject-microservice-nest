import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutWorkspacesNestedInput } from '../user/user-update-one-required-without-workspaces-nested.input';
import { ProjectUpdateManyWithoutWorkspaceNestedInput } from '../project/project-update-many-without-workspace-nested.input';

@InputType()
export class WorkspaceUpdateWithoutSettingsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutWorkspacesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput;

    @Field(() => ProjectUpdateManyWithoutWorkspaceNestedInput, {nullable:true})
    projects?: ProjectUpdateManyWithoutWorkspaceNestedInput;
}
