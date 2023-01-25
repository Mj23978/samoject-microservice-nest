import { Field, InputType } from "@nestjs/graphql";
import { MessageUpdateWithoutSenderInput } from "../inputs/MessageUpdateWithoutSenderInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@InputType("MessageUpdateWithWhereUniqueWithoutSenderInput", {
  isAbstract: true
})
export class MessageUpdateWithWhereUniqueWithoutSenderInput {
  @Field(() => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @Field(() => MessageUpdateWithoutSenderInput, {
    nullable: false
  })
  data!: MessageUpdateWithoutSenderInput;
}
