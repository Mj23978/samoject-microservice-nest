import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ChatUpdateOneWithoutSpaceNestedInput } from '../chat/chat-update-one-without-space-nested.input';
import { SpaceUpdateOneWithoutSubspacesNestedInput } from './space-update-one-without-subspaces-nested.input';
import { ProjectUpdateOneRequiredWithoutSpacesNestedInput } from '../project/project-update-one-required-without-spaces-nested.input';
import { SpaceViewUpdateOneRequiredWithoutSpaceNestedInput } from '../space-view/space-view-update-one-required-without-space-nested.input';
import { SpaceUpdateManyWithoutParentNestedInput } from './space-update-many-without-parent-nested.input';

@InputType()
export class SpaceUpdateWithoutSettingsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    spaceType?: StringFieldUpdateOperationsInput;

    @Field(() => ChatUpdateOneWithoutSpaceNestedInput, {nullable:true})
    chat?: ChatUpdateOneWithoutSpaceNestedInput;

    @Field(() => SpaceUpdateOneWithoutSubspacesNestedInput, {nullable:true})
    parent?: SpaceUpdateOneWithoutSubspacesNestedInput;

    @Field(() => ProjectUpdateOneRequiredWithoutSpacesNestedInput, {nullable:true})
    project?: ProjectUpdateOneRequiredWithoutSpacesNestedInput;

    @Field(() => SpaceViewUpdateOneRequiredWithoutSpaceNestedInput, {nullable:true})
    view?: SpaceViewUpdateOneRequiredWithoutSpaceNestedInput;

    @Field(() => SpaceUpdateManyWithoutParentNestedInput, {nullable:true})
    subspaces?: SpaceUpdateManyWithoutParentNestedInput;
}
