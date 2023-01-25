import { Field, ObjectType } from "@nestjs/graphql";
import { MessageCount } from "../outputs/MessageCount";
import { Chat } from "./chat.model";
import { User } from "./user.model";

@ObjectType("Message", {
  isAbstract: true
})
export class Message {
  @Field(() => String, {
    nullable: false
  })
  id!: string;

  @Field(() => Date, {
    nullable: false
  })
  createdAt!: Date;

  @Field(() => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @Field(() => String, {
    nullable: false
  })
  content!: string;

  @Field(() => String, {
    nullable: false
  })
  contentType!: string;

  @Field(() => String, {
    nullable: false
  })
  type!: string;

  @Field(() => String, {
    nullable: true
  })
  senderId?: string | null;

  @Field(() => String, {
    nullable: true
  })
  parentId?: string | null;

  @Field(() => String, {
    nullable: false
  })
  chatId!: string;

  chat?: Chat;

  parent?: Message | null;

  sender?: User | null;

  subMessages?: Message[];

  @Field(() => MessageCount, {
    nullable: true
  })
  _count?: MessageCount | null;
}
