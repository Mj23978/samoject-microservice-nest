import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateNestedOneWithoutMessagesInput } from "../inputs/ChatCreateNestedOneWithoutMessagesInput";
import { MessageCreateNestedManyWithoutParentInput } from "../inputs/MessageCreateNestedManyWithoutParentInput";
import { MessageCreateNestedOneWithoutSubMessagesInput } from "../inputs/MessageCreateNestedOneWithoutSubMessagesInput";

@TypeGraphQL.InputType("MessageCreateWithoutSenderInput", {
  isAbstract: true
})
export class MessageCreateWithoutSenderInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contentType?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | undefined;

  @TypeGraphQL.Field(_type => ChatCreateNestedOneWithoutMessagesInput, {
    nullable: false
  })
  chat!: ChatCreateNestedOneWithoutMessagesInput;

  @TypeGraphQL.Field(_type => MessageCreateNestedOneWithoutSubMessagesInput, {
    nullable: true
  })
  parent?: MessageCreateNestedOneWithoutSubMessagesInput | undefined;

  @TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutParentInput, {
    nullable: true
  })
  subMessages?: MessageCreateNestedManyWithoutParentInput | undefined;
}
