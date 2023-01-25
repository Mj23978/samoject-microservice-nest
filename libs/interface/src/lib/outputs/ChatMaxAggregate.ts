import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("ChatMaxAggregate", {
  isAbstract: true
})
export class ChatMaxAggregate {
  @Field(() => String, {
    nullable: true
  })
  id!: string | null;

  @Field(() => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt!: Date | null;
}
