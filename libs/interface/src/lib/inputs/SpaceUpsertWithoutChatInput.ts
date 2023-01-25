import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateWithoutChatInput } from "../inputs/SpaceCreateWithoutChatInput";
import { SpaceUpdateWithoutChatInput } from "../inputs/SpaceUpdateWithoutChatInput";

@InputType("SpaceUpsertWithoutChatInput", {
  isAbstract: true
})
export class SpaceUpsertWithoutChatInput {
  @Field(() => SpaceUpdateWithoutChatInput, {
    nullable: false
  })
  update!: SpaceUpdateWithoutChatInput;

  @Field(() => SpaceCreateWithoutChatInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutChatInput;
}
