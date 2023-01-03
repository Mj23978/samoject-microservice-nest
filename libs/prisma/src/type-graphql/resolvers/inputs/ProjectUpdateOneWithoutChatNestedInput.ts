import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutChatInput } from "../inputs/ProjectCreateOrConnectWithoutChatInput";
import { ProjectCreateWithoutChatInput } from "../inputs/ProjectCreateWithoutChatInput";
import { ProjectUpdateWithoutChatInput } from "../inputs/ProjectUpdateWithoutChatInput";
import { ProjectUpsertWithoutChatInput } from "../inputs/ProjectUpsertWithoutChatInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateOneWithoutChatNestedInput", {
  isAbstract: true
})
export class ProjectUpdateOneWithoutChatNestedInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutChatInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutChatInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutChatInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutChatInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutChatInput | undefined;
}
