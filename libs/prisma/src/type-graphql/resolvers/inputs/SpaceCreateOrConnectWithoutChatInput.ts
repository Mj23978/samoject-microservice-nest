import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateWithoutChatInput } from "../inputs/SpaceCreateWithoutChatInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceCreateOrConnectWithoutChatInput", {
  isAbstract: true
})
export class SpaceCreateOrConnectWithoutChatInput {
  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: false
  })
  where!: SpaceWhereUniqueInput;

  @TypeGraphQL.Field(_type => SpaceCreateWithoutChatInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutChatInput;
}
