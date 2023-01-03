import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectSettingsCreateWithoutProjectInput } from "../inputs/ProjectSettingsCreateWithoutProjectInput";
import { ProjectSettingsUpdateWithoutProjectInput } from "../inputs/ProjectSettingsUpdateWithoutProjectInput";

@TypeGraphQL.InputType("ProjectSettingsUpsertWithoutProjectInput", {
  isAbstract: true
})
export class ProjectSettingsUpsertWithoutProjectInput {
  @TypeGraphQL.Field(_type => ProjectSettingsUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: ProjectSettingsUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => ProjectSettingsCreateWithoutProjectInput, {
    nullable: false
  })
  create!: ProjectSettingsCreateWithoutProjectInput;
}
