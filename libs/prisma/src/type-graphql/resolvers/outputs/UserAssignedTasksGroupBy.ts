import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { UserAssignedTasksCountAggregate } from "../outputs/UserAssignedTasksCountAggregate";
import { UserAssignedTasksMaxAggregate } from "../outputs/UserAssignedTasksMaxAggregate";
import { UserAssignedTasksMinAggregate } from "../outputs/UserAssignedTasksMinAggregate";

@TypeGraphQL.ObjectType("UserAssignedTasksGroupBy", {
  isAbstract: true
})
export class UserAssignedTasksGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  taskId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  assignedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  assignedBy!: string;

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
