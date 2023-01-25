import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("MessageCount", {
  isAbstract: true
})
export class MessageCount {
  @Field(() => Int, {
    nullable: false
  })
  subMessages!: number;
}
