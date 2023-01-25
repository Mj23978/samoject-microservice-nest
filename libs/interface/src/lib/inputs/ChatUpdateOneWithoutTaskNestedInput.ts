import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateOrConnectWithoutTaskInput } from "../inputs/ChatCreateOrConnectWithoutTaskInput";
import { ChatCreateWithoutTaskInput } from "../inputs/ChatCreateWithoutTaskInput";
import { ChatUpdateWithoutTaskInput } from "../inputs/ChatUpdateWithoutTaskInput";
import { ChatUpsertWithoutTaskInput } from "../inputs/ChatUpsertWithoutTaskInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@InputType("ChatUpdateOneWithoutTaskNestedInput", {
  isAbstract: true
})
export class ChatUpdateOneWithoutTaskNestedInput {
  @Field(() => ChatCreateWithoutTaskInput, {
    nullable: true
  })
  create?: ChatCreateWithoutTaskInput | undefined;

  @Field(() => ChatCreateOrConnectWithoutTaskInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutTaskInput | undefined;

  @Field(() => ChatUpsertWithoutTaskInput, {
    nullable: true
  })
  upsert?: ChatUpsertWithoutTaskInput | undefined;

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

  @Field(() => ChatUpdateWithoutTaskInput, {
    nullable: true
  })
  update?: ChatUpdateWithoutTaskInput | undefined;
}
