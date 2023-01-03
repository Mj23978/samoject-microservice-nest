import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { WorkspaceSettingsCountAggregate } from "../outputs/WorkspaceSettingsCountAggregate";
import { WorkspaceSettingsMaxAggregate } from "../outputs/WorkspaceSettingsMaxAggregate";
import { WorkspaceSettingsMinAggregate } from "../outputs/WorkspaceSettingsMinAggregate";

@TypeGraphQL.ObjectType("AggregateWorkspaceSettings", {
  isAbstract: true
})
export class AggregateWorkspaceSettings {
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
