import { Field, InputType } from "@nestjs/graphql";
import { SpaceCreateWithoutChatInput } from "../inputs/SpaceCreateWithoutChatInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@InputType("SpaceCreateOrConnectWithoutChatInput", {
  isAbstract: true
})
export class SpaceCreateOrConnectWithoutChatInput {
  @Field(() => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @Field(() => SpaceCreateWithoutChatInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutChatInput;
}
