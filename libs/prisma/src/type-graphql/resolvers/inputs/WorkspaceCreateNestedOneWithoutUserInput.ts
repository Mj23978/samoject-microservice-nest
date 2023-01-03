import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceCreateOrConnectWithoutUserInput } from "../inputs/WorkspaceCreateOrConnectWithoutUserInput";
import { WorkspaceCreateWithoutUserInput } from "../inputs/WorkspaceCreateWithoutUserInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.InputType("WorkspaceCreateNestedOneWithoutUserInput", {
  isAbstract: true
})
export class WorkspaceCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => WorkspaceCreateWithoutUserInput, {
    nullable: true
  })
  create?: WorkspaceCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput, {
    nullable: true
  })
  connect?: WorkspaceWhereUniqueInput | undefined;
}
