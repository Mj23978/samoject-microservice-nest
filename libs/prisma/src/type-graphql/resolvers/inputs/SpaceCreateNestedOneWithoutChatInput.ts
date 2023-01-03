import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { SpaceCreateOrConnectWithoutChatInput } from "../inputs/SpaceCreateOrConnectWithoutChatInput";
import { SpaceCreateWithoutChatInput } from "../inputs/SpaceCreateWithoutChatInput";
import { SpaceWhereUniqueInput } from "../inputs/SpaceWhereUniqueInput";

@TypeGraphQL.InputType("SpaceCreateNestedOneWithoutChatInput", {
  isAbstract: true
})
export class SpaceCreateNestedOneWithoutChatInput {
  @TypeGraphQL.Field(_type => SpaceCreateWithoutChatInput, {
    nullable: true
  })
  create?: SpaceCreateWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => SpaceCreateOrConnectWithoutChatInput, {
    nullable: true
  })
  connectOrCreate?: SpaceCreateOrConnectWithoutChatInput | undefined;

  @TypeGraphQL.Field(_type => SpaceWhereUniqueInput, {
    nullable: true
  })
  connect?: SpaceWhereUniqueInput | undefined;
}
