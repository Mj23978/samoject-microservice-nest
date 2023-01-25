import { MessageCreateInput } from "../../../inputs/MessageCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMessageArgs {
  @Field(() => MessageCreateInput, {
    nullable: false
  })
  data!: MessageCreateInput;
}
