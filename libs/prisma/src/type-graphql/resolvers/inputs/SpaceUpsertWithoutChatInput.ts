import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateWithoutChatInput } from "../inputs/SpaceCreateWithoutChatInput";
import { SpaceUpdateWithoutChatInput } from "../inputs/SpaceUpdateWithoutChatInput";

@TypeGraphQL.InputType("SpaceUpsertWithoutChatInput", {
  isAbstract: true
})
export class SpaceUpsertWithoutChatInput {
  @TypeGraphQL.Field(_type => SpaceUpdateWithoutChatInput, {
    nullable: false
  })
  update!: SpaceUpdateWithoutChatInput;

  @TypeGraphQL.Field(_type => SpaceCreateWithoutChatInput, {
    nullable: false
  })
  create!: SpaceCreateWithoutChatInput;
}
