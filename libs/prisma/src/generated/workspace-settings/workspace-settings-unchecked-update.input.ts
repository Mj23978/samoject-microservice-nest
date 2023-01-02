import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { WorkspaceUncheckedUpdateOneWithoutSettingsNestedInput } from '../workspace/workspace-unchecked-update-one-without-settings-nested.input';

@InputType()
export class WorkspaceSettingsUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    localId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    workspaceId?: StringFieldUpdateOperationsInput;

    @Field(() => WorkspaceUncheckedUpdateOneWithoutSettingsNestedInput, {nullable:true})
    workspace?: WorkspaceUncheckedUpdateOneWithoutSettingsNestedInput;
}
