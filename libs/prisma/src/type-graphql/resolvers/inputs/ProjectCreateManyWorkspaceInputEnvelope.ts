import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyWorkspaceInput } from "../inputs/ProjectCreateManyWorkspaceInput";

@TypeGraphQL.InputType("ProjectCreateManyWorkspaceInputEnvelope", {
  isAbstract: true
})
export class ProjectCreateManyWorkspaceInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectCreateManyWorkspaceInput], {
    nullable: false
  })
  data!: ProjectCreateManyWorkspaceInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
