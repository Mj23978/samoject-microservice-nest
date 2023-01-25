import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateWithoutSubMessagesInput } from "../inputs/MessageCreateWithoutSubMessagesInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@InputType("MessageCreateOrConnectWithoutSubMessagesInput", {
  isAbstract: true
})
export class MessageCreateOrConnectWithoutSubMessagesInput {
  @Field(() => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @Field(() => MessageCreateWithoutSubMessagesInput, {
    nullable: false
  })
  create!: MessageCreateWithoutSubMessagesInput;
}
