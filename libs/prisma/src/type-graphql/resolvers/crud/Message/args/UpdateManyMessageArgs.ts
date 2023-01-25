import { MessageUpdateManyMutationInput } from "../../../inputs/MessageUpdateManyMutationInput";
import { MessageWhereInput } from "../../../inputs/MessageWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMessageArgs {
  @Field(() => MessageUpdateManyMutationInput, {
    nullable: false
  })
  data!: MessageUpdateManyMutationInput;

  @Field(() => MessageWhereInput, {
    nullable: true
  })
  where?: MessageWhereInput | undefined;
}
