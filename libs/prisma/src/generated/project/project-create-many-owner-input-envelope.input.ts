import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateManyOwnerInput } from './project-create-many-owner.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectCreateManyOwnerInputEnvelope {

    @Field(() => [ProjectCreateManyOwnerInput], {nullable:false})
    @Type(() => ProjectCreateManyOwnerInput)
    data!: Array<ProjectCreateManyOwnerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
