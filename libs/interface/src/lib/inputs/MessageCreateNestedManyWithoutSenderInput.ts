import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateManySenderInputEnvelope } from "../inputs/MessageCreateManySenderInputEnvelope";
import { MessageCreateOrConnectWithoutSenderInput } from "../inputs/MessageCreateOrConnectWithoutSenderInput";
import { MessageCreateWithoutSenderInput } from "../inputs/MessageCreateWithoutSenderInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@InputType("MessageCreateNestedManyWithoutSenderInput", {
  isAbstract: true
})
export class MessageCreateNestedManyWithoutSenderInput {
  @Field(() => [MessageCreateWithoutSenderInput], {
    nullable: true
  })
  create?: MessageCreateWithoutSenderInput[] | undefined;

  @Field(() => [MessageCreateOrConnectWithoutSenderInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutSenderInput[] | undefined;

  @Field(() => MessageCreateManySenderInputEnvelope, {
    nullable: true
  })
  createMany?: MessageCreateManySenderInputEnvelope | undefined;

  @Field(() => [MessageWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageWhereUniqueInput[] | undefined;
}
