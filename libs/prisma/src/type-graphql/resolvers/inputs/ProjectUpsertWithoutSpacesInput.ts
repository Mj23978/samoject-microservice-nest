import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutSpacesInput } from "../inputs/ProjectCreateWithoutSpacesInput";
import { ProjectUpdateWithoutSpacesInput } from "../inputs/ProjectUpdateWithoutSpacesInput";

@TypeGraphQL.InputType("ProjectUpsertWithoutSpacesInput", {
  isAbstract: true
})
export class ProjectUpsertWithoutSpacesInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutSpacesInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutSpacesInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutSpacesInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutSpacesInput;
}
