import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceCreateManyProjectInput } from './space-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class SpaceCreateManyProjectInputEnvelope {

    @Field(() => [SpaceCreateManyProjectInput], {nullable:false})
    @Type(() => SpaceCreateManyProjectInput)
    data!: Array<SpaceCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
