import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("ChatCount", {
  isAbstract: true
})
export class ChatCount {
  @Field(() => Int, {
    nullable: false
  })
  messages!: number;
}
