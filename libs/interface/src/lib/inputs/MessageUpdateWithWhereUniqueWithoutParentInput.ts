import { Field, InputType } from "@nestjs/graphql";
import { MessageUpdateWithoutParentInput } from "../inputs/MessageUpdateWithoutParentInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@InputType("MessageUpdateWithWhereUniqueWithoutParentInput", {
  isAbstract: true
})
export class MessageUpdateWithWhereUniqueWithoutParentInput {
  @Field(() => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @Field(() => MessageUpdateWithoutParentInput, {
    nullable: false
  })
  data!: MessageUpdateWithoutParentInput;
}
