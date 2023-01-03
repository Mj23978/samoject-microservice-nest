import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceUpdateWithoutProjectInput } from "../inputs/SpaceUpdateWithoutProjectInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceUpdateWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class SpaceUpdateWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpaceUpdateWithoutProjectInput, {
    nullable: false
  })
  data!: SpaceUpdateWithoutProjectInput;
}
