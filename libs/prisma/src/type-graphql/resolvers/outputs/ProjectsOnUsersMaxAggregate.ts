import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ProjectsOnUsersMaxAggregate", {
  isAbstract: true
})
export class ProjectsOnUsersMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projectId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assignedBy!: string | null;
}
