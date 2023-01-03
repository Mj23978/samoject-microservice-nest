import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceCountAggregate } from "../outputs/WorkspaceCountAggregate";
import { WorkspaceMaxAggregate } from "../outputs/WorkspaceMaxAggregate";
import { WorkspaceMinAggregate } from "../outputs/WorkspaceMinAggregate";

@TypeGraphQL.ObjectType("WorkspaceGroupBy", {
  isAbstract: true
})
export class WorkspaceGroupBy {
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
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  settingsId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => WorkspaceCountAggregate, {
    nullable: true
  })
  _count!: WorkspaceCountAggregate | null;

  @TypeGraphQL.Field(_type => WorkspaceMinAggregate, {
    nullable: true
  })
  _min!: WorkspaceMinAggregate | null;

  @TypeGraphQL.Field(_type => WorkspaceMaxAggregate, {
    nullable: true
  })
  _max!: WorkspaceMaxAggregate | null;
}
