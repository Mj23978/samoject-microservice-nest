import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateManySenderInput } from "../inputs/MessageCreateManySenderInput";

@InputType("MessageCreateManySenderInputEnvelope", {
  isAbstract: true
})
export class MessageCreateManySenderInputEnvelope {
  @Field(() => [MessageCreateManySenderInput], {
    nullable: false
  })
  data!: MessageCreateManySenderInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
