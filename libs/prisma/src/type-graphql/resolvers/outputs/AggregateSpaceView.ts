import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceViewCountAggregate } from "../outputs/SpaceViewCountAggregate";
import { SpaceViewMaxAggregate } from "../outputs/SpaceViewMaxAggregate";
import { SpaceViewMinAggregate } from "../outputs/SpaceViewMinAggregate";

@TypeGraphQL.ObjectType("AggregateSpaceView", {
  isAbstract: true
})
export class AggregateSpaceView {
  @TypeGraphQL.Field(_type => SpaceViewCountAggregate, {
    nullable: true
  })
  _count!: SpaceViewCountAggregate | null;

  @TypeGraphQL.Field(_type => SpaceViewMinAggregate, {
    nullable: true
  })
  _min!: SpaceViewMinAggregate | null;

  @TypeGraphQL.Field(_type => SpaceViewMaxAggregate, {
    nullable: true
  })
  _max!: SpaceViewMaxAggregate | null;
}
