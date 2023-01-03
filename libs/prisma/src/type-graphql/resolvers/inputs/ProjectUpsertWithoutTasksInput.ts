import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutTasksInput } from "../inputs/ProjectCreateWithoutTasksInput";
import { ProjectUpdateWithoutTasksInput } from "../inputs/ProjectUpdateWithoutTasksInput";

@TypeGraphQL.InputType("ProjectUpsertWithoutTasksInput", {
  isAbstract: true
})
export class ProjectUpsertWithoutTasksInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutTasksInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutTasksInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutTasksInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutTasksInput;
}
