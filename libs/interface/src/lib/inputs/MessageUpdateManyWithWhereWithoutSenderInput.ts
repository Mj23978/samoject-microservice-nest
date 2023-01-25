import { Field, InputType } from "@nestjs/graphql";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyMutationInput } from "../inputs/MessageUpdateManyMutationInput";

@InputType("MessageUpdateManyWithWhereWithoutSenderInput", {
  isAbstract: true
})
export class MessageUpdateManyWithWhereWithoutSenderInput {
  @Field(() => MessageScalarWhereInput, {
    nullable: false
  })
  where!: MessageScalarWhereInput;

  @Field(() => MessageUpdateManyMutationInput, {
    nullable: false
  })
  data!: MessageUpdateManyMutationInput;
}
