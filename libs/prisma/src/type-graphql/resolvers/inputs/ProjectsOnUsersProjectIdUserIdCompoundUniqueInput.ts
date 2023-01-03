import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ProjectsOnUsersProjectIdUserIdCompoundUniqueInput", {
  isAbstract: true
})
export class ProjectsOnUsersProjectIdUserIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;
}
