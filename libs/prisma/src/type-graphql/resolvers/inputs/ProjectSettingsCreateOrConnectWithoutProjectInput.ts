import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectSettingsCreateWithoutProjectInput } from "../inputs/ProjectSettingsCreateWithoutProjectInput";
import { ProjectSettingsWhereUniqueInput } from "../inputs/ProjectSettingsWhereUniqueInput";

@TypeGraphQL.InputType("ProjectSettingsCreateOrConnectWithoutProjectInput", {
  isAbstract: true
})
export class ProjectSettingsCreateOrConnectWithoutProjectInput {
  @TypeGraphQL.Field(_type => ProjectSettingsWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectSettingsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectSettingsCreateWithoutProjectInput, {
    nullable: false
  })
  create!: ProjectSettingsCreateWithoutProjectInput;
}
