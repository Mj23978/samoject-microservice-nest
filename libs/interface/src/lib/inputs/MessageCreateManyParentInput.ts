import { Field, InputType } from "@nestjs/graphql";

@InputType("MessageCreateManyParentInput", {
  isAbstract: true
})
export class MessageCreateManyParentInput {
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

  @Field(() => String, {
    nullable: false
  })
  content!: string;

  @Field(() => String, {
    nullable: true
  })
  contentType?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  type?: string | undefined;

  @Field(() => String, {
    nullable: true
  })
  senderId?: string | undefined;

  @Field(() => String, {
    nullable: false
  })
  chatId!: string;
}
