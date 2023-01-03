import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceCreateWithoutProjectsInput } from "../inputs/WorkspaceCreateWithoutProjectsInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";

@TypeGraphQL.InputType("WorkspaceCreateOrConnectWithoutProjectsInput", {
  isAbstract: true
})
export class WorkspaceCreateOrConnectWithoutProjectsInput {
  @TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput, {
    nullable: false
  })
  where!: WorkspaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => WorkspaceCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: WorkspaceCreateWithoutProjectsInput;
}
