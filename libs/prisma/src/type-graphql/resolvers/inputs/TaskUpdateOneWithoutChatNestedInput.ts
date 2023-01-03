import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutChatInput } from "../inputs/TaskCreateOrConnectWithoutChatInput";
import { TaskCreateWithoutChatInput } from "../inputs/TaskCreateWithoutChatInput";
import { TaskUpdateWithoutChatInput } from "../inputs/TaskUpdateWithoutChatInput";
import { TaskUpsertWithoutChatInput } from "../inputs/TaskUpsertWithoutChatInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateOneWithoutChatNestedInput", {
  isAbstract: true
})
export class TaskUpdateOneWithoutChatNestedInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutChatInput, {
    nullable: true
  })
  create?: TaskCreateWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutChatInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpsertWithoutChatInput, {
    nullable: true
  })
  upsert?: TaskUpsertWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutChatInput, {
    nullable: true
  })
  update?: TaskUpdateWithoutChatInput | undefined;
}
