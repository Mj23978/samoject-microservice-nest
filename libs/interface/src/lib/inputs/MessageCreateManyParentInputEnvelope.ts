import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateManyParentInput } from "../inputs/MessageCreateManyParentInput";

@InputType("MessageCreateManyParentInputEnvelope", {
  isAbstract: true
})
export class MessageCreateManyParentInputEnvelope {
  @Field(() => [MessageCreateManyParentInput], {
    nullable: false
  })
  data!: MessageCreateManyParentInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
