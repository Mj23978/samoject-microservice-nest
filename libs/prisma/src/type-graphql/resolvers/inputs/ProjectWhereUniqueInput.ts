import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ProjectWhereUniqueInput", {
  isAbstract: true
})
export class ProjectWhereUniqueInput {
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
  chatId?: string | undefined;
}
