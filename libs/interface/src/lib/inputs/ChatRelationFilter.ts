import { Field, InputType } from "@nestjs/graphql";
import { ChatWhereInput } from "../inputs/ChatWhereInput";

@InputType("ChatRelationFilter", {
  isAbstract: true
})
export class ChatRelationFilter {
  @Field(() => ChatWhereInput, {
    nullable: true
  })
  is?: ChatWhereInput | undefined;

  @Field(() => ChatWhereInput, {
    nullable: true
  })
  isNot?: ChatWhereInput | undefined;
}
