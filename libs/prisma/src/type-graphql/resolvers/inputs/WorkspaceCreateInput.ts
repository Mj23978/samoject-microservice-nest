import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateNestedManyWithoutWorkspaceInput } from "../inputs/ProjectCreateNestedManyWithoutWorkspaceInput";
import { UserCreateNestedOneWithoutWorkspacesInput } from "../inputs/UserCreateNestedOneWithoutWorkspacesInput";
import { WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput } from "../inputs/WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput";

@TypeGraphQL.InputType("WorkspaceCreateInput", {
  isAbstract: true
})
export class WorkspaceCreateInput {
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
  title!: string;

  @TypeGraphQL.Field(_type => WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput, {
    nullable: false
  })
  settings!: WorkspaceSettingsCreateNestedOneWithoutWorkspaceInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutWorkspacesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutWorkspacesInput;

  @TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutWorkspaceInput, {
    nullable: true
  })
  projects?: ProjectCreateNestedManyWithoutWorkspaceInput | undefined;
}
