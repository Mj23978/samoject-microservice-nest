import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateWithoutSenderInput } from "../inputs/MessageCreateWithoutSenderInput";
import { MessageUpdateWithoutSenderInput } from "../inputs/MessageUpdateWithoutSenderInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@InputType("MessageUpsertWithWhereUniqueWithoutSenderInput", {
  isAbstract: true
})
export class MessageUpsertWithWhereUniqueWithoutSenderInput {
  @Field(() => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @Field(() => MessageUpdateWithoutSenderInput, {
    nullable: false
  })
  update!: MessageUpdateWithoutSenderInput;

  @Field(() => MessageCreateWithoutSenderInput, {
    nullable: false
  })
  create!: MessageCreateWithoutSenderInput;
}
