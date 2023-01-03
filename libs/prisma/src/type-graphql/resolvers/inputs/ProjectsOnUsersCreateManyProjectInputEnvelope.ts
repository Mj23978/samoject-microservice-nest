import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsOnUsersCreateManyProjectInput } from "../inputs/ProjectsOnUsersCreateManyProjectInput";

@TypeGraphQL.InputType("ProjectsOnUsersCreateManyProjectInputEnvelope", {
  isAbstract: true
})
export class ProjectsOnUsersCreateManyProjectInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectsOnUsersCreateManyProjectInput], {
    nullable: false
  })
  data!: ProjectsOnUsersCreateManyProjectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
