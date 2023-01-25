import { Field, InputType } from "@nestjs/graphql";

@InputType("MessageWhereUniqueInput", {
  isAbstract: true
})
export class MessageWhereUniqueInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;
}
