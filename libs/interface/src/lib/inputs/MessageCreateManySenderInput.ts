import { Field, InputType } from "@nestjs/graphql";

@InputType("MessageCreateManySenderInput", {
  isAbstract: true
})
export class MessageCreateManySenderInput {
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
  parentId?: string | undefined;

  @Field(() => String, {
    nullable: false
  })
  chatId!: string;
}
