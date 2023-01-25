import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateOrConnectWithoutSubMessagesInput } from "../inputs/MessageCreateOrConnectWithoutSubMessagesInput";
import { MessageCreateWithoutSubMessagesInput } from "../inputs/MessageCreateWithoutSubMessagesInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@InputType("MessageCreateNestedOneWithoutSubMessagesInput", {
  isAbstract: true
})
export class MessageCreateNestedOneWithoutSubMessagesInput {
  @Field(() => MessageCreateWithoutSubMessagesInput, {
    nullable: true
  })
  create?: MessageCreateWithoutSubMessagesInput | undefined;

  @Field(() => MessageCreateOrConnectWithoutSubMessagesInput, {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutSubMessagesInput | undefined;

  @Field(() => MessageWhereUniqueInput, {
    nullable: true
  })
  connect?: MessageWhereUniqueInput | undefined;
}
