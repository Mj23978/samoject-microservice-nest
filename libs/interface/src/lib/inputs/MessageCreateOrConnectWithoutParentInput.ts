import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateWithoutParentInput } from "../inputs/MessageCreateWithoutParentInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@InputType("MessageCreateOrConnectWithoutParentInput", {
  isAbstract: true
})
export class MessageCreateOrConnectWithoutParentInput {
  @Field(() => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @Field(() => MessageCreateWithoutParentInput, {
    nullable: false
  })
  create!: MessageCreateWithoutParentInput;
}
