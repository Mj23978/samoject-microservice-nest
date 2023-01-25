import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateWithoutParentInput } from "../inputs/MessageCreateWithoutParentInput";
import { MessageUpdateWithoutParentInput } from "../inputs/MessageUpdateWithoutParentInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@InputType("MessageUpsertWithWhereUniqueWithoutParentInput", {
  isAbstract: true
})
export class MessageUpsertWithWhereUniqueWithoutParentInput {
  @Field(() => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @Field(() => MessageUpdateWithoutParentInput, {
    nullable: false
  })
  update!: MessageUpdateWithoutParentInput;

  @Field(() => MessageCreateWithoutParentInput, {
    nullable: false
  })
  create!: MessageCreateWithoutParentInput;
}
