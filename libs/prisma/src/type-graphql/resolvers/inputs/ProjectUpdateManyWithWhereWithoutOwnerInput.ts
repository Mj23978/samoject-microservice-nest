import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyMutationInput } from "../inputs/ProjectUpdateManyMutationInput";

@TypeGraphQL.InputType("ProjectUpdateManyWithWhereWithoutOwnerInput", {
  isAbstract: true
})
export class ProjectUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field(_type => ProjectScalarWhereInput, {
    nullable: false
  })
  where!: ProjectScalarWhereInput;

  @TypeGraphQL.Field(_type => ProjectUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProjectUpdateManyMutationInput;
}
