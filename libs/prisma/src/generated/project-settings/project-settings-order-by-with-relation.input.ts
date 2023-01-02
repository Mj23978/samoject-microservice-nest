import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProjectOrderByWithRelationInput } from '../project/project-order-by-with-relation.input';

@InputType()
export class ProjectSettingsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    localId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => ProjectOrderByWithRelationInput, {nullable:true})
    project?: ProjectOrderByWithRelationInput;
}
