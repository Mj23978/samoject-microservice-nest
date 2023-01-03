import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCountAggregate } from "../outputs/SpaceCountAggregate";
import { SpaceMaxAggregate } from "../outputs/SpaceMaxAggregate";
import { SpaceMinAggregate } from "../outputs/SpaceMinAggregate";

@TypeGraphQL.ObjectType("AggregateSpace", {
  isAbstract: true
})
export class AggregateSpace {
  @TypeGraphQL.Field(_type => SpaceCountAggregate, {
    nullable: true
  })
  _count!: SpaceCountAggregate | null;

  @TypeGraphQL.Field(_type => SpaceMinAggregate, {
    nullable: true
  })
  _min!: SpaceMinAggregate | null;

  @TypeGraphQL.Field(_type => SpaceMaxAggregate, {
    nullable: true
  })
  _max!: SpaceMaxAggregate | null;
}
