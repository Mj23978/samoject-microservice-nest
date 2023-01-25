import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateManyParentInputEnvelope } from "../inputs/MessageCreateManyParentInputEnvelope";
import { MessageCreateOrConnectWithoutParentInput } from "../inputs/MessageCreateOrConnectWithoutParentInput";
import { MessageCreateWithoutParentInput } from "../inputs/MessageCreateWithoutParentInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@InputType("MessageCreateNestedManyWithoutParentInput", {
  isAbstract: true
})
export class MessageCreateNestedManyWithoutParentInput {
  @Field(() => [MessageCreateWithoutParentInput], {
    nullable: true
  })
  create?: MessageCreateWithoutParentInput[] | undefined;

  @Field(() => [MessageCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutParentInput[] | undefined;

  @Field(() => MessageCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: MessageCreateManyParentInputEnvelope | undefined;

  @Field(() => [MessageWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageWhereUniqueInput[] | undefined;
}
