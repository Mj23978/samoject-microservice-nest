import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceScalarWhereInput } from "../inputs/SpaceScalarWhereInput";
import { SpaceUpdateManyMutationInput } from "../inputs/SpaceUpdateManyMutationInput";

@TypeGraphQL.InputType("SpaceUpdateManyWithWhereWithoutProjectInput", {
  isAbstract: true
})
export class SpaceUpdateManyWithWhereWithoutProjectInput {
  @TypeGraphQL.Field(_type => SpaceScalarWhereInput, {
    nullable: false
  })
  where!: SpaceScalarWhereInput;

  @TypeGraphQL.Field(_type => SpaceUpdateManyMutationInput, {
    nullable: false
  })
  data!: SpaceUpdateManyMutationInput;
}
