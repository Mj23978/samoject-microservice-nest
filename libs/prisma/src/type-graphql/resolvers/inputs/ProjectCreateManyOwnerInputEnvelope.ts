import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyOwnerInput } from "../inputs/ProjectCreateManyOwnerInput";

@TypeGraphQL.InputType("ProjectCreateManyOwnerInputEnvelope", {
  isAbstract: true
})
export class ProjectCreateManyOwnerInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectCreateManyOwnerInput], {
    nullable: false
  })
  data!: ProjectCreateManyOwnerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
