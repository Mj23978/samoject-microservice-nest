import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceCreateOrConnectWithoutUserInput } from "../inputs/WorkspaceCreateOrConnectWithoutUserInput";
import { WorkspaceCreateWithoutUserInput } from "../inputs/WorkspaceCreateWithoutUserInput";
import { WorkspaceUpdateWithoutUserInput } from "../inputs/WorkspaceUpdateWithoutUserInput";
import { WorkspaceUpsertWithoutUserInput } from "../inputs/WorkspaceUpsertWithoutUserInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.InputType("WorkspaceUpdateOneWithoutUserNestedInput", {
  isAbstract: true
})
export class WorkspaceUpdateOneWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => WorkspaceCreateWithoutUserInput, {
    nullable: true
  })
  create?: WorkspaceCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: WorkspaceUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput, {
    nullable: true
  })
  connect?: WorkspaceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceUpdateWithoutUserInput, {
    nullable: true
  })
  update?: WorkspaceUpdateWithoutUserInput | undefined;
}
