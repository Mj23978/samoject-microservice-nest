import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateOrConnectWithoutChatInput } from "../inputs/SpaceCreateOrConnectWithoutChatInput";
import { SpaceCreateWithoutChatInput } from "../inputs/SpaceCreateWithoutChatInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceCreateNestedOneWithoutChatInput", {
  isAbstract: true
})
export class SpaceCreateNestedOneWithoutChatInput {
  @Field(() => SpaceCreateWithoutChatInput, {
    nullable: true
  })
  create?: SpaceCreateWithoutChatInput | undefined;

  @Field(() => SpaceCreateOrConnectWithoutChatInput, {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutChatInput | undefined;

  @Field(() => SpaceWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput | undefined;
}
