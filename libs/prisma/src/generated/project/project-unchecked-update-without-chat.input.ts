import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ProjectsOnUsersUncheckedUpdateManyWithoutProjectNestedInput } from '../projects-on-users/projects-on-users-unchecked-update-many-without-project-nested.input';
import { SpaceUncheckedUpdateManyWithoutProjectNestedInput } from '../space/space-unchecked-update-many-without-project-nested.input';
import { TaskUncheckedUpdateManyWithoutProjectNestedInput } from '../task/task-unchecked-update-many-without-project-nested.input';

@InputType()
export class ProjectUncheckedUpdateWithoutChatInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    settingsId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    workspaceId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ownerId?: StringFieldUpdateOperationsInput;

    @Field(() => ProjectsOnUsersUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    users?: ProjectsOnUsersUncheckedUpdateManyWithoutProjectNestedInput;

    @Field(() => SpaceUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    spaces?: SpaceUncheckedUpdateManyWithoutProjectNestedInput;

    @Field(() => TaskUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput;
}
