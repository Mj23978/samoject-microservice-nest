import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutOwnerInput } from "../inputs/ProjectCreateWithoutOwnerInput";
import { ProjectUpdateWithoutOwnerInput } from "../inputs/ProjectUpdateWithoutOwnerInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpsertWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class ProjectUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutOwnerInput;
}
