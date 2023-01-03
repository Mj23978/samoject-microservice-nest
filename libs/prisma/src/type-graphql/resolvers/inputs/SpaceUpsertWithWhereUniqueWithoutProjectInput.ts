import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateWithoutProjectInput } from "../inputs/SpaceCreateWithoutProjectInput";
import { SpaceUpdateWithoutProjectInput } from "../inputs/SpaceUpdateWithoutProjectInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceUpsertWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class SpaceUpsertWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpaceUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: SpaceUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => SpaceCreateWithoutProjectInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutProjectInput;
}
