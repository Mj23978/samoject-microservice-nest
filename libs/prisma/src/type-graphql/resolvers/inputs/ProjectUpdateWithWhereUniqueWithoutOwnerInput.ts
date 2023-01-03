import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectUpdateWithoutOwnerInput } from "../inputs/ProjectUpdateWithoutOwnerInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class ProjectUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: ProjectUpdateWithoutOwnerInput;
}
