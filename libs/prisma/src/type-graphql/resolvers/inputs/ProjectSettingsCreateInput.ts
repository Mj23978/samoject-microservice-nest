import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateNestedOneWithoutSettingsInput } from "../inputs/ProjectCreateNestedOneWithoutSettingsInput";

@TypeGraphQL.InputType("ProjectSettingsCreateInput", {
  isAbstract: true
})
export class ProjectSettingsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  localId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectId!: string;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutSettingsInput, {
    nullable: true
  })
  project?: ProjectCreateNestedOneWithoutSettingsInput | undefined;
}
