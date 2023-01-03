import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ChatUpdateOneWithoutProjectNestedInput } from '../chat/chat-update-one-without-project-nested.input';
import { ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput } from '../project-settings/project-settings-update-one-required-without-project-nested.input';
import { WorkspaceUpdateOneRequiredWithoutProjectsNestedInput } from '../workspace/workspace-update-one-required-without-projects-nested.input';
import { ProjectsOnUsersUpdateManyWithoutProjectNestedInput } from '../projects-on-users/projects-on-users-update-many-without-project-nested.input';
import { SpaceUpdateManyWithoutProjectNestedInput } from '../space/space-update-many-without-project-nested.input';
import { TaskUpdateManyWithoutProjectNestedInput } from '../task/task-update-many-without-project-nested.input';

@InputType()
export class ProjectUpdateWithoutOwnerInput {

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

    @Field(() => ChatUpdateOneWithoutProjectNestedInput, {nullable:true})
    chat?: ChatUpdateOneWithoutProjectNestedInput;

    @Field(() => ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput, {nullable:true})
    settings?: ProjectSettingsUpdateOneRequiredWithoutProjectNestedInput;

    @Field(() => WorkspaceUpdateOneRequiredWithoutProjectsNestedInput, {nullable:true})
    workspace?: WorkspaceUpdateOneRequiredWithoutProjectsNestedInput;

    @Field(() => ProjectsOnUsersUpdateManyWithoutProjectNestedInput, {nullable:true})
    users?: ProjectsOnUsersUpdateManyWithoutProjectNestedInput;

    @Field(() => SpaceUpdateManyWithoutProjectNestedInput, {nullable:true})
    spaces?: SpaceUpdateManyWithoutProjectNestedInput;

    @Field(() => TaskUpdateManyWithoutProjectNestedInput, {nullable:true})
    tasks?: TaskUpdateManyWithoutProjectNestedInput;
}
