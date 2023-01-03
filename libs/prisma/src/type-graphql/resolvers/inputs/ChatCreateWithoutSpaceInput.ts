import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateNestedManyWithoutChatInput } from "../inputs/MessageCreateNestedManyWithoutChatInput";
import { ProjectCreateNestedOneWithoutChatInput } from "../inputs/ProjectCreateNestedOneWithoutChatInput";
import { TaskCreateNestedOneWithoutChatInput } from "../inputs/TaskCreateNestedOneWithoutChatInput";
import { UserCreateNestedOneWithoutChatInput } from "../inputs/UserCreateNestedOneWithoutChatInput";

@TypeGraphQL.InputType("ChatCreateWithoutSpaceInput", {
  isAbstract: true
})
export class ChatCreateWithoutSpaceInput {
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

  @TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutChatInput, {
    nullable: true
  })
  messages?: MessageCreateNestedManyWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutChatInput, {
    nullable: true
  })
  Project?: ProjectCreateNestedOneWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutChatInput, {
    nullable: true
  })
  Task?: TaskCreateNestedOneWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutChatInput, {
    nullable: true
  })
  User?: UserCreateNestedOneWithoutChatInput | undefined;
}
