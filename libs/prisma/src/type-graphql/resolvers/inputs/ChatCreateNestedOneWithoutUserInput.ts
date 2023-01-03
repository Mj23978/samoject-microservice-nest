import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateOrConnectWithoutUserInput } from "../inputs/ChatCreateOrConnectWithoutUserInput";
import { ChatCreateWithoutUserInput } from "../inputs/ChatCreateWithoutUserInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@TypeGraphQL.InputType("ChatCreateNestedOneWithoutUserInput", {
  isAbstract: true
})
export class ChatCreateNestedOneWithoutUserInput {
  @TypeGraphQL.Field(_type => ChatCreateWithoutUserInput, {
    nullable: true
  })
  create?: ChatCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ChatCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ChatWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatWhereUniqueInput | undefined;
}
