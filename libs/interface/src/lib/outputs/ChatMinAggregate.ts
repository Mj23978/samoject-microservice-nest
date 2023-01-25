import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType("ChatMinAggregate", {
  isAbstract: true
})
export class ChatMinAggregate {
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
