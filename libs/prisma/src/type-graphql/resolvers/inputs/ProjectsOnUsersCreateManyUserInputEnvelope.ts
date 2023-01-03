import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsOnUsersCreateManyUserInput } from "../inputs/ProjectsOnUsersCreateManyUserInput";

@TypeGraphQL.InputType("ProjectsOnUsersCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class ProjectsOnUsersCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectsOnUsersCreateManyUserInput], {
    nullable: false
  })
  data!: ProjectsOnUsersCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
