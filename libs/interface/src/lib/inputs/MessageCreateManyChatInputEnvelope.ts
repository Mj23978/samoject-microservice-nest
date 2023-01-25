import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateManyChatInput } from "../inputs/MessageCreateManyChatInput";

@InputType("MessageCreateManyChatInputEnvelope", {
  isAbstract: true
})
export class MessageCreateManyChatInputEnvelope {
  @Field(() => [MessageCreateManyChatInput], {
    nullable: false
  })
  data!: MessageCreateManyChatInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
