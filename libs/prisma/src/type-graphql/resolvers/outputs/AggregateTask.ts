import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCountAggregate } from "../outputs/TaskCountAggregate";
import { TaskMaxAggregate } from "../outputs/TaskMaxAggregate";
import { TaskMinAggregate } from "../outputs/TaskMinAggregate";

@TypeGraphQL.ObjectType("AggregateTask", {
  isAbstract: true
})
export class AggregateTask {
  @TypeGraphQL.Field(_type => TaskCountAggregate, {
    nullable: true
  })
  _count!: TaskCountAggregate | null;

  @TypeGraphQL.Field(_type => TaskMinAggregate, {
    nullable: true
  })
  _min!: TaskMinAggregate | null;

  @TypeGraphQL.Field(_type => TaskMaxAggregate, {
    nullable: true
  })
  _max!: TaskMaxAggregate | null;
}
