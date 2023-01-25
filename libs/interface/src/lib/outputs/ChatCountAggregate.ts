import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("ChatCountAggregate", {
  isAbstract: true
})
export class ChatCountAggregate {
  @Field(() => Int, {
    nullable: false
  })
  id!: number;

  @Field(() => Int, {
    nullable: false
  })
  createdAt!: number;

  @Field(() => Int, {
    nullable: false
  })
  updatedAt!: number;

  @Field(() => Int, {
    nullable: false
  })
  _all!: number;
}
