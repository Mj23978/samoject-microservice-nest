import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutChatInput } from "../inputs/TaskCreateWithoutChatInput";
import { TaskUpdateWithoutChatInput } from "../inputs/TaskUpdateWithoutChatInput";

@TypeGraphQL.InputType("TaskUpsertWithoutChatInput", {
  isAbstract: true
})
export class TaskUpsertWithoutChatInput {
  @TypeGraphQL.Field(_type => TaskUpdateWithoutChatInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutChatInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutChatInput, {
    nullable: false
  })
  create!: TaskCreateWithoutChatInput;
}
