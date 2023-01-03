import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../generated";
import { DecimalJSScalar } from "../scalars";
import { Space } from "../models/Space";

@TypeGraphQL.ObjectType("SpaceView", {
  isAbstract: true
})
export class SpaceView {
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
  spaceId!: string;

  space?: Space | null;
}
