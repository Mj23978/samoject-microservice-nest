import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutChatInput } from "../inputs/ProjectCreateOrConnectWithoutChatInput";
import { ProjectCreateWithoutChatInput } from "../inputs/ProjectCreateWithoutChatInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateNestedOneWithoutChatInput", {
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutChatInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutChatInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutChatInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
