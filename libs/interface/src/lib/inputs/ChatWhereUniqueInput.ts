import { Field, InputType } from "@nestjs/graphql";

@InputType("ChatWhereUniqueInput", {
  isAbstract: true
})
export class ChatWhereUniqueInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;
}
