import { ChatCreateManyInput } from "../../../inputs/ChatCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyChatArgs {
  @Field(() => [ChatCreateManyInput], {
    nullable: false
  })
  data!: ChatCreateManyInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
