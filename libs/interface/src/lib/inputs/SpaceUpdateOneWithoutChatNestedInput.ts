import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateOrConnectWithoutChatInput } from "../inputs/SpaceCreateOrConnectWithoutChatInput";
import { SpaceCreateWithoutChatInput } from "../inputs/SpaceCreateWithoutChatInput";
import { SpaceUpdateWithoutChatInput } from "../inputs/SpaceUpdateWithoutChatInput";
import { SpaceUpsertWithoutChatInput } from "../inputs/SpaceUpsertWithoutChatInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceUpdateOneWithoutChatNestedInput", {
  isAbstract: true
})
export class SpaceUpdateOneWithoutChatNestedInput {
  @Field(() => SpaceCreateWithoutChatInput, {
    nullable: true
  })
  create?: SpaceCreateWithoutChatInput | undefined;

  @Field(() => SpaceCreateOrConnectWithoutChatInput, {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutChatInput | undefined;

  @Field(() => SpaceUpsertWithoutChatInput, {
    nullable: true
  })
  upsert?: SpaceUpsertWithoutChatInput | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @Field(() => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @Field(() => SpaceWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput | undefined;

  @Field(() => SpaceUpdateWithoutChatInput, {
    nullable: true
  })
  update?: SpaceUpdateWithoutChatInput | undefined;
}
