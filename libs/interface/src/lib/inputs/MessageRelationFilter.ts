import { Field, InputType } from "@nestjs/graphql";
import { MessageWhereInput } from "../inputs/MessageWhereInput";

@InputType("MessageRelationFilter", {
  isAbstract: true
})
export class MessageRelationFilter {
  @Field(() => MessageWhereInput, {
    nullable: true
  })
  is?: MessageWhereInput | undefined;

  @Field(() => MessageWhereInput, {
    nullable: true
  })
  isNot?: MessageWhereInput | undefined;
}
