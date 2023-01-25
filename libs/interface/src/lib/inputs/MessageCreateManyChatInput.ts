import { Field, InputType } from "@nestjs/graphql";

@InputType("MessageCreateManyChatInput", {
  isAbstract: true
})
export class MessageCreateManyChatInput {
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
    nullable: true
  })
  parentId?: string | undefined;
}
