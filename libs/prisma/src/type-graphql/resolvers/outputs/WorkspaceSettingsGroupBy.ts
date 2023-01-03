import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceSettingsCountAggregate } from "../outputs/WorkspaceSettingsCountAggregate";
import { WorkspaceSettingsMaxAggregate } from "../outputs/WorkspaceSettingsMaxAggregate";
import { WorkspaceSettingsMinAggregate } from "../outputs/WorkspaceSettingsMinAggregate";

@TypeGraphQL.ObjectType("WorkspaceSettingsGroupBy", {
  isAbstract: true
})
export class WorkspaceSettingsGroupBy {
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
  localId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  workspaceId!: string;

  @TypeGraphQL.Field(_type => WorkspaceSettingsCountAggregate, {
    nullable: true
  })
  _count!: WorkspaceSettingsCountAggregate | null;

  @TypeGraphQL.Field(_type => WorkspaceSettingsMinAggregate, {
    nullable: true
  })
  _min!: WorkspaceSettingsMinAggregate | null;

  @TypeGraphQL.Field(_type => WorkspaceSettingsMaxAggregate, {
    nullable: true
  })
  _max!: WorkspaceSettingsMaxAggregate | null;
}
