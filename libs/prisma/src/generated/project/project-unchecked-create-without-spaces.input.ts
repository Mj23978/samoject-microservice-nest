import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectsOnUsersUncheckedCreateNestedManyWithoutProjectInput } from '../projects-on-users/projects-on-users-unchecked-create-nested-many-without-project.input';
import { TaskUncheckedCreateNestedManyWithoutProjectInput } from '../task/task-unchecked-create-nested-many-without-project.input';

@InputType()
export class ProjectUncheckedCreateWithoutSpacesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    settingsId!: string;

    @Field(() => String, {nullable:false})
    workspaceId!: string;

    @Field(() => String, {nullable:false})
    ownerId!: string;

    @Field(() => String, {nullable:true})
    chatId?: string;

    @Field(() => ProjectsOnUsersUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    users?: ProjectsOnUsersUncheckedCreateNestedManyWithoutProjectInput;

    @Field(() => TaskUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput;
}
