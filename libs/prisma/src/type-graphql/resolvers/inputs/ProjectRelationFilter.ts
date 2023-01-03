import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectWhereInput } from "../inputs/ProjectWhereInput";

@TypeGraphQL.InputType("ProjectRelationFilter", {
  isAbstract: true
})
export class ProjectRelationFilter {
  @TypeGraphQL.Field(_type => ProjectWhereInput, {
    nullable: true
  })
  is?: ProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereInput, {
    nullable: true
  })
  isNot?: ProjectWhereInput | undefined;
}
