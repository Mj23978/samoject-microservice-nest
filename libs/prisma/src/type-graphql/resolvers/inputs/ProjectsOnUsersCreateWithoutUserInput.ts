import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateNestedOneWithoutUsersInput } from "../inputs/ProjectCreateNestedOneWithoutUsersInput";

@TypeGraphQL.InputType("ProjectsOnUsersCreateWithoutUserInput", {
  isAbstract: true
})
export class ProjectsOnUsersCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  assignedBy!: string;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutUsersInput, {
    nullable: false
  })
  project!: ProjectCreateNestedOneWithoutUsersInput;
}
