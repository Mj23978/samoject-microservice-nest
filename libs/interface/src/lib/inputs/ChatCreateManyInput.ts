import { Field, InputType } from "@nestjs/graphql";

@InputType("ChatCreateManyInput", {
  isAbstract: true
})
export class ChatCreateManyInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(() => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
