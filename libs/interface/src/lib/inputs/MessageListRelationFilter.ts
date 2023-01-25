import { Field, InputType } from "@nestjs/graphql";
import { MessageWhereInput } from "../inputs/MessageWhereInput";

@InputType("MessageListRelationFilter", {
  isAbstract: true
})
export class MessageListRelationFilter {
  @Field(() => MessageWhereInput, {
    nullable: true
  })
  every?: MessageWhereInput | undefined;

  @Field(() => MessageWhereInput, {
    nullable: true
  })
  some?: MessageWhereInput | undefined;

  @Field(() => MessageWhereInput, {
    nullable: true
  })
  none?: MessageWhereInput | undefined;
}
