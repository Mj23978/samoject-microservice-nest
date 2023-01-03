import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutSpacesInput } from "../inputs/ProjectCreateWithoutSpacesInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateOrConnectWithoutSpacesInput", {
  isAbstract: true
})
export class ProjectCreateOrConnectWithoutSpacesInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutSpacesInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutSpacesInput;
}
