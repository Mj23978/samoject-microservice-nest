import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateOrConnectWithoutUserInput } from "../inputs/ChatCreateOrConnectWithoutUserInput";
import { ChatCreateWithoutUserInput } from "../inputs/ChatCreateWithoutUserInput";
import { ChatUpdateWithoutUserInput } from "../inputs/ChatUpdateWithoutUserInput";
import { ChatUpsertWithoutUserInput } from "../inputs/ChatUpsertWithoutUserInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@InputType("ChatUpdateOneWithoutUserNestedInput", {
  isAbstract: true
})
export class ChatUpdateOneWithoutUserNestedInput {
  @Field(() => ChatCreateWithoutUserInput, {
    nullable: true
  })
  create?: ChatCreateWithoutUserInput | undefined;

  @Field(() => ChatCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutUserInput | undefined;

  @Field(() => ChatUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: ChatUpsertWithoutUserInput | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @Field(() => ChatWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatWhereUniqueInput | undefined;

  @Field(() => ChatUpdateWithoutUserInput, {
    nullable: true
  })
  update?: ChatUpdateWithoutUserInput | undefined;
}
