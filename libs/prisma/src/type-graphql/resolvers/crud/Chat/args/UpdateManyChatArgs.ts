import { ChatUpdateManyMutationInput } from "../../../inputs/ChatUpdateManyMutationInput";
import { ChatWhereInput } from "../../../inputs/ChatWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyChatArgs {
  @Field(() => ChatUpdateManyMutationInput, {
    nullable: false
  })
  data!: ChatUpdateManyMutationInput;

  @Field(() => ChatWhereInput, {
    nullable: true
  })
  where?: ChatWhereInput | undefined;
}
