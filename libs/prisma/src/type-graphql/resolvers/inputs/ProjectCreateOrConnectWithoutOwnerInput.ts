import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutOwnerInput } from "../inputs/ProjectCreateWithoutOwnerInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateOrConnectWithoutOwnerInput", {
  isAbstract: true
})
export class ProjectCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutOwnerInput;
}
