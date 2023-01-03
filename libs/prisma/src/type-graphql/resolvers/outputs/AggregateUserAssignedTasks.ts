import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserAssignedTasksCountAggregate } from "../outputs/UserAssignedTasksCountAggregate";
import { UserAssignedTasksMaxAggregate } from "../outputs/UserAssignedTasksMaxAggregate";
import { UserAssignedTasksMinAggregate } from "../outputs/UserAssignedTasksMinAggregate";

@TypeGraphQL.ObjectType("AggregateUserAssignedTasks", {
  isAbstract: true
})
export class AggregateUserAssignedTasks {
  @TypeGraphQL.Field(_type => UserAssignedTasksCountAggregate, {
    nullable: true
  })
  _count!: UserAssignedTasksCountAggregate | null;

  @TypeGraphQL.Field(_type => UserAssignedTasksMinAggregate, {
    nullable: true
  })
  _min!: UserAssignedTasksMinAggregate | null;

  @TypeGraphQL.Field(_type => UserAssignedTasksMaxAggregate, {
    nullable: true
  })
  _max!: UserAssignedTasksMaxAggregate | null;
}
