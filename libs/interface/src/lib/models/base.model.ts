import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TimestampResolver } from "graphql-scalars"

@ObjectType({ isAbstract: true })
export abstract class BaseModel {
  @Field(() => ID)
  id: string;

  @Field(() => TimestampResolver, {
    description: 'Identifies the date and time when the object was created.',
  })
  createdAt: Date;

  @Field(() => TimestampResolver, {
    description:
      'Identifies the date and time when the object was last updated.',
  })
  updatedAt: Date;
}
