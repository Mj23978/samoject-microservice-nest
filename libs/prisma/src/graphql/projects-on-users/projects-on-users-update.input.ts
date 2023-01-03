import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProjectUpdateOneRequiredWithoutUsersNestedInput } from '../project/project-update-one-required-without-users-nested.input';
import { UserUpdateOneRequiredWithoutProjectsNestedInput } from '../user/user-update-one-required-without-projects-nested.input';

@InputType()
export class ProjectsOnUsersUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    assignedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    assignedBy?: StringFieldUpdateOperationsInput;

    @Field(() => ProjectUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    project?: ProjectUpdateOneRequiredWithoutUsersNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutProjectsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput;
}
