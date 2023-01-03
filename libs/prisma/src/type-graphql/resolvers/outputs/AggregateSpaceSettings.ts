import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceSettingsCountAggregate } from "../outputs/SpaceSettingsCountAggregate";
import { SpaceSettingsMaxAggregate } from "../outputs/SpaceSettingsMaxAggregate";
import { SpaceSettingsMinAggregate } from "../outputs/SpaceSettingsMinAggregate";

@TypeGraphQL.ObjectType("AggregateSpaceSettings", {
  isAbstract: true
})
export class AggregateSpaceSettings {
  @TypeGraphQL.Field(_type => SpaceSettingsCountAggregate, {
    nullable: true
  })
  _count!: SpaceSettingsCountAggregate | null;

  @TypeGraphQL.Field(_type => SpaceSettingsMinAggregate, {
    nullable: true
  })
  _min!: SpaceSettingsMinAggregate | null;

  @TypeGraphQL.Field(_type => SpaceSettingsMaxAggregate, {
    nullable: true
  })
  _max!: SpaceSettingsMaxAggregate | null;
}
