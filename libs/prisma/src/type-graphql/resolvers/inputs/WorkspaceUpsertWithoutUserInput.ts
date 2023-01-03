import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceCreateWithoutUserInput } from "../inputs/WorkspaceCreateWithoutUserInput";
import { WorkspaceUpdateWithoutUserInput } from "../inputs/WorkspaceUpdateWithoutUserInput";

@TypeGraphQL.InputType("WorkspaceUpsertWithoutUserInput", {
  isAbstract: true
})
export class WorkspaceUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => WorkspaceUpdateWithoutUserInput, {
    nullable: false
  })
  update!: WorkspaceUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => WorkspaceCreateWithoutUserInput, {
    nullable: false
  })
  create!: WorkspaceCreateWithoutUserInput;
}
