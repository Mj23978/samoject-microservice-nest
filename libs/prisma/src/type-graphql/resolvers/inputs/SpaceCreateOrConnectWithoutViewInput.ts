import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateWithoutViewInput } from "../inputs/SpaceCreateWithoutViewInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceCreateOrConnectWithoutViewInput", {
  isAbstract: true
})
export class SpaceCreateOrConnectWithoutViewInput {
  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpaceCreateWithoutViewInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutViewInput;
}
