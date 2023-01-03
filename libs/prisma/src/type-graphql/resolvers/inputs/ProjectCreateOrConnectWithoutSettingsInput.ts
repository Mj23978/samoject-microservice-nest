import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutSettingsInput } from "../inputs/ProjectCreateWithoutSettingsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateOrConnectWithoutSettingsInput", {
  isAbstract: true
})
export class ProjectCreateOrConnectWithoutSettingsInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutSettingsInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutSettingsInput;
}
