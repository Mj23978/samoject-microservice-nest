import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../generated";
import { DecimalJSScalar } from "../../scalars";
import { ChatCreateOrConnectWithoutProjectInput } from "../inputs/ChatCreateOrConnectWithoutProjectInput";
import { ChatCreateWithoutProjectInput } from "../inputs/ChatCreateWithoutProjectInput";
import { ChatWhereUniqueInput } from "../inputs/ChatWhereUniqueInput";

@TypeGraphQL.InputType("ChatCreateNestedOneWithoutProjectInput", {
  isAbstract: true
})
export class ChatCreateNestedOneWithoutProjectInput {
  @TypeGraphQL.Field(_type => ChatCreateWithoutProjectInput, {
    nullable: true
  })
  create?: ChatCreateWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => ChatCreateOrConnectWithoutProjectInput, {
    nullable: true
  })
  connectOrCreate?: ChatCreateOrConnectWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => ChatWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatWhereUniqueInput | undefined;
}
