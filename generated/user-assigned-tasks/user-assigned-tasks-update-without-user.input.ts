import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TaskUpdateOneRequiredWithoutAssignesNestedInput } from '../task/task-update-one-required-without-assignes-nested.input';

@InputType()
export class UserAssignedTasksUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    assignedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    assignedBy?: StringFieldUpdateOperationsInput;

    @Field(() => TaskUpdateOneRequiredWithoutAssignesNestedInput, {nullable:true})
    task?: TaskUpdateOneRequiredWithoutAssignesNestedInput;
}
