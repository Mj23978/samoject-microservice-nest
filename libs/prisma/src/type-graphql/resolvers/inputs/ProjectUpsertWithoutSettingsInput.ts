import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutSettingsInput } from "../inputs/ProjectCreateWithoutSettingsInput";
import { ProjectUpdateWithoutSettingsInput } from "../inputs/ProjectUpdateWithoutSettingsInput";

@TypeGraphQL.InputType("ProjectUpsertWithoutSettingsInput", {
  isAbstract: true
})
export class ProjectUpsertWithoutSettingsInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutSettingsInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutSettingsInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutSettingsInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutSettingsInput;
}
