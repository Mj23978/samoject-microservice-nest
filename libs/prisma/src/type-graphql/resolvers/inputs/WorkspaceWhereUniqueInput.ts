import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("WorkspaceWhereUniqueInput", {
  isAbstract: true
})
export class WorkspaceWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  settingsId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId?: string | undefined;
}
