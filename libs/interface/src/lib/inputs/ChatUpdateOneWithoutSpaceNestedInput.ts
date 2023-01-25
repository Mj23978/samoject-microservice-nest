import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateOrConnectWithoutSpaceInput } from "../inputs/ChatCreateOrConnectWithoutSpaceInput";
import { ChatCreateWithoutSpaceInput } from "../inputs/ChatCreateWithoutSpaceInput";
import { ChatUpdateWithoutSpaceInput } from "../inputs/ChatUpdateWithoutSpaceInput";
import { ChatUpsertWithoutSpaceInput } from "../inputs/ChatUpsertWithoutSpaceInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@InputType("ChatUpdateOneWithoutSpaceNestedInput", {
  isAbstract: true
})
export class ChatUpdateOneWithoutSpaceNestedInput {
  @Field(() => ChatCreateWithoutSpaceInput, {
    nullable: true
  })
  create?: ChatCreateWithoutSpaceInput | undefined;

  @Field(() => ChatCreateOrConnectWithoutSpaceInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutSpaceInput | undefined;

  @Field(() => ChatUpsertWithoutSpaceInput, {
    nullable: true
  })
  upsert?: ChatUpsertWithoutSpaceInput | undefined;

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

  @Field(() => ChatUpdateWithoutSpaceInput, {
    nullable: true
  })
  update?: ChatUpdateWithoutSpaceInput | undefined;
}
