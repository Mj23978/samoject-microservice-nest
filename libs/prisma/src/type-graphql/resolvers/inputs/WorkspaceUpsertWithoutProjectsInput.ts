import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceCreateWithoutProjectsInput } from "../inputs/WorkspaceCreateWithoutProjectsInput";
import { WorkspaceUpdateWithoutProjectsInput } from "../inputs/WorkspaceUpdateWithoutProjectsInput";

@TypeGraphQL.InputType("WorkspaceUpsertWithoutProjectsInput", {
  isAbstract: true
})
export class WorkspaceUpsertWithoutProjectsInput {
  @TypeGraphQL.Field(_type => WorkspaceUpdateWithoutProjectsInput, {
    nullable: false
  })
  update!: WorkspaceUpdateWithoutProjectsInput;

  @TypeGraphQL.Field(_type => WorkspaceCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: WorkspaceCreateWithoutProjectsInput;
}
