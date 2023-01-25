import { Field, InputType } from "@nestjs/graphql";

@InputType("UserWhereUniqueInput", {
  isAbstract: true
})
export class UserWhereUniqueInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  email?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  chatId?: string | undefined;
}
