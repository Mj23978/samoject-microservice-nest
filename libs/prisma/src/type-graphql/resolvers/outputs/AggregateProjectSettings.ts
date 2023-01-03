import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ProjectSettingsCountAggregate } from "../outputs/ProjectSettingsCountAggregate";
import { ProjectSettingsMaxAggregate } from "../outputs/ProjectSettingsMaxAggregate";
import { ProjectSettingsMinAggregate } from "../outputs/ProjectSettingsMinAggregate";

@TypeGraphQL.ObjectType("AggregateProjectSettings", {
  isAbstract: true
})
export class AggregateProjectSettings {
  @TypeGraphQL.Field(_type => ProjectSettingsCountAggregate, {
    nullable: true
  })
  _count!: ProjectSettingsCountAggregate | null;

  @TypeGraphQL.Field(_type => ProjectSettingsMinAggregate, {
    nullable: true
  })
  _min!: ProjectSettingsMinAggregate | null;

  @TypeGraphQL.Field(_type => ProjectSettingsMaxAggregate, {
    nullable: true
  })
  _max!: ProjectSettingsMaxAggregate | null;
}
