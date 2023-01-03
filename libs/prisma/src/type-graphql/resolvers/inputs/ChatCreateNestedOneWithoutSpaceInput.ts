import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateOrConnectWithoutSpaceInput } from "../inputs/ChatCreateOrConnectWithoutSpaceInput";
import { ChatCreateWithoutSpaceInput } from "../inputs/ChatCreateWithoutSpaceInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@TypeGraphQL.InputType("ChatCreateNestedOneWithoutSpaceInput", {
  isAbstract: true
})
export class ChatCreateNestedOneWithoutSpaceInput {
  @TypeGraphQL.Field(_type => ChatCreateWithoutSpaceInput, {
    nullable: true
  })
  create?: ChatCreateWithoutSpaceInput | undefined;

  @TypeGraphQL.Field(_type => ChatCreateOrConnectWithoutSpaceInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutSpaceInput | undefined;

  @TypeGraphQL.Field(_type => ChatWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatWhereUniqueInput | undefined;
}
