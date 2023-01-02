import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutAssignedTasksNestedInput } from '../user/user-update-one-required-without-assigned-tasks-nested.input';

@InputType()
export class UserAssignedTasksUpdateWithoutTaskInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    assignedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    assignedBy?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutAssignedTasksNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput;
}
