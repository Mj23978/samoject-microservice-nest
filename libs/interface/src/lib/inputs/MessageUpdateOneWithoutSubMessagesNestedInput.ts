import { Field, InputType } from "@nestjs/graphql";
import { MessageCreateOrConnectWithoutSubMessagesInput } from "../inputs/MessageCreateOrConnectWithoutSubMessagesInput";
import { MessageCreateWithoutSubMessagesInput } from "../inputs/MessageCreateWithoutSubMessagesInput";
import { MessageUpdateWithoutSubMessagesInput } from "../inputs/MessageUpdateWithoutSubMessagesInput";
import { MessageUpsertWithoutSubMessagesInput } from "../inputs/MessageUpsertWithoutSubMessagesInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@InputType("MessageUpdateOneWithoutSubMessagesNestedInput", {
  isAbstract: true
})
export class MessageUpdateOneWithoutSubMessagesNestedInput {
  @Field(() => MessageCreateWithoutSubMessagesInput, {
    nullable: true
  })
  create?: MessageCreateWithoutSubMessagesInput | undefined;

  @Field(() => MessageCreateOrConnectWithoutSubMessagesInput, {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutSubMessagesInput | undefined;

  @Field(() => MessageUpsertWithoutSubMessagesInput, {
    nullable: true
  })
  upsert?: MessageUpsertWithoutSubMessagesInput | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @Field(() => MessageWhereUniqueInput, {
    nullable: true
  })
  connect?: MessageWhereUniqueInput | undefined;

  @Field(() => MessageUpdateWithoutSubMessagesInput, {
    nullable: true
  })
  update?: MessageUpdateWithoutSubMessagesInput | undefined;
}
