import { MessageWhereUniqueInput } from "../../../inputs/MessageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMessageArgs {
  @Field(() => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;
}
