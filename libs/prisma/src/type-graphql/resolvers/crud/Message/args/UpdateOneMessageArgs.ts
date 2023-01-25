import { MessageUpdateInput } from "../../../inputs/MessageUpdateInput";
import { MessageWhereUniqueInput } from "../../../inputs/MessageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMessageArgs {
  @Field(() => MessageUpdateInput, {
    nullable: false
  })
  data!: MessageUpdateInput;

  @Field(() => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;
}
