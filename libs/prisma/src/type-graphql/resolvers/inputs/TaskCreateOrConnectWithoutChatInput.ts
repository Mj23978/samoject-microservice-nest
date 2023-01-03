import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutChatInput } from "../inputs/TaskCreateWithoutChatInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateOrConnectWithoutChatInput", {
  isAbstract: true
})
export class TaskCreateOrConnectWithoutChatInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutChatInput, {
    nullable: false
  })
  create!: TaskCreateWithoutChatInput;
}
