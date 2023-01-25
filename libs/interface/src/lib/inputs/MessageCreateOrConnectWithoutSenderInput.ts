import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateWithoutSenderInput } from "../inputs/MessageCreateWithoutSenderInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@InputType("MessageCreateOrConnectWithoutSenderInput", {
  isAbstract: true
})
export class MessageCreateOrConnectWithoutSenderInput {
  @Field(() => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @Field(() => MessageCreateWithoutSenderInput, {
    nullable: false
  })
  create!: MessageCreateWithoutSenderInput;
}
