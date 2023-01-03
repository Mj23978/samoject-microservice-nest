import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCountAggregate } from "../outputs/ChatCountAggregate";
import { ChatMaxAggregate } from "../outputs/ChatMaxAggregate";
import { ChatMinAggregate } from "../outputs/ChatMinAggregate";

@TypeGraphQL.ObjectType("AggregateChat", {
  isAbstract: true
})
export class AggregateChat {
  @TypeGraphQL.Field(_type => ChatCountAggregate, {
    nullable: true
  })
  _count!: ChatCountAggregate | null;

  @TypeGraphQL.Field(_type => ChatMinAggregate, {
    nullable: true
  })
  _min!: ChatMinAggregate | null;

  @TypeGraphQL.Field(_type => ChatMaxAggregate, {
    nullable: true
  })
  _max!: ChatMaxAggregate | null;
}
