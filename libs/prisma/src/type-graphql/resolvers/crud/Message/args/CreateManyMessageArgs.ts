import { MessageCreateManyInput } from "../../../inputs/MessageCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMessageArgs {
  @Field(() => [MessageCreateManyInput], {
    nullable: false
  })
  data!: MessageCreateManyInput[];

  @Field(() => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
