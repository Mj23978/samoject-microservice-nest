import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectsOnUsersCountAggregate } from "../outputs/ProjectsOnUsersCountAggregate";
import { ProjectsOnUsersMaxAggregate } from "../outputs/ProjectsOnUsersMaxAggregate";
import { ProjectsOnUsersMinAggregate } from "../outputs/ProjectsOnUsersMinAggregate";

@TypeGraphQL.ObjectType("AggregateProjectsOnUsers", {
  isAbstract: true
})
export class AggregateProjectsOnUsers {
  @TypeGraphQL.Field(_type => ProjectsOnUsersCountAggregate, {
    nullable: true
  })
  _count!: ProjectsOnUsersCountAggregate | null;

  @TypeGraphQL.Field(_type => ProjectsOnUsersMinAggregate, {
    nullable: true
  })
  _min!: ProjectsOnUsersMinAggregate | null;

  @TypeGraphQL.Field(_type => ProjectsOnUsersMaxAggregate, {
    nullable: true
  })
  _max!: ProjectsOnUsersMaxAggregate | null;
}
