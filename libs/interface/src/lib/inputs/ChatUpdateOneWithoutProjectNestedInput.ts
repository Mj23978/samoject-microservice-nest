import { Field, InputType } from "@nestjs/graphql";
import { ChatCreateOrConnectWithoutProjectInput } from "../inputs/ChatCreateOrConnectWithoutProjectInput";
import { ChatCreateWithoutProjectInput } from "../inputs/ChatCreateWithoutProjectInput";
import { ChatUpdateWithoutProjectInput } from "../inputs/ChatUpdateWithoutProjectInput";
import { ChatUpsertWithoutProjectInput } from "../inputs/ChatUpsertWithoutProjectInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@InputType("ChatUpdateOneWithoutProjectNestedInput", {
  isAbstract: true
})
export class ChatUpdateOneWithoutProjectNestedInput {
  @Field(() => ChatCreateWithoutProjectInput, {
    nullable: true
  })
  create?: ChatCreateWithoutProjectInput | undefined;

  @Field(() => ChatCreateOrConnectWithoutProjectInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutProjectInput | undefined;

  @Field(() => ChatUpsertWithoutProjectInput, {
    nullable: true
  })
  upsert?: ChatUpsertWithoutProjectInput | undefined;

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

  @Field(() => ChatUpdateWithoutProjectInput, {
    nullable: true
  })
  update?: ChatUpdateWithoutProjectInput | undefined;
}
