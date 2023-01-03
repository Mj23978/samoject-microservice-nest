import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceCreateOrConnectWithoutProjectsInput } from "../inputs/WorkspaceCreateOrConnectWithoutProjectsInput";
import { WorkspaceCreateWithoutProjectsInput } from "../inputs/WorkspaceCreateWithoutProjectsInput";
import { WorkspaceUpdateWithoutProjectsInput } from "../inputs/WorkspaceUpdateWithoutProjectsInput";
import { WorkspaceUpsertWithoutProjectsInput } from "../inputs/WorkspaceUpsertWithoutProjectsInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.InputType("WorkspaceUpdateOneRequiredWithoutProjectsNestedInput", {
  isAbstract: true
})
export class WorkspaceUpdateOneRequiredWithoutProjectsNestedInput {
  @TypeGraphQL.Field(_type => WorkspaceCreateWithoutProjectsInput, {
    nullable: true
  })
  create?: WorkspaceCreateWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceCreateOrConnectWithoutProjectsInput, {
    nullable: true
  })
  connectOrCreate?: WorkspaceCreateOrConnectWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceUpsertWithoutProjectsInput, {
    nullable: true
  })
  upsert?: WorkspaceUpsertWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput, {
    nullable: true
  })
  connect?: WorkspaceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceUpdateWithoutProjectsInput, {
    nullable: true
  })
  update?: WorkspaceUpdateWithoutProjectsInput | undefined;
}
