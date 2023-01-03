import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCountAggregate } from "../outputs/SpaceCountAggregate";
import { SpaceMaxAggregate } from "../outputs/SpaceMaxAggregate";
import { SpaceMinAggregate } from "../outputs/SpaceMinAggregate";

@TypeGraphQL.ObjectType("SpaceGroupBy", {
  isAbstract: true
})
export class SpaceGroupBy {
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
  viewId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  settingsId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  spaceType!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  chatId!: string | null;

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
