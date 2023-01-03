import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutChatInput } from "../inputs/TaskCreateOrConnectWithoutChatInput";
import { TaskCreateWithoutChatInput } from "../inputs/TaskCreateWithoutChatInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedOneWithoutChatInput", {
  isAbstract: true
})
export class TaskCreateNestedOneWithoutChatInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutChatInput, {
    nullable: true
  })
  create?: TaskCreateWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutChatInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;
}
