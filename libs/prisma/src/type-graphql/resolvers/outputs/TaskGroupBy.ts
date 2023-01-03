import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { TaskCountAggregate } from "../outputs/TaskCountAggregate";
import { TaskMaxAggregate } from "../outputs/TaskMaxAggregate";
import { TaskMinAggregate } from "../outputs/TaskMinAggregate";

@TypeGraphQL.ObjectType("TaskGroupBy", {
  isAbstract: true
})
export class TaskGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projectId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  creatorId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  details!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chatId!: string | null;

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
