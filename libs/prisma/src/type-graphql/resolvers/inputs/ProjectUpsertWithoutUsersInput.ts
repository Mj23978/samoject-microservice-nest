import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutUsersInput } from "../inputs/ProjectCreateWithoutUsersInput";
import { ProjectUpdateWithoutUsersInput } from "../inputs/ProjectUpdateWithoutUsersInput";

@TypeGraphQL.InputType("ProjectUpsertWithoutUsersInput", {
  isAbstract: true
})
export class ProjectUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutUsersInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutUsersInput;
}
