import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpaceCreateManyParentInput } from './space-create-many-parent.input';
import { Type } from 'class-transformer';

@InputType()
export class SpaceCreateManyParentInputEnvelope {

    @Field(() => [SpaceCreateManyParentInput], {nullable:false})
    @Type(() => SpaceCreateManyParentInput)
    data!: Array<SpaceCreateManyParentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
